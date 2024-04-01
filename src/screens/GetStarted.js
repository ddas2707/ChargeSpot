import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import LottieView from 'lottie-react-native';
import colors from '../utils/colors';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
const GetStarted = () => {
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView
                    source={require('../assets/Lottie/demo.json')}
                    style={{ width: '100%' }}
                    autoPlay
                    loop
                />
            </View>
            <View style={{ flex: 1.2, backgroundColor: 'lightgreen', borderTopLeftRadius: 50, borderTopRightRadius: 50, padding: 40 }}>
                <View>
                    <Text style={styles.heading}>
                        Your Ultimate EV charging station Finder App
                    </Text>
                    <Text style={{ color: colors.GRAY, textAlign: 'center', marginVertical: 20 }}>
                        Find EV charging station Near You , plan trips and so much more in just one click
                    </Text>
                    <TouchableOpacity style={styles.btn}
                        onPress={onPress}
                    >
                        <Text style={{ color: 'white' }}>Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
        textAlign: 'center'
    },
    btn: {
        padding: 12,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#4285F4',
        marginTop: 40
    }
})