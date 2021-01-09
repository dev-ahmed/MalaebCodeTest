import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const _SearchBar = ({style, onSearch, ...props}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={(value) => onSearch(value)}
        placeholder="Search Contacts"
        {...props}
      />
    </View>
  );
};

_SearchBar.propTypes = {
  onSearch: PropTypes.string,
};

export const SearchBar = React.memo(_SearchBar);
