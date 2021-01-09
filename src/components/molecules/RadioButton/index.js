import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const _RadioButton = ({isSelected, onSelect}) => {
  const [selected, setSelected] = useState(isSelected);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(!selected);
        onSelect && onSelect(selected);
      }}
      style={[styles.container, selected && styles.checked]}
    />
  );
};

_RadioButton.propTypes = {
  isSelected: PropTypes.bool,
};
_RadioButton.defaultProps = {
  isSelected: false,
};

export const RadioButton = React.memo(_RadioButton);
