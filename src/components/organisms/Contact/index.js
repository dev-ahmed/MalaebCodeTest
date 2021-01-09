import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View, ViewPropTypes} from 'react-native';
import {icons} from '../../../constants/icons';
import styles from './styles';

const _Contact = ({item, style}) => {
  const {givenName, familyName, thumbnailPath, phoneNumbers} = item;

  const icon = thumbnailPath ? {uri: thumbnailPath} : icons.person_placeholder;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.contact}>
        <Image resizeMode="cover" style={styles.thumbnail} source={icon} />
        <View>
          <Text>{`${givenName} ${familyName}`}</Text>
          {phoneNumbers &&
            phoneNumbers.map((phoneNumber, index) => {
              const {label, number} = phoneNumber;
              return (
                <Text
                  key={index.toString()}
                  style={styles.contactDetails}>{`${label} ${number}`}</Text>
              );
            })}
        </View>
      </View>
    </View>
  );
};

_Contact.propTypes = {
  item: PropTypes.array,
  style: ViewPropTypes.style,
};

export const Contact = React.memo(_Contact);
