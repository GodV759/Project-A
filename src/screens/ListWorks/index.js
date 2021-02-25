import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ListWorks( {navigation} ) {
    return (
        <View style={styles.waper}>
            <Text>This is List</Text>
            <Text
                onPress={() => navigation.navigate('Login')}
            >Back</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListWorks;