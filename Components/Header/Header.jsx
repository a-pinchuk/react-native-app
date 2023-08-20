import { Text, View } from 'react-native';
import { styles } from './HeaderStyleSheet';

export const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header__title}>{text}</Text>
    </View>
  );
};
