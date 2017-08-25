import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native'



class PaginationAllItems extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <View>
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize:8 }}>    ALLITEMS    </Text> 
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                    <View style={{ flex: .45, backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ height: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                        </View>
                    </View>
                    <View style={{ flex: .1, backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: 'white', flexDirection: 'column' }}>
                        </View>
                    </View>
                    <View style={{ flex: .45, backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ height: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = PaginationAllItems;