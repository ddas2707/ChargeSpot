import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const FavouriteScreen = () => {
    return (
        <View>
            <LottieView
                source={require('./../assets/Lottie/finger.json')}
                style={{ width: 300, height: 1000 }}
                autoPlay
                loop
            />
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})