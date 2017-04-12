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
    Dimensions,
    ScrollView
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import BaseInfo from './info/BaseInfo';
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isBaseInfo:true,
            isHighPro:false,
            isHighFollow:false,
            isDiaPro:false,
            isDiaFollow:false,
        };
    }

    _baseInfoHandler(){
        this.setState({isBaseInfo:true,isHighPro:false,isHighFollow:false,isDiaPro:false,isDiaFollow:false});
    }
    _highProHandler(){
        this.setState({isBaseInfo:false,isHighPro:true,isHighFollow:false,isDiaPro:false,isDiaFollow:false});
    }
    _highFollowHandler(){
        this.setState({isBaseInfo:false,isHighPro:false,isHighFollow:true,isDiaPro:false,isDiaFollow:false});
    }
    _diaProHandler(){
        this.setState({isBaseInfo:false,isHighPro:false,isHighFollow:false,isDiaPro:true,isDiaFollow:false});
    }
    _diaFollowHandler(){
        this.setState({isBaseInfo:false,isHighPro:false,isHighFollow:false,isDiaPro:false,isDiaFollow:true});
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={()=>this._baseInfoHandler()} style={this.state.isBaseInfo?[styles.topBtnViewSelected,{marginLeft:29}]:[styles.topBtnView,{marginLeft:29}]}><Text style={this.state.isBaseInfo?styles.topBtnTextSelected:styles.topBtnText}>基础信息</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._highProHandler()} style={this.state.isHighPro?styles.topBtnViewSelected:styles.topBtnView}><Text style={this.state.isHighPro?styles.topBtnTextSelected:styles.topBtnText}>高血压专案信息</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._highFollowHandler()} style={this.state.isHighFollow?styles.topBtnViewSelected:styles.topBtnView}><Text style={this.state.isHighFollow?styles.topBtnTextSelected:styles.topBtnText}>高血压随访信息</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._diaProHandler()} style={this.state.isDiaPro?styles.topBtnViewSelected:styles.topBtnView}><Text style={this.state.isDiaPro?styles.topBtnTextSelected:styles.topBtnText}>糖尿病专案信息</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._diaFollowHandler()} style={this.state.isDiaFollow?styles.topBtnViewSelected:styles.topBtnView}><Text style={this.state.isDiaFollow?styles.topBtnTextSelected:styles.topBtnText}>糖尿病随访信息</Text></TouchableOpacity>
                </View>
                <View>
                    {this.state.isBaseInfo ? <BaseInfo style={[styles.baseInfo]}/> : <View />}
                </View>
            </View>
        );
    };
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    },
    topView:{
        flexDirection:'row',
        height:78,
        alignItems:'center',
        borderBottomColor:'#e1e2e4',
        borderBottomWidth:1,
    },
    topBtnView:{
        paddingVertical:5,
        paddingHorizontal:15,
        marginRight:19,
        borderWidth:1,
        borderColor:'#b8bfcf',
        borderRadius:34,
    },
    topBtnText:{
        fontSize:18,
        color:'#b8bfcf',
    },
    topBtnViewSelected:{
        backgroundColor:'#ff7e6d',
        paddingVertical:5,
        paddingHorizontal:15,
        marginRight:19,
        borderRadius:34,
    },
    topBtnTextSelected:{
        fontSize:18,
        color:'#fff',
    },
    baseInfo:{
        height:totalWidth-136,
        marginTop:19,
        marginLeft:16,
        borderWidth:1,
        borderColor:'#b8bfcf',
    }

});
