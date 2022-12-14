
import { SafeArea } from "../utils/safearea";
import { View,Text,StyleSheet,ScrollView, TouchableOpacity } from "react-native";
import { Theme } from '../utils/Theme';
import { Button, TextInput } from "react-native-paper";

export function Signup (){}
    return (
        <SafeArea>
            <ScrollView>
                <Text style={styles.brand}>Thrift</Text>
                <Text style={styles.intro}>Please sign in to continue</Text>

                <View style={styles.alreadyHaveAccount}>
                    <Text style={styles.infoTitle}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate ('sign in')}>
                        <FontAwesomeIcon icon={faCircleArrowRight}
                        color={Theme.colors.purple700}
                        size={Theme.sizes[5]}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <TextInput                                 
                    placeholder="Name"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}/>
                    
                    <TextInput 
                    placeholder="email address"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address'/>
                 
                    <TextInput 
                    placeholder="Input password"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    secureTextEntry={true}/>

                    <Button
                    mode="contained"
                    color={Theme.colors.purple700}
                    contentStyle={{paddingVertical:Theme.sizes[3]}}>Create Acccount</Button>
                </View>
            </ScrollView>
        </SafeArea>
    )

const styles = StyleSheet.create({
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'Righteous_400Regular',
        color:Theme.colors.purple700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderColor:Theme.colors.purple300,
        borderRadius:6,
        paddingVertical:Theme.sizes[2],
        marginTop:Theme.sizes[2],
        marginBottom:Theme.sizes[3]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5
    },
    form:{
        marginTop:Theme.sizes[2]
    }
})