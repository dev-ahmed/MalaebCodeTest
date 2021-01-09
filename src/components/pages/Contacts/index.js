import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {useCallbackOne} from 'use-memo-one';
import {AppView} from '../../atoms/AppView';
import {SearchBar} from '../../organisms';
import {ContactsListTemp} from '../../templates/ContactsListTemp';
import styles from './styles';
import _ from 'lodash';
import {PermissionsAndroid, Platform} from 'react-native';

let allContacts = [];

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [searchKey, setSearchKey] = useState();

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const initialFetch = useCallbackOne(async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      });
    }
    const _contacts = await Contacts.getAll();
    allContacts = _contacts;
    setContacts(_contacts);
  });

  const _onSearch = (text) => {
    const handledText = text.replace(/\s+/g, '').toLowerCase();

    const _searchedContacts = allContacts.filter((contact) => {
      const {givenName, familyName} = contact;
      const fullName = `${givenName}${familyName}`.toLowerCase();
      return fullName.includes(handledText);
    });

    setSearchKey(text);
    setContacts(_searchedContacts);
    if (text.length === 0) {
      initialFetch();
    }
  };

  return (
    <AppView style={styles.container}>
      <SearchBar
        value={searchKey}
        onSearch={_onSearch}
        style={styles.searchBar}
      />
      <ContactsListTemp contacts={contacts} />
    </AppView>
  );
};

ContactsPage.propTypes = {};

export {ContactsPage};
