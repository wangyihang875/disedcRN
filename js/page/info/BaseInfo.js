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
    ScrollView,
    Picker
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import DatePicker from 'react-native-datepicker'
let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
export default class BaseInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date:"",
            sex:"",
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={[styles.titleView,{marginTop:0}]}><Text style={styles.titleText}>患者基础信息</Text></View>
                    <View style={styles.infoView}>
                        <View style={[styles.infoLineView,{marginTop:20}]}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>姓名</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入姓名" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>身份证号</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入身份证号" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>会员卡号</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入会员卡号" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>手机</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入手机号码" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>社保号</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入社保号" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>家庭电话</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入家庭电话号码" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>出生日期</Text>
                                <View style={styles.inputView}>
                                    <DatePicker
                                        style={{
                                        width: 320,
                                    }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="请选择出生日期"
                                        format="YYYY-MM-DD"
                                        minDate="1900-1-1"
                                        maxDate={new Date()}
                                        confirmBtnText="确定"
                                        cancelBtnText="取消"
                                        showIcon={false}
                                        customStyles={{
                                            dateInput:{position:'absolute',left:2,borderWidth:0,},
                                            placeholderText:{color:'#b8bfcf',fontSize:16},
                                        }}
                                        onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                </View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>性别</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={[{height:40,color:'#567eb9'}]}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="男" value="1" />
                                        <Picker.Item label="女" value="0" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>职业</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="国家机关、党群组织、企业、事业单位负责人" value="0" />
                                        <Picker.Item label="专业技术人员" value="1" />
                                        <Picker.Item label="办事人员和有关人员" value="2" />
                                        <Picker.Item label="商业、服务业人员" value="3" />
                                        <Picker.Item label="农、林、渔、牧、水利业生产人员" value="4" />
                                        <Picker.Item label="生产、运输设备操作人员和有关人员" value="5" />
                                        <Picker.Item label="军人" value="6" />
                                        <Picker.Item label="医药相关人员" value="7" />
                                        <Picker.Item label="不便分类的其他从业人员" value="8" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>民族</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="汉族" value="汉族" />
                                        <Picker.Item label="壮族" value="壮族" />
                                        <Picker.Item label="满族" value="满族" />
                                        <Picker.Item label="回族" value="回族" />
                                        <Picker.Item label="苗族" value="苗族" />
                                        <Picker.Item label="其他" value="其他" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>婚姻状况</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="未婚" value="0" />
                                        <Picker.Item label="已婚" value="1" />
                                        <Picker.Item label="分居" value="2" />
                                        <Picker.Item label="离异" value="3" />
                                        <Picker.Item label="丧偶" value="4" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>学历</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="未受过教育" value="0" />
                                        <Picker.Item label="小学" value="1" />
                                        <Picker.Item label="初中" value="2" />
                                        <Picker.Item label="高中" value="3" />
                                        <Picker.Item label="中专" value="4" />
                                        <Picker.Item label="大专" value="5" />
                                        <Picker.Item label="本科" value="6" />
                                        <Picker.Item label="研究生及以上" value="7" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>医疗费用支付方式</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="城镇职工基本医疗保险" value="0" />
                                        <Picker.Item label="城镇居民基本医疗保险" value="1" />
                                        <Picker.Item label="新型农村合作医疗" value="2" />
                                        <Picker.Item label="贫困救助" value="3" />
                                        <Picker.Item label="商业医疗保险" value="4" />
                                        <Picker.Item label="全公费" value="5" />
                                        <Picker.Item label="全自费" value="6" />
                                        <Picker.Item label="其他" value="7" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>残疾状况</Text>
                                <View style={styles.inputView}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        selectedValue={this.state.sex}
                                        onValueChange={(s) => this.setState({sex: s})}>
                                        <Picker.Item label="无残疾" value="0" />
                                        <Picker.Item label="视力残疾" value="1" />
                                        <Picker.Item label="听力残疾" value="2" />
                                        <Picker.Item label="言语残疾" value="3" />
                                        <Picker.Item label="肢体残疾" value="4" />
                                        <Picker.Item label="智力残疾" value="5" />
                                        <Picker.Item label="精神残疾" value="6" />
                                        <Picker.Item label="其他残疾" value="7" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>现住地址</Text>
                                <View style={styles.oneLineView}>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="省" value="" />
                                            <Picker.Item label="江苏省" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="市" value="" />
                                            <Picker.Item label="常州市" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="区" value="" />
                                            <Picker.Item label="钟楼区" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="街道" value="" />
                                            <Picker.Item label="永红街道" value="1" />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>现住地址门牌号</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入现住地址门牌号" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>户籍所在地</Text>
                                <View style={styles.oneLineView}>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="省" value="" />
                                            <Picker.Item label="江苏省" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="市" value="" />
                                            <Picker.Item label="常州市" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="区" value="" />
                                            <Picker.Item label="钟楼区" value="1" />
                                        </Picker>
                                    </View>
                                    <View style={styles.oneLineItemView}>
                                        <Picker
                                            style={styles.picker}
                                            mode="dropdown"
                                            selectedValue={this.state.sex}
                                            onValueChange={(s) => this.setState({sex: s})}>
                                            <Picker.Item label="街道" value="" />
                                            <Picker.Item label="永红街道" value="1" />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>户籍地址门牌号</Text>
                                <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入户籍地址门牌号" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>常住类型</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='户籍' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='非户籍' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>

                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>RH阴性</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='否' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='是' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>医保方式</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='农保' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='医保' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='自费' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='慢病保' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>

                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>服药依从性</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='规律' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='偶尔' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='不服' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>购药方式</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='医院' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='社区' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='药店' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>

                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>工作状态</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='有' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='退休' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.infoItemView}>
                                <Text style={styles.itemText}>血型</Text>
                                <View style={styles.selectView}>
                                    <CheckBox label='A型' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='B型' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='O型' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='AB型' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                    <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.titleView}><Text style={styles.titleText}>生活方式</Text></View>
                    <View style={styles.infoView}>
                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>锻炼频率</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='每天' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='每周一次以上' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='偶尔' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不锻炼' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>每次锻炼时间</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入每次锻炼时间/分钟" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>坚持锻炼时间</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入坚持锻炼时间/年" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>饮食习惯</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='荤素均匀' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='荤食为主' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='素食为主' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='嗜盐' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='嗜油' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='嗜糖' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>吸烟状况</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='从不吸烟' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='已戒烟' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='吸烟' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>日吸烟量</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入日吸烟量/支" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>开始吸烟年龄</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入开始吸烟年龄/岁" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>戒烟年龄</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入戒烟年龄/岁" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>饮酒频率</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='从不' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='偶尔' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='经常' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='每天' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>日饮酒量</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入日饮酒量/两" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>是否戒酒</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='未戒酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='已戒酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>戒酒年龄</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入戒酒年龄/岁" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>开始饮酒年龄</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入开始饮酒年龄/岁" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>近一年内是否曾醉酒</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='是' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='否' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>饮酒种类</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='白酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='啤酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='红酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='黄酒' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>其他饮酒种类</Text></View>
                            <View style={styles.inputView}><TextInput style={styles.input} placeholder="输入其他饮酒种类" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>
                    </View>

                    <View style={styles.introTitleView}>
                        <Text style={styles.titleText}>用药史</Text>
                        <View style={styles.introBtnView}>
                            <TouchableOpacity style={styles.introBtnTouch}><Image source={require('../../../res/images/plus_white.png')} style={[{width:25,height:25}]}/><Text style={styles.introBtnText}>添加原用药</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.introBtnTouch}><Image source={require('../../../res/images/plus_white.png')} style={[{width:25,height:25}]}/><Text style={styles.introBtnText}>添加改方药</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.introView}>
                        <Text style={styles.introText}>点击右上方按钮添加原用药或改方药</Text>
                    </View>

                    <View style={styles.introTitleView}>
                        <Text style={styles.titleText}>过敏史</Text>
                        <View style={styles.introBtnView}>
                            <TouchableOpacity style={styles.introBtnTouch}><Image source={require('../../../res/images/plus_white.png')} style={[{width:25,height:25}]}/><Text style={styles.introBtnText}>添加过敏史</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.introView}>
                        <Text style={styles.introText}>点击右上方按钮添加过敏史</Text>
                    </View>

                    <View style={styles.titleView}><Text style={styles.titleText}>既往史</Text></View>
                    <View style={styles.infoView}>
                        <Image source={require('../../../res/images/blue.png')} style={styles.innerTitleImg}>
                            <Text style={styles.innerTitleText}>疾病类</Text>
                        </Image>
                        <View style={styles.infoLineView}>
                            <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={[styles.inputView,{width:680,marginLeft:30}]}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='高血压' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='糖尿病' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='冠心病' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='慢性阻塞性肺疾病' labelLines={2} isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='恶性肿瘤' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='脑卒中' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='严重精神障碍' labelLines={2} isLabelStyle={true} containerStyle={[styles.checkBoxFixedWidthView]} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='结核病' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='肝炎' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='其他法定传染病' labelLines={2} isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='职业病' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='其他' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择确诊日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <Image source={require('../../../res/images/blue.png')} style={styles.innerTitleImg}>
                            <Text style={styles.innerTitleText}>手术类</Text>
                        </Image>

                        <View style={styles.infoLineView}>
                            <CheckBox label='起搏器' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择手术日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='支架' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择手术日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='脑部手术' isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择手术日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.infoLineView}>
                            <CheckBox label='其它心脏手术' labelLines={2} isLabelStyle={true} containerStyle={styles.checkBoxFixedWidthView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            <View style={styles.innerDateView}>
                                <DatePicker style={{width: 220,}} date={this.state.date} mode="date" placeholder="选择手术日期" format="YYYY-MM-DD" minDate="1900-1-1" maxDate={new Date()} confirmBtnText="确定" cancelBtnText="取消" showIcon={false} customStyles={{ dateInput:{position:'absolute',left:2,borderWidth:0,}, placeholderText:{color:'#b8bfcf',fontSize:16}, }} onDateChange={(date) => {this.setState({date: date})}}/>
                            </View>
                            <View style={styles.innerInputView}><TextInput style={styles.input} placeholder="备注" placeholderTextColor="#b8bfcf" underlineColorAndroid="transparent"/></View>
                        </View>

                        <View style={styles.innerTitleView}>
                            <Text style={styles.innerTitleText}>外伤类</Text>
                            <View style={styles.introBtnView}>
                                <TouchableOpacity style={styles.introBtnTouch}><Image source={require('../../../res/images/plus_blue.png')} style={[{width:25,height:25}]}/><Text style={styles.innerBtnText}>添加外伤</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.innerIntroView}>
                            <Text style={styles.introText}>点击右上方按钮添加外伤</Text>
                        </View>

                        <View style={styles.innerTitleView}>
                            <Text style={styles.innerTitleText}>输血类</Text>
                            <View style={styles.introBtnView}>
                                <TouchableOpacity style={styles.introBtnTouch}><Image source={require('../../../res/images/plus_blue.png')} style={[{width:25,height:25}]}/><Text style={styles.innerBtnText}>添加输血</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.innerIntroView}>
                            <Text style={styles.introText}>点击右上方按钮添加输血</Text>
                        </View>
                    </View>

                    <View style={styles.titleView}><Text style={styles.titleText}>家族史</Text></View>
                    <View style={styles.infoView}>
                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>高血压</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>糖尿病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>冠心病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>慢性阻塞性肺疾病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>恶性肿瘤</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>脑卒中</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>严重精神障碍</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>结核病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>肝炎</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>其他法定传染病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>职业病</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>

                        <View style={styles.infoLineView}>
                            <View style={styles.keyView}><Text style={styles.keyText}>其他</Text></View>
                            <View style={styles.valueView}>
                                <CheckBox label='无' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='父亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='母亲' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='子女' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='兄弟姐妹' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                                <CheckBox label='不详' isLabelStyle={true} containerStyle={styles.checkBoxView} containerSelectedStyle={styles.checkBoxSelectedView} labelStyle={styles.checkBoxText} labelSelectedStyle={styles.checkBoxSelectedText}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    };
}

