import {FACEBOOK_LOGIN_SUCCESS,FACEBOOK_LOGIN_FAIL} from "./types";
import {Facebook} from 'expo'
import {AsyncStorage} from 'react-native';

//AsyncStorage.setItem('fb_token',token)
//AsyncStorage.getItem('fb_token')
export const facebookLogin = () => async dispatch => {
    console.log('called facebook login');
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        //dispatch action saying login is done
        dispatch({type:FACEBOOK_LOGIN_SUCCESS,payload:token})
    } else {
        //start login process
        await doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async (dispatch) =>{
    let {type,token} = await Facebook.logInWithReadPermissionsAsync('356868554804753',{
        permissions:['public_profile']
    });

    if(type === 'cancel'){
        return dispatch({type:FACEBOOK_LOGIN_FAIL});
    }

    await AsyncStorage.setItem('fb_token',token);
    dispatch({type:FACEBOOK_LOGIN_SUCCESS,payload:token});
};