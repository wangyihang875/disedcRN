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
import CheckBox from 'react-native-checkbox';
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class Activity extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <View style={[styles.container,this.props.style[0]]}>
                <View style={styles.leftView}>
                    <View style={styles.titleView}><Text style={styles.titleText}>活动选择</Text></View>

                </View>
                <View style={styles.rightView}>
                    <View style={styles.titleView}><Text style={styles.titleText}>医生选择</Text></View>
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
        flex:1,
        height:totalHeight-180,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#e1e2e4',
    },
    rightView:{
        flex:1,
        marginLeft:43,
        marginRight:24,
        height:totalHeight-280,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#e1e2e4',
    },
    titleView:{
        backgroundColor:'#7c96e6',
        justifyContent:'center',
        height:45,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    titleText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        marginLeft:28
    },
});