var styles = StyleSheet.create({
    container:{
        //flex:1,
        marginLeft:12
    },
    titleView:{
        height:44,
        marginTop:15,
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
        backgroundColor:'#fff',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#e1e2e4',
        marginBottom:20,
    },
    infoLineView:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:19,
        marginLeft:20,
        marginTop:10,
    },
    infoItemView:{
        flex:1,
    },
    itemText:{
        fontSize:15,
        color:'#576eb9',
        marginBottom:10,
    },
    inputView:{
        width:320,
        height:40,
        borderWidth:1,
        borderColor:'#b8bfcf',
        //marginTop:10,
        borderRadius:8,
    },
    input:{
        fontSize:16,
    },
    selectView:{
        flexDirection:'row',
        //marginTop:10,
    },
    picker:{
        height:40,
        color:'#567eb9',
    },
    oneLineView:{
        width:747,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    oneLineItemView:{
        width:160,
        height:40,
        borderWidth:1,
        borderColor:'#b8bfcf',
        borderRadius:8,
    },
    checkBoxView:{
        borderWidth:1,
        borderColor:'#e1e2e4',
        paddingVertical:3,
        paddingHorizontal:8,
        marginRight:18,
        borderRadius:29
    },
    checkBoxText:{
        fontSize:16,
        color:'#e1e2e4',
    },
    checkBoxSelectedView:{
        borderWidth:1,
        borderColor:'#7c96e6',
        backgroundColor:'#7c96e6',
        paddingVertical:3,
        paddingHorizontal:8,
        marginRight:18,
        borderRadius:29
    },
    checkBoxSelectedText:{
        fontSize:16,
        color:'#fff',
    },
    keyView:{
        width:160,
        justifyContent:'center',
    },
    keyText:{
        fontSize:15,
        color:'#576eb9',
    },
    valueView:{
        flexDirection:'row',
    },
    introView:{
        backgroundColor:'#fff',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#e1e2e4',
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        height:150,
    },
    introText:{
        fontSize:21,
        color:'#7c96e6',
    },
    introTitleView:{
        flexDirection:'row',
        height:44,
        marginTop:15,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#7c96e6',
        borderWidth:1,
        borderColor:'#e1e2e4',
    },
    introBtnView:{
        flexDirection:'row',
        marginRight:29,
    },
    introBtnText:{
        marginLeft:10,
        color:'#fff',
        fontSize:17,
    },
    introBtnTouch:{
        flexDirection:'row',
        marginLeft:32,
    },
    innerTitleImg:{
        height:44,
        width:700,
        justifyContent:'center',
        marginLeft:20,
        marginTop:26,
    },
    innerTitleText:{
        fontSize:21,
        color:'#576eb9',
        marginLeft:29,
        fontWeight:'bold',
    },
    innerDateView:{
        marginLeft:30,
        width:220,
        height:40,
        borderWidth:1,
        borderColor:'#b8bfcf',
        borderRadius:8,
    },
    innerInputView:{
        width:440,
        height:40,
        borderWidth:1,
        borderColor:'#b8bfcf',
        borderRadius:8,
        marginLeft:20,
    },
    checkBoxFixedWidthView:{
        width:100,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#e1e2e4',
        paddingVertical:3,
        paddingHorizontal:8,
        marginRight:18,
        borderRadius:29
    },
    innerTitleView:{
        flexDirection:'row',
        height:44,
        width:825,
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#e1e2e4',
        marginLeft:20,
        marginTop:26,
    },
    innerIntroView:{
        height:110,
        width:825,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e1e2e4',
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
    },
    innerBtnText:{
        marginLeft:10,
        color:'#576eb9',
        fontSize:17,
    },
});
