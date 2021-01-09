import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    width: metrics.screen_width - 50,
    overflow: 'hidden',
  },
});
export default styles;
