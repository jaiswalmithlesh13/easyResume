import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import TextField from '../components/textField';

var PaginationFirstItem = require('../components/PaginationFirstItem');
var PaginationLastItem = require('../components/PaginationLastItem');
var PaginationAllItems = require('../components/PaginationAllItems');


class AcademicView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 'B Tech',
      university: 'Rajasthan technical University',
      percentage: '79.5',
      yearOfPassing: '2007',
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
    navigate('ProfessionalView')

}

  render() {
    var _scrollView = ScrollView;

AsyncStorage.getItem("PersonalDetails").then((value) => {
     console.log('Personal Details: ' +JSON.stringify(value));

}).done();
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
              property={this.state.degree}
              placeholder='Degree/Course'
              onChangeText={(degree) => this.setState({ degree })}
            />
            <TextField
              property={this.state.university}
              placeholder='University/College/School'
              onChangeText={(emailId) => this.setState({ emailId })}
            />
             <TextField
              property={this.state.percentage}
              placeholder='Percentage        /Grades          /CGPA'
              onChangeText={(percentage) => this.setState({ percentage })}
            />
            <TextField
              property={this.state.percentage}
              placeholder='Percentage/Grades/CGPA'
              onChangeText={(percentage) => this.setState({ percentage })}
            />
             <TextField
              property={this.state.percentage}
              placeholder='Completed            /Persuing'
              onChangeText={(percentage) => this.setState({ percentage })}
            />
            <TextField
              property={this.state.yearOfPassing}
              placeholder='Year Of Passing'
              onChangeText={(yearOfPassing) => this.setState({ yearOfPassing })}
            />
          </View>

          <View style={{ flex: .1, flexDirection: 'row', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20, alignItems:'center', justifyContent:'center' }}>


              <TouchableHighlight style={styles.button} onPress={this._onSavePressed.bind(this)} >
                <Text style={styles.buttonText}> Save </Text>
              </TouchableHighlight>

          </View>
          <View style={{ flex: .4, flexDirection: 'column', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
            <TextField
              property={this.state.degree}
              placeholder='Degree/Course'
              onChangeText={(degree) => this.setState({ degree })}
              editable={false}
            />
            <TextField
              property={this.state.university}
              placeholder='University/College/School'
              onChangeText={(emailId) => this.setState({ emailId })}
              editable={false}
            />
            <TextField
              property={this.state.percentage}
              placeholder='Percentage/Grades/CGPA'
              onChangeText={(percentage) => this.setState({ percentage })}
              editable={false}
            />
            <TextField
              property={this.state.yearOfPassing}
              placeholder='Year Of Passing'
              onChangeText={(yearOfPassing) => this.setState({ yearOfPassing })}
              editable={false}
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
module.exports = AcademicView;
console.ignoredYellowBox = ['Warning: BackAndroid', 'Remote debugger'];
