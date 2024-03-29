import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const AppMapView = () => {
    return (
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE} //it decides which map to access
            />
        </View>
    )
}

export default AppMapView

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})