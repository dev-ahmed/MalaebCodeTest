import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDetails: {},
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginEnd: 10,
  },
});
export default styles;
