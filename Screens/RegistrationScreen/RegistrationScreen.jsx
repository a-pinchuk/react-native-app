import { styles } from './StyleSheet';
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
} from 'react-native';
import { useEffect, useState } from 'react';
import * as SVGs from '../../assets/svg/index';

export const RegistrationScreen = () => {
  const initialState = {
    login: '',
    email: '',
    password: '',
  };

  const [isKeyboardShown, setisKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setisKeyboardShown(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setisKeyboardShown(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground source={require('../../images/PhotoBG.png')} style={styles.imgBgr}>
          <View style={{ ...styles.bgrView, marginBottom: isKeyboardShown ? -100 : 0 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View style={styles.avatar}>
                <SVGs.AddAvatarIcon style={styles.avatarIcon} />
              </View>
              <Text style={styles.registrationText}>Регистрация</Text>
              <View style={styles.form}>
                <View>
                  <TextInput
                    value={state.login}
                    onFocus={() => setisKeyboardShown(true)}
                    style={styles.input}
                    placeholder="Логин"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
                  />
                </View>
                <View>
                  <TextInput
                    value={state.email}
                    onFocus={() => setisKeyboardShown(true)}
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  />
                </View>
                <View>
                  <TextInput
                    value={state.password}
                    onFocus={() => setisKeyboardShown(true)}
                    style={styles.input}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, password: value }))
                    }
                  />
                  <TouchableOpacity activeOpacity={0.8} style={styles.passShowBtn}>
                    <Text style={styles.showBtn}>Показать</Text>
                  </TouchableOpacity>
                </View>
                {!isKeyboardShown && (
                  <>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={handleSubmit}>
                      <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnJoin}>
                      <Text style={styles.btnJoinTitle}>Уже есть аккаунт? Войти</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
