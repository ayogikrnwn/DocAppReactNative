import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, ListDoctor, Profile} from '../../components';
import { colors } from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shayna Melinda" desc="Product Desainer" />
      <Gap height={14} />
      <ListDoctor
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <ListDoctor
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <ListDoctor
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <ListDoctor
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
    page: {flex:1, backgroundColor: colors.white}
});
