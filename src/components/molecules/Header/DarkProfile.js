import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DummyDoctor5} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms'

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container} onPress={onPress} >
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.avatar} />
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
