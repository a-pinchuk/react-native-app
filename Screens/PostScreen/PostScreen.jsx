import { styles } from './PostScreenStyleSheet';
const { mainScreenWrapper, avatarImg, avatarName, avatarEmail } = screenStyles;
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { Header } from '../../Components/Header/Header';
import GridIcon from '../../assets/svg/GridIcon';
import LogOutIcon from '../../assets/svg/LogOutIcon';

export const PostsScreen = () => {
  //   const { userName, userEmail, avatar } = useSelector(selectUser);

  return (
    <View style={styles.header}>
      <Header text={'Публикации'} />
      <LogOutIcon />
    </View>
    // <SafeAreaView style={{ marginBottom: 200 }}>
    //   <Header title="Posts" />
    //   <View style={mainScreenWrapper}>
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //       <Image style={avatarImg} source={{ uri: avatar ? avatar : null }} />
    //       <View>
    //         <Text style={avatarName}>{userName}</Text>
    //         <Text style={avatarEmail}>{userEmail}</Text>
    //       </View>
    //     </View>
    //   </View>
    //   <FlatList
    //     style={{ paddingHorizontal: 16 }}
    //     data={posts}
    //     keyExtractor={post => post.idPost}
    //     renderItem={post => (
    //       <View style={{ marginBottom: 32 }}>
    //         <PostItem post={post} fromScreen="posts" />
    //       </View>
    //     )}
    //   />
    // </SafeAreaView>
  );
};
