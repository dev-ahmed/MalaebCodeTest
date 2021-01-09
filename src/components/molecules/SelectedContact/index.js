import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../../constants';
import styles from './styles';

const _SelectedContact = ({item}) => {
  const {thumbnailPath, givenName, familyName} = item;

  const icon = thumbnailPath ? {uri: thumbnailPath} : icons.person_placeholder;

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text numberOfLines={1}>
        {givenName} {familyName}
      </Text>
    </View>
  );
};

_SelectedContact.propTypes = {
  item: PropTypes.object,
};

export const SelectedContact = React.memo(_SelectedContact);
