import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { SafeArea } from '../utils/safearea';
import { Theme } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard,faWallet,faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard as faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { deposit } from './Deposit';
import { history } from './history';
import { profile } from './profile';
export function Home () {
    return (
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Text style={styles.welcomeNote}>Hello, Jane</Text>
                        <Image source={require('../assets/profile-pix.jpg')} 
                        style={styles.profileImg}/>
                    </View>
                    <View style={styles.transact}>
                        <View style={styles.transHeaderInfo}>
                            <View style={styles.transHeaderTextBox}>
                                <Text style={styles.transBoxTitle}>Wallet actions</Text>
                                <Text style={styles.transBoxInfo}>
                                    Contribute or make a withdrawal
                                </Text>
                            </View>
                            <FontAwesomeIcon icon={faWallet} color='#fff' size={Theme.sizes[4]}/>
                        </View>
                        <View style={styles.transActionsBox}>
                            <TouchableOpacity style={styles.deposit}>
                                <Text style={styles.depositText}>Deposit</Text>
                                <FontAwesomeIcon icon={faCreditCard} 
                                size={Theme.fonts.fontSizePoint.h3}
                                color={Theme.colors.maroon700}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.withdraw}>
                                <Text style={styles.withdrawText}>Withdraw</Text>
                                <FontAwesomeIcon icon={faCreditCardAlt} 
                                size={Theme.fonts.fontSizePoint.h3}
                                color={Theme.colors.maroon700}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.events}>

                </View>

                <View style={styles.transactions}>
                    <View style={styles.recentTrans}>
                        <FontAwesomeIcon/>
                        <Text style={styles.recentTransTet}>Recent transactions</Text>
                    </View>
                </View>

                <View style={styles.loan}>

                </View>
            </View>
        </SafeArea>
    )
}

const Tab = createBottomTabNavigator();
export function MyHome(){
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'Home-sharp'
                : 'Home-outline';
            } else if (route.name === 'Deposit') {
              iconName = focused ? 'add-circle' : 'file-tray-full-outline';
            } 
             else if (route.name === 'History') {
              iconName = focused ? 'person-circle-sharp' : 'personal-circle-outline';
            } 
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'Tomato',
          inactiveTintColor: 'Theme.colors.maroon700',
        }}
      >
        <Tab.Screen name=" My Home" component={HomeScreen} options={{headerShown:false}} />
        <Tab.Screen name="Deposit" component={DepositScreen} options={{headerShown:false}}/>
        <Tab.Screen name="History" component={HistoryScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}
    


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1.8
    },
    profile:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    welcomeNote:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    profileImg:{
        width:36,
        height:36,
        borderRadius:50
    },
    transact:{
        flex:5,
        borderWidth:1,
        borderColor:Theme.colors.maroon900,
        borderRadius:10,
        marginVertical:Theme.sizes[2]
    },
    transHeaderInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:Theme.colors.maroon900,
        margin:Theme.sizes[2],
        borderRadius:10,
        padding:Theme.sizes[2]
    },
    transHeaderTextBox:{
        marginRight:Theme.sizes[1]
    },
    transBoxTitle:{
        color:'#fff',
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'
    },
    transBoxInfo:{
        color:'#fff',
        fontSize:Theme.fonts.fontSizePoint.body
    },
    transActionsBox:{
        flex:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:Theme.sizes[2],
        paddingVertical:Theme.sizes[2],
        backgroundColor: Theme.colors.maroon900
    },
    deposit:{
        flex:1,
        height:Theme.sizes[5],
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFC4C4',
        marginRight:2,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    depositText:{
        fontSize:Theme.fonts.fontSizePoint.caption,
        color:Theme.colors.maroon700
    },
    withdraw:{
        flex:1,
        height:Theme.sizes[5],
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFC4C4',
        marginRight:2,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
    },
    withdrawText:{
        fontSize:Theme.fonts.fontSizePoint.caption,
        color:Theme.colors.maroon700
    },
    events:{
        flex:1.8,
        backgroundColor:'orange'
    },
    transactions:{
        flex:1.8,
        borderWidth:1,
        borderColor:Theme.colors.maroon200,
        padding:Theme.sizes[2]        
    },
    loan:{
        flex:0.6,
        backgroundColor:'red'
    }
})