import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slides from '../components/Slides'
import AuthScreen from "./AuthScreen";

const SLIDE_DATA=[
    {text:'Welcome to Job App', color:'#FFB300'},
    {text:'Use This to Find a Job', color:'#00E676'},
    {text:'Set your location, Then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component{
    onSlidesComplete=()=>{
        this.props.navigation.navigate('auth')
    };

    render(){
        return(
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
        )
    }
}
export default WelcomeScreen;