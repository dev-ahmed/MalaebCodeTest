import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {RadioButton} from '../../molecules';
import {Contact, SelectedContactsList} from '../../organisms';
import styles from './styles';

const _ContactsListTemp = ({contacts}) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const _setSelectedContacts = (item) => {
    let _selectedContacts;

    if (selectedContacts.includes(item)) {
      _selectedContacts = selectedContacts.filter((it) => item !== it);
    } else {
      _selectedContacts = [...new Set([item, ...selectedContacts])];
    }
    setSelectedContacts(_selectedContacts);
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.contactContainer}>
        <Contact style={styles.contact} {...{item}} />
        <RadioButton
          isSelected={selectedContacts.includes(selectedContacts)}
          onSelect={() => _setSelectedContacts(item)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return selectedContacts ? (
            <SelectedContactsList
              style={styles.selectedContactsList}
              {...{selectedContacts}}
            />
          ) : null;
        }}
        style={styles.contactsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        data={contacts}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

_ContactsListTemp.propTypes = {
  contacts: PropTypes.array,
};

export const ContactsListTemp = React.memo(_ContactsListTemp);
