import {createNativeStackNavigator } from '@react-navigation/native-stack;'
import { About } from './About';
import { Deposit } from './Deposit';
import{ Withdraw } from './Withdraw';
import { Profile } from './profile';
import { Loan } from './Loan';
import { Signup } from './signup';
import { signin } from './signin'

 const Stack = createNativeStackNavigator();
 
 export function StackNavigation(){
    return (
        <Stack.Navigator initialRouteName='Sign up' screeOptions={{headerShown:false}} >
            <Stack.screen name= 'About' component={About}/>
            <Stack.screen name= 'Deposit' component={Deposit}/>
            <Stack.screen name= 'Withdraw' component={Withdraw}/>
            <Stack.screen name= 'Profile' component={Profile}/>
            <Stack.screen name= 'Loan' component={Loan}/>
            <Stack.screen name= 'sign up' component={signup}/>
            <Stack.screen name= 'sign in' component={signin} options={{headerShown:true}} />
        </Stack.Navigator>
    )
 }