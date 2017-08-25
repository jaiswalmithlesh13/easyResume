import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import TextField from '../components/textField';

var PaginationFirstItem = require('../components/PaginationFirstItem');
var PaginationLastItem = require('../components/PaginationLastItem');
var PaginationAllItems = require('../components/PaginationAllItems');


class ProfessionalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organisation: 'ABC',
            designation: 'iOS Developer',
            employmentStatus: 'Curently Employed',
            fromDate: '2007',
            toDate: '2007',
            role: 'iOS Developer',
            layout: {
                height: 0,
                width: 0
            }
        };
    }

    _getMainLayoutStyle() {
        return { marginTop: this.state.layout.height > this.state.layout.width ? 100 : 0 };
    }

    _onLayout(event) {
        this.setState({
            layout: {
                height: event.nativeEvent.layout.height,
                width: event.nativeEvent.layout.width,
            }
        });
    }
    _onSavePressed() {
      const { navigate } = this.props.navigation;
    navigate('ProjectView')

}


    render() {
        var _scrollView = ScrollView;

        return (
            <View style={{ flex: 1, flexDirection: 'column' }} onLayout={this._onLayout.bind(this)}>
                <Image style={styles.backgroundImage} resizeMode={Image.resizeMode.sretch} source={require('../Assets/Images/appBackground.png')} >
                    <View style={{ flex: .1, flexDirection: 'column', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <ScrollView style={{ height: 40 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <PaginationFirstItem />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationAllItems />
                            <PaginationLastItem />
                        </ScrollView>
                    </View>

                    <View style={{ flex: .4, flexDirection: 'column', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <TextField
                            property={this.state.organisation}
                            placeholder='Organisation'
                            onChangeText={(organisation) => this.setState({ organisation })}
                        />
                        <TextField
                            property={this.state.designation}
                            placeholder='Designation'
                            onChangeText={(designation) => this.setState({ designation })}
                        />
                        <TextField
                            property={this.state.employmentStatus}
                            placeholder='Previously Employed        Currenlty Employed'
                            onChangeText={(employmentStatus) => this.setState({ employmentStatus })}
                        />
                        <TextField
                            property={this.state.employmentStatus}
                            placeholder='Percentage/Grades/CGPA'
                            onChangeText={(employmentStatus) => this.setState({ employmentStatus })}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TextField
                                style={{ marginRight: 10 }}
                                property={this.state.fromDate}
                                placeholder='From Date'
                                onChangeText={(fromDate) => this.setState({ fromDate })}
                            />
                            <TextField
                                style={{ marginLeft: 10 }}
                                property={this.state.toDate}
                                placeholder='To Date'
                                onChangeText={(toDate) => this.setState({ toDate })}
                            />
                        </View>
                        <TextField
                            property={this.state.role}
                            placeholder='Role'
                            onChangeText={(role) => this.setState({ role })}
                        />
                    </View>

                    <View style={{ flex: .1, flexDirection: 'row', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>


              <TouchableHighlight style={styles.button} onPress={this._onSavePressed.bind(this)} >
                <Text style={styles.buttonText}> Save </Text>
              </TouchableHighlight>

                    </View>
                    <View style={{ flex: .4, flexDirection: 'column', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <TextField
                            property={this.state.organisation}
                            placeholder='Organisation'
                            onChangeText={(organisation) => this.setState({ organisation })}
                        />
                        <TextField
                            property={this.state.designation}
                            placeholder='Designation'
                            onChangeText={(designation) => this.setState({ designation })}
                        />
                        <TextField
                            property={this.state.employmentStatus}
                            placeholder='Previously Employed        Currenlty Employed'
                            onChangeText={(employmentStatus) => this.setState({ employmentStatus })}
                        />
                        <TextField
                            property={this.state.employmentStatus}
                            placeholder='Percentage/Grades/CGPA'
                            onChangeText={(employmentStatus) => this.setState({ employmentStatus })}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TextField
                                property={this.state.fromDate}
                                placeholder='From Date'
                                onChangeText={(fromDate) => this.setState({ fromDate })}
                            />
                            <TextField
                                property={this.state.toDate}
                                placeholder='To Date'
                                onChangeText={(toDate) => this.setState({ toDate })}
                            />
                        </View>
                        <TextField
                            property={this.state.role}
                            placeholder='Role'
                            onChangeText={(role) => this.setState({ role })}
                        />
                    </View>




                </Image>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    button: {
        height: 30,
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
        borderColor: '#48BBEC',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0
    },
    buttonText: {
        color: 'red',
        fontSize: 18,
    },
    scrollView: {
        backgroundColor: 'transparent',
        height: 300,
        width: 2000
    },
    horizontalScrollView: {
        height: 106,
    },
});
module.exports = ProfessionalView;
console.ignoredYellowBox = ['Warning: BackAndroid', 'Remote debugger'];
