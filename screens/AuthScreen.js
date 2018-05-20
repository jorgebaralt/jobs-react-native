import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {facebookLogin} from '../actions'

class AuthScreen extends Component{
    componentDidMount(){
        this.props.facebookLogin();
        //AsyncStorage.removeItem('fb_token')
        this.onAuthComplete(this.props)
    }
    //when component is about to be render
    //this runs after a successful login
    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps)
    }

    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map');
        }
    }

    render(){
        return(
            <View><Text>AuthScreen</Text></View>
        )
    }
}

function mapStateToProps(state){
    return{ token : state.auth.token}
}

export default connect(mapStateToProps,{facebookLogin})(AuthScreen);