import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {toastShort} from '../utils/ToastUtil';
import Md5Util from '../utils/Md5Util';
import CheckBox from 'react-native-checkbox';
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputedNum:"admin",
            inputedPwd:"123456",
            isDoctorLogin:true,
        };
    }

    updateNum(msg){
        this.setState({
            inputedNum:msg,
        });
    }

    updatePwd(msg){
        this.setState({
            inputedPwd:msg,
        });
    }

    _onPressLogin(){
        alert(this.state.inputedNum.trim()+'|'+this.state.inputedPwd.trim())
        // if(this.state.inputedNum.trim()===""||this.state.inputedPwd.trim()===""){
        //     toastShort('用户名和密码不能为空');
        //     return;
        // }
        //
        // var md5Pwd = Md5Util.hex_md5(this.state.inputedPwd);
        // fetch('http://disedc.cxjky.com/interface/getDocInfo', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'token':'FnureEYnavbeGhlUVnyfww==',
        //     },
        //     body: "username=" + this.state.inputedNum + "&password=" + md5Pwd
        // }).then(
        //     (response) => response.json()
        // ).then((responseJson) => {
        //     if(responseJson.data.msg==="0000"){
        //         toastShort('登录成功');
        //         const {navigator} = this.props;
        //         navigator.replace({
        //             name:'bottomNavigator',
        //             component:BottomNavigator,
        //             params:{
        //                 departmentno:responseJson.data.departmentno,
        //                 realname:responseJson.data.realname,
        //                 mobilephone:responseJson.data.mobilephone,
        //                 hospitalName:responseJson.data.hospitalName,
        //                 departmentName:responseJson.data.departmentName,
        //             }
        //         });
        //     }else if(responseJson.data.msg==="0003"){
        //         toastShort('接口没有权限');
        //     }else if(responseJson.data.msg==="0002"){
        //         toastShort('用户不存在或密码错误');
        //     }else{
        //         toastShort('登录失败 msg='+responseJson.data.msg);
        //     }
        // }).catch((error) => {
        //     alert(error);
        // });
    }

    render(){
        return (
            <Image source={require('../../res/images/backgd.png')} style={styles.backgroundImage}>
                <View style={styles.backgroundView}></View>
                <View style={styles.firstLineView}>
                    <Image source={require('../../res/images/logo.png')} style={[{width:255,height:150}]}/>
                </View>
                <View style={styles.secondLineView}>
                    <View style={styles.textView}>
                        <View style={styles.iconView}><Image source={require('../../res/images/pep.png')} style={[{width:21.7,height: 25.2}]}/></View>
                        <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder='用户名' placeholderTextColor='#c6c4c9'value={this.state.inputedNum}/>
                    </View>
                    <View style={[styles.textView,{marginTop:21}]}>
                        <View style={styles.iconView}><Image source={require('../../res/images/lock.png')} style={[{width:21.7,height: 25.2}]}/></View>
                        <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder='密码' placeholderTextColor='#c6c4c9' secureTextEntry={true} value={this.state.inputedPwd}/>
                    </View>
                    <View style={styles.checkboxView}>
                        <CheckBox
                            label='医生登录'
                            checked={this.state.isDoctorLogin}
                            onChange={(checked) => {
                                 this.setState({isDoctorLogin:true});
                            }}
                        />
                        <CheckBox
                            label='学术人员登录'
                            checked={!this.state.isDoctorLogin}
                            onChange={(checked) => {
                                this.setState({isDoctorLogin:false});
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginTouch} onPress={()=>this._onPressLogin()}>
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.thirdLineView}>
                    <Text style={styles.copyrightText}>Copyright 上海常笑健康咨询公司 All Right Reversed.</Text>
                </View>
            </Image>
        );
    };
}

var styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        alignItems:'center',
        //justifyContent:'space-between',
        width:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',

    },
    firstLineView:{
        alignItems:'center',
        //justifyContent:'flex-end',
        marginTop:10,
    },
    secondLineView:{
        backgroundColor:"#fff",
        alignItems:'center',
        paddingHorizontal:30,
        width:376,
        marginTop:44,
        borderRadius:10
    },
    thirdLineView:{
        alignItems:'center',
        marginTop:140,
    },
    textView:{
        flexDirection:'row',
        marginTop:38,
        borderWidth:1,
        borderColor:'#c6c4c9',
        alignItems:'center',
        borderRadius:10,
        width:311,
    },
    checkboxView:{
        flexDirection:'row',
        marginTop:44,
    },
    iconView:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#c6c4c9',
        paddingHorizontal:12,
        paddingVertical:12,
    },
    input:{
        flex:10,
        height:52,
        marginLeft:16,
        fontSize:18,
    },
    copyrightText:{
        fontSize:15,
        color:'#929bb5',
    },
    loginTouch:{
        width:311,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#7c96e6',
        borderRadius:39,
        marginTop:35,
        marginBottom:30,
        paddingVertical:15,
    },
    loginText:{
        color:'#fff',
        fontSize:15,
    },
    backgroundView:{
        position:'absolute',
        top:totalHeight/2-75,
        height:150,
        width:totalWidth,
        opacity:0.55,
        backgroundColor:'#fff',
    }
});
