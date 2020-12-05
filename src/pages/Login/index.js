import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILlogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors, fonts } from '../../utils';

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILlogo />
            <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
            <Input label="Email Address"/>
            <Gap height={24} />
            <Input label="Password"/>
            <Gap height={14} />
            <Link title="Forgot My Password" size={12}/>
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp') } />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />    
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {padding:40, backgroundColor:colors.white,flex:1},
    title: {
        fontSize:18,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    },
    
})
