import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChatItem} from '../../components';
import {colors, fonts} from '../../utils';

const Chat = () => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe/>
        <ChatItem />
        <ChatItem isMe/>
      </View>

      <InputChatItem />
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20
  },
  content: {
    flex:1,
  }
})
