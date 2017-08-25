import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0)
    this.state = {
      layout: {
        height: 0,
        width: 0
      }
    };
  }

  componentDidMount() {
    this.animate();
  }

  _getMainLayoutStyle() {
    return { marginTop: this.state.layout.height > this.state.layout.width ? 100 : 0 };
  }

  animate() {
    this.animatedValue1.setValue(0)
    Animated.timing(
      this.animatedValue1,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear
      }
    ).start()
  }

  _onLayout(event) {
    this.setState({
      layout: {
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      }
    });
  }

  render() {
    const marginTop = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.layout.height / 2, this.state.layout.height / 2 - 47]
    })
    return (
                 <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'black' }} onLayout={this._onLayout.bind(this)}>
                <View style={{ flex: .5, height: this.state.layout.height / 2 + 100, flexDirection: 'column', justifyContent: 'flex-end' }} >
                    <View style={{ flex: .2, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }} >
                        <Animated.View style={{ flex: 1, marginTop: marginTop }}>
                            <Image style={{ height: 45, width: 200 }} source={require('../easyResume/Assets/Images/resume-icon.png')} >
                            </Image>
                        </Animated.View>
                    </View>
                    <View style={{ flex: 1, top: this.state.layout.height / 2, left: 0, width: this.state.layout.width, height: 100, flexDirection: 'column', alignItems: 'center', position: 'absolute' }} >
                    </View>
                </View>
                <View style={{ flex: .5, top: this.state.layout.height / 2 + 100, height: this.state.layout.height / 2 - 100, flexDirection: 'column', alignItems: 'center' }} >
                </View>
            </View>
    );
  }
}
module.exports = LoginView;