import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, getData, storeData, useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [proffesion, setProffesion] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    proffesion: '',
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const onContinue = () => {
    console.log(form);

    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');

        const data = {
          fullName: form.fullName,
          proffesion: form.proffesion,
          email: form.email,
          uid: success.user.uid
        }
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register success :', success);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        });
      });
  };  

 
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.proffesion}
              onChangeText={(value) => setForm('proffesion', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 0},
  page: {backgroundColor: colors.white, flex: 1},
});
