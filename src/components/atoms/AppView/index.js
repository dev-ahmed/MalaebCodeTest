import React from 'react';
import {View, Text, SafeAreaView, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const _AppView = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

_AppView.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

export const AppView = React.memo(_AppView);
