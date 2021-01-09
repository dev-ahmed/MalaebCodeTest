import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, ViewPropTypes} from 'react-native';
import {SelectedContact} from '../../molecules';
import styles from './styles';

const _SelectedContactsList = ({selectedContacts, style}) => {
  const _renderItem = ({item}) => {
    return <SelectedContact {...{item}} />;
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      horizontal
      renderItem={_renderItem}
      data={selectedContacts}
      style={[styles.container, style]}
    />
  );
};

_SelectedContactsList.propTypes = {
  selectedContacts: PropTypes.array,
  style: ViewPropTypes.style,
};

_SelectedContactsList.defaultProps = {
  selectedContacts: [],
};

export const SelectedContactsList = React.memo(_SelectedContactsList);
