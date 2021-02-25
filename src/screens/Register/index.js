//Library - Of course!
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';


//This's what u see (_ _")
function Register({ navigation })
{
    return (
        <View style={Haladie.all}>
            <Image 
                source={require('../../images/Logo.png')}   
                style={Haladie.image} 
            >                
            </Image>
            <TextInput style={[Haladie.input, Haladie.username]}
                   
                       placeholder='Tên tài khoản' 
            >
            </TextInput>
            <TextInput style={[Haladie.input, Haladie.password]}
                       placeholder='Mật khẩu'
                       secureTextEntry={true}
            >
            </TextInput>
            <TextInput style={[Haladie.input, Haladie.password]}
                       placeholder='Nhập lại mật khẩu'
                       secureTextEntry={true}
            >
            </TextInput>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={() => navigation.navigate('ListWorks')}
            >
                <Text style={Haladie.txtLogin}>Đăng Kí</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtfg}
                  onPress={() => navigation.navigate('Login')}  
            >Đã có tài khoản? Đăng nhập ngay!</Text>
            <Text style={Haladie.txtbot}>Chính sách Bảo mật | Điều Khoản và Điều kiện</Text>
        </View>
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
        marginBottom:10,
        marginTop:5
    }
});

export default Register;