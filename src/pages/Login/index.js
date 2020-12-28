import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false)
  const login = () => {
    setLoading(true);

    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setLoading(true);
        setForm('reset');

        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            console.log('data user :', resDB.val());
            if(resDB.val()){
                storeData('user', resDB.val());
                navigation.replace('MainApp');
            }
          });

        // const data = {
        //   fullName: form.fullName,
        //   proffesion: form.proffesion,
        //   email: form.email,
        //   uid: res.user.uid,
        // };

        // storeData('user', data);
        // navigation.navigate('MainApp', data);
        // console.log('success:', res);
      })
      .catch((err) => {
        console.log('error: ', err);
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  }
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILlogo />
          <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={14} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
