'use strict';

import React, { Component } from 'react';
var PropTypes = React.PropTypes;
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
const CB_ENABLED_IMAGE = require('./cb_enabled.png');
const CB_DISABLED_IMAGE = require('./cb_disabled.png');

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            internalChecked: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        if (this.props.onChange &&  typeof this.props.checked === 'boolean') {
            this.props.onChange(this.props.checked);
        } else {
            let internalChecked = this.state.internalChecked;

            if(this.props.onChange){
                this.props.onChange(internalChecked);
            }
            this.setState({
                internalChecked: !internalChecked
            });
        }
    }

    render() {
        let container = (
            <View style={this.state.containerStyle || styles.container}>
                {this.props.isLabelStyle?<View />:<Image style={this.props.checkboxStyle || styles.checkbox} source={source}/>}
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, this.state.labelStyle]}>{this.props.label}</Text>
                </View>
            </View>
        );

        let source;
        let containerStyle;
        let labelStyle;

        if(typeof this.props.checked === 'boolean') {
            source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage;
            containerStyle = this.props.checked ? this.props.containerSelectedStyle : this.props.containerStyle;
            labelStyle = this.props.checked ? this.props.labelSelectedStyle : this.props.labelStyle;
        } else {
            source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage;
            containerStyle = this.state.internalChecked ? this.props.containerSelectedStyle : this.props.containerStyle;
            labelStyle = this.state.internalChecked ? this.props.labelSelectedStyle : this.props.labelStyle;
        }
        if (this.props.labelBefore) {
            container = (
                <View style={containerStyle || [styles.container, styles.flexContainer]}>
                    <View style={styles.labelContainer}>
                        <Text numberOfLines={this.props.labelLines} style={[styles.label, labelStyle]}>{this.props.label}</Text>
                    </View>
                    {this.props.isLabelStyle?<View />:<Image style={this.props.checkboxStyle || styles.checkbox} source={source}/>}
                </View>
            );
        } else {
            container = (
                <View style={[styles.container, containerStyle]}>
                    {this.props.isLabelStyle?<View />:<Image style={this.props.checkboxStyle || styles.checkbox} source={source}/>}
                    <View style={styles.labelContainer}>
                        <Text numberOfLines={this.props.labelLines} style={[styles.label, labelStyle]}>{this.props.label}</Text>
                    </View>
                </View>
            );
        }

        return (
            <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor} style={styles.flexContainer}>
                {container}
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        width: 26,
        height: 26
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    label: {
        fontSize: 15,
        color: 'grey'
    }
});

CheckBox.propTypes = {
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    isLabelStyle: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    labelSelectedStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    labelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    containerSelectedStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
};

CheckBox.defaultProps = {
    label: 'Label',
    labelLines: 1,
    labelBefore: false,
    isLabelStyle:false,
    checked: null,
    checkedImage: CB_ENABLED_IMAGE,
    uncheckedImage: CB_DISABLED_IMAGE,
    underlayColor: 'white'
};

module.exports = CheckBox;
