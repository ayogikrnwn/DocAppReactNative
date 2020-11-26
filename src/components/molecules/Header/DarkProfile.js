import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor5} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms'

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor5} style={styles.avatar} />
    </View>
  );
}

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 30,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row'
  },
  content: {flex:1},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
      fontSize: 20,
      fontFamily: fonts.primary[600],
      color: colors.white,
      textAlign: 'center'
  },
  desc: { 
      fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 6,
    textAlign: 'center'}
})