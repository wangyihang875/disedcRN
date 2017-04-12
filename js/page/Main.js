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
import Activity from './Activity';
import Info from './Info';
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActivity:false,
            isInfo:true,
            isUser:false,
        };
    }

    _activityHandler(){
        this.setState({isActivity:true,isInfo:false,isUser:false});
    }
    _infoHandler(){
        this.setState({isActivity:false,isInfo:true,isUser:false});
    }
    _userHandler(){
        this.setState({isActivity:false,isInfo:false,isUser:true});
    }

    render(){
        let activityIcon = this.state.isActivity ? require('../../res/images/heart.png') : require('../../res/images/heart_02.png');
        let infoIcon = this.state.isInfo ? require('../../res/images/news.png') : require('../../res/images/news_02.png');
        let userIcon = this.state.isUser ? require('../../res/images/man.png') : require('../../res/images/man_02.png');

        return (
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <View style={styles.leftFirstView}><Image source={require('../../res/images/logo_02.png')} style={[{width:136,height:24.25}]}/></View>
                    <View style={styles.leftSecondView}>
                        <View style={styles.touxiangView}></View>
                        <View style={styles.userTextView}><Text style={styles.userText}>系统管理员</Text></View>
                        <View style={styles.keshiTextView}><Text style={styles.keshiText}>心内科</Text></View>
                        <View style={styles.hosTextView}><Text style={styles.hosText}>常州市第二人民医院</Text></View>
                    </View>
                    <View style={styles.leftThirdView}>
                        <TouchableOpacity onPress={()=>this._activityHandler()} style={[styles.leftBtnView,{marginTop:33}]}><Image source={activityIcon} style={styles.leftBtnImg}/><View style={styles.leftBtnTextView}><Text style={this.state.isActivity?styles.leftBtnTextSelected:styles.leftBtnText}>活动选择</Text></View></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._infoHandler()} style={styles.leftBtnView}><Image source={infoIcon} style={styles.leftBtnImg}/><View style={styles.leftBtnTextView}><Text style={this.state.isInfo?styles.leftBtnTextSelected:styles.leftBtnText}>信息录入</Text></View></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._userHandler()} style={styles.leftBtnView}><Image source={userIcon} style={styles.leftBtnImg}/><View style={styles.leftBtnTextView}><Text style={this.state.isUser?styles.leftBtnTextSelected:styles.leftBtnText}>用户管理</Text></View></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.rightTopView}><Text>000</Text></View>
                    <View>
                        {this.state.isActivity ? <Activity style={[{marginTop: 24,marginLeft:24}]}/> : <View />}
                        {this.state.isInfo ? <Info /> : <View />}
                    </View>
                </View>
            </View>
        );
    };
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'center'
    },
    leftView:{
        width:148,
    },
    rightView:{
        flex:1,
        backgroundColor:'#d2d8e2',
    },
    leftFirstView:{
        alignItems:'center',
        justifyContent:'center',
        height:58,
    },
    leftSecondView:{
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:'#e1e2e4',
    },
    leftThirdView:{
        marginTop:17,
        borderTopWidth:1,
        borderTopColor:'#e1e2e4',
    },
    rightTopView:{
        backgroundColor:'#8e949d',
        height:58,
        opacity:0.1,
    },
    touxiangView:{
        width:85,
        height:85,
        borderRadius:42.5,
        marginTop:14,
        borderWidth:1,
        borderColor:'#b9c1d3'
    },
    userTextView:{
        marginTop:18,
        alignItems:'center',
    },
    userText:{
        fontSize:18,
        color:'#7785af',
        fontWeight:'bold',
    },
    keshiTextView:{
        marginTop:13,
        alignItems:'center',
        backgroundColor:'#578fdb',
        borderRadius:23,
        paddingVertical:3,
        paddingHorizontal:10,
    },
    keshiText:{
        fontSize:14,
        color:'#fff',
    },
    hosTextView:{
        marginTop:13,
        alignItems:'center',
        marginHorizontal:5,
    },
    hosText:{
        fontSize:15,
        color:'#bbbfcf',
    },
    leftBtnView:{
        flexDirection:'row',
        marginBottom:44,
        marginHorizontal:17,
    },
    leftBtnImg:{
        height:30,
        width:35,
    },
    leftBtnTextView:{
        alignItems:'center',
        marginLeft:10,
    },
    leftBtnText:{
        fontSize:18,
        color:'#b9c1d3',
    },
    leftBtnTextSelected:{
        fontSize:18,
        color:'#566eb8',
    },
});
