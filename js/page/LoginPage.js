import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
import {toastShort} from '../utils/ToastUtil';
import Md5Util from '../utils/Md5Util';
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputedNum:"admin",
            inputedPwd:"123456",
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

    loginHandler(){
        if(this.state.inputedNum.trim()===""||this.state.inputedPwd.trim()===""){
            toastShort('用户名和密码不能为空');
            return;
        }

        var md5Pwd = Md5Util.hex_md5(this.state.inputedPwd);
        fetch('http://disedc.cxjky.com/interface/getDocInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token':'FnureEYnavbeGhlUVnyfww==',
            },
            body: "username=" + this.state.inputedNum + "&password=" + md5Pwd
        }).then(
            (response) => response.json()
        ).then((responseJson) => {
            if(responseJson.data.msg==="0000"){
                toastShort('登录成功');
                const {navigator} = this.props;
                // navigator.replace({
                //     name:'bottomNavigator',
                //     component:BottomNavigator,
                //     params:{
                //         departmentno:responseJson.data.departmentno,
                //         realname:responseJson.data.realname,
                //         mobilephone:responseJson.data.mobilephone,
                //         hospitalName:responseJson.data.hospitalName,
                //         departmentName:responseJson.data.departmentName,
                //     }
                // });
            }else if(responseJson.data.msg==="0003"){
                toastShort('接口没有权限');
            }else if(responseJson.data.msg==="0002"){
                toastShort('用户不存在或密码错误');
            }else{
                toastShort('登录失败 msg='+responseJson.data.msg);
            }
        }).catch((error) => {
            alert(error);
        });
    }

    render(){
        return (
            <Image source={require('../../res/images/backgd.png')} style={styles.backgroundImage}>
                <View style={styles.firstLineView}></View>
                <View style={styles.secondLineView}>
                    <View style={styles.loginView}></View>
                </View>
                <View style={styles.thirdLineView}></View>
            </Image>
        );
    };
}

var styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
        width:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },
    firstLineView:{
        flex:5.19,
        backgroundColor:"#555962"
    },
    secondLineView:{
        flex:6.24,
        backgroundColor:"#a6acb6",

    },
    thirdLineView:{
        flex:3.93,
        backgroundColor:"#c7cdd7"
    },
    loginView:{
        backgroundColor:"#fff",



    },
    textView:{

    }
});
