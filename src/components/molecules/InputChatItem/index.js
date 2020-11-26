import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

const InputChatItem = () => {
    return (
        <View style={styles.container}>
           <TextInput style={styles.input} placeholder="Tulis Pesan untuk Dokter" />
           <Button type="btn-icon-send" />
        </View>
    )
}

export default InputChatItem;

const styles = StyleSheet.create({
    container: {padding: 16, flexDirection:'row'},
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        flex:1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45
    }
})
