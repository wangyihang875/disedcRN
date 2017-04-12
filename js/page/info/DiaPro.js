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
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class DiaPro extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.titleView}><Text style={styles.titleText}>患者基础信息</Text></View>
                    <View style={styles.infoView}>
                        <Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text><Text>123</Text>
                    </View>
                </ScrollView>
            </View>
        );
    };
}

var styles = StyleSheet.create({
    container:{

    },
    titleView:{
        height:44,
        justifyContent:'center',
        backgroundColor:'#7c96e6',
        borderWidth:1,
        borderColor:'#e1e2e4',
    },
    titleText:{
        fontSize:17,
        color:'#fff',
        marginLeft:29,
    },
    infoView:{
        //flex:1
    },
    infoLineView:{
        flexDirection:'row',
        paddingBottom:19,
    },
    infoItemView:{

    },
    itemText:{
        fontSize:15,
        color:'#576eb9',
    }

});
