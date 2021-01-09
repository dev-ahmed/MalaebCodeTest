import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contactsList: {
    marginTop: 10,
  },
  selectedContactsList: {},
  contactContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 50,
    alignItems: 'center',
  },
  contact: {
    width: '100%',
  },
});
export default styles;
