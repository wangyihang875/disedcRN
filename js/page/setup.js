
import React,{Component} from 'react'
import {
    Navigator,
}from 'react-native'

import LoginPage from './LoginPage'
import Main from './Main'

function setup(){

    class Root extends Component {

        constructor(props) {
            super(props);
            this.state = {
            };
        }
        _renderScene(route, navigator) {
            let Component = route.component;
            return (
                <Component {...route.params} navigator={navigator}/>
            );
        }
        render() {
            return (
                <Navigator
                    initialRoute={{
                        name: 'Main',
                        component:Main
                    }}
                    renderScene={(e, i)=>this._renderScene(e, i)}
                />
            );
        }
    }

    return <Root/>;
}

module.exports = setup;