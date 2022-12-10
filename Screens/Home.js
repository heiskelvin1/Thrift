import { View,Text,StyleSheet,TouchableOpacity,Image, } from 'react-native';
import { SafeArea } from '../utils/safeArea';
import { Theme } from '../utils/theme';

export function Home () {
    return (
        <SafeArea style={{flex:1,paddingHorizontal:8}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profile} >
                    <Text style={styles.welcomeNote}>Hello Jane</Text>
                    <Image source={require('../assets/profile-pix.jpg')}
                    style={styles.profileImg}/>
                </View>
                <View style={styles.creditscore}>
                <View style={styles.scoreBox}>
                <Text style={styles.score}>75</Text>
                    
                    </View>
                    <Text style={styles.welcomeNote}>Credit score</Text>
                </View>
                <View style={styles.transact}>

                </View>
            </View>
            <View style={styles.events}>

            </View>
            <View style={styles.transactions}>

            </View>
            <View style={styles.loan}>

            </View>
        </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1.8,
    },
    profile:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
   
    welcomeNote:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    profileImg:{
        width:36,
        height:36,
        borderRadius:50,
    },
    creditScore:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:Theme.colors.maroon700,
        borderRadius:8,
        padding:Theme.sizes[2],
        marginTop:Theme.sizes[2]
    },
    scoreBox:{
        backgroundColor:Theme.colors.maroon500,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    scores:{
        fontsize:Theme.fonts.fontSizePoint.h2,
        fontWeight:'bold',
        color:'white'
    },
    scoreTitle:{
        fontSize:Theme.fonts.fontSizePoint.h4,
        color:'white',
    },
    transact:{
        flex:3,
    },
    events:{
        flex:1.8,
        backgroundColor:'purple'
    },
    transactions:{
        flex:1.8,
        backgroundColor:'skyblue'
    },
    loan:{
        flex:0.6,
        backgroundColor:'black'
    }
})