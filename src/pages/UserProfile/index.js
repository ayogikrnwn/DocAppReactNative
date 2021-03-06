import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ILNullPhoto } from '../../assets';
import {Gap, Header, ListDoctor, Profile} from '../../components';
import {colors,getData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
const [profile, setProfile] = useState({
    fullName: '',
    proffesion: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo}
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    
      Fire.auth().signOut().then(() => {
        navigation.replace('GetStarted');
      }).catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      })
  }
  return (

    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} desc={profile.proffesion} photo={profile.photo}/>
      )}

      <Gap height={14} />
      <ListDoctor
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <ListDoctor
        name="Language"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <ListDoctor
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <ListDoctor
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
