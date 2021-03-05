//Library - Of course!
import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,
        Image, TouchableOpacity, 
        TouchableWithoutFeedback,
        Keyboard,
        Alert} from 'react-native';
import Users from '../../services/User';

//This's what u see (_ _")
function Login({ navigation })
{
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if(username.trim() === '') {
			return Alert.alert('Bạn chưa nhập tên tài khoản');
		}

		if(password.trim() === '') {
			return Alert.alert('Bạn chưa nhập mật khẩu');
		}

		if(username !== Users.username || password !== Users.password) {
			return Alert.alert('Tài khoản hoặc mật khẩu không đúng');
		}

		navigation.navigate('ListWorks');
	}
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Haladie.all}>
            <Image 
                source={require('../../images/Logo.png')}   
                style={Haladie.image} 
            >                
            </Image>
            <TextInput 
                       style={[Haladie.input, Haladie.username]}
                       onChangeText={(text) => setUsername(text)}
                       placeholder='Tên tài khoản' 
            >
            </TextInput>
            <TextInput 
                       style={[Haladie.input, Haladie.password]}
                       placeholder='Mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setPassword(text)}
            >
            </TextInput>
            <Text style={Haladie.txtfg}>Quên mật khẩu? Nhấn vào đây</Text>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={handleLogin}
            >
                <Text style={Haladie.txtLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtregis}
                  onPress={() => navigation.navigate('Register')}
            >Chưa có tài khoản? Đăng kí ngay</Text>
            <Text style={Haladie.txtbot}>Chính sách Bảo mật | Điều Khoản và Điều kiện</Text>
        </View>
        </TouchableWithoutFeedback>
    );
}

//Style - Like CSS bro :)
const Haladie = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9dade'
    },
    input:{
        width:350,
        height:50,
        backgroundColor:'#7889ff',
        borderRadius:7,
        fontSize:22,
        paddingHorizontal:15,
        color: 'white'
    },
    username:{
        marginTop:10,
        marginBottom:10
    },
    password:{
        marginBottom:10
    },
    image: {
        width:180,
        height:200,
        resizeMode: 'cover',
        borderRadius:40
    },
    btLogin: {
        width:300,
        height:70,
        backgroundColor:'#1877f2',
        borderRadius:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtLogin: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    txtbot:{
        fontSize:12,
        textDecorationLine:'underline',
        marginTop:50
    },
    txtregis:{
        textDecorationLine:'underline',
        marginTop:10
        },
    txtfg:{
        textDecorationLine:'underline',
        marginBottom:10
    }
});

export default Login;
