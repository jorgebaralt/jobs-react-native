import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Slides from '../components/Slides'
import _ from 'lodash';
import {AppLoading} from 'expo'

const SLIDE_DATA=[
    {text:'Welcome to Job App', color:'#FFB300'},
    {text:'Use This to Find a Job', color:'#00E676'},
    {text:'Set your location, Then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component{
    state={token : null};

    async componentWillMount(){
        //try to get a token from phone storage.
        let token = await AsyncStorage.getItem('fb_token');
        //if there is a token, move to map, otherwise, continue with tutorial.
        if(token){
            this.props.navigation.navigate('map');
            this.setState({token});
        }else{
            this.setState({token:false});
        }

    }

    onSlidesComplete=()=>{
        this.props.navigation.navigate('auth')
    };

    render(){
        //if we haven't decided yet what to do, we show an App loading.
        if(_.isNull(this.state.token)){
            return <AppLoading/>
        }

        return(
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
        )
    }
}
export default WelcomeScreen;