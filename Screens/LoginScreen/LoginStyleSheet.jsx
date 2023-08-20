import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  imgBgr: {
    flex: 1,
    justifyContent: 'center',

    resizeMode: 'cover',
  },
  bgrView: {
    height: 549,
    backgroundColor: '#fff',
    left: 0,
    top: 143,
    borderRadius: 25,
    position: 'relative',
  },
  enterText: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    marginTop: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 40,
    borderRadius: 6,
    paddingLeft: 16,

    color: '#0881eb',
    width: '100%',
    backgroundColor: '#F6F6F6',
    position: 'relative',
  },
  inputPass: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 40,
    borderRadius: 6,
    paddingLeft: 16,
    marginTop: 16,
    color: '#0881eb',
    width: '100%',
    backgroundColor: '#F6F6F6',
    position: 'relative',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    width: '100%',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnTitle: {
    color: '#FFFFFF',
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  btnJoin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btnJoinTitle: {
    color: '#1B4371',
  },

  passShowBtn: {
    position: 'absolute',
    top: 26,
    left: 280,
  },
  showBtn: {
    color: '#1B4371',
  },
});
