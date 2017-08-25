import React, { Component, PropTypes } from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';


class textField extends Component {
    props: {
        property: string,
        placeholder: string,
        placeholderColor?: string,
        editable?: bool,
        autoFocus?: bool,
        value?: string,
        secureTextEntry?: bool,
        onChangeText?: func,
        onFocus?: func,
        numberOfLines?: number,
        multiline?: bool,

    };

    static propTypes = {
        property: PropTypes.string,
        placeholder: PropTypes.string,
        placeholderColor: PropTypes.string,
        editable: PropTypes.bool,
        autoFocus: PropTypes.bool,
        value: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        onFocus: PropTypes.func,
        onChangeText: PropTypes.func,
        numberOfLines: PropTypes.number,
        multiline: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            autoFocusEnabled: this.props.autoFocus
                ? this.props.autoFocus
                : false
        };
    }

    render() {
        const { property,style, placeholder, placeholderColor, editable, value, secureTextEntry, multiline, numberOfLines, returnKeyType } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    {...this.props}
                    style={[styles.textField, style]}
                    ref='textInput'
                    placeholder={placeholder}
                    placeholderTextColor='rgba(150,150,150,0.8)'
                    underlineColorAndroid='transparent'
                    editable={editable ? editable : true}
                    autoFocus={this.state.autoFocusEnabled}
                    secureTextEntry={secureTextEntry ? secureTextEntry : false}
                    onFocus={this._onFocus.bind(this)}
                    multiline={multiline}
                    numberOfLines={multiline ? numberOfLines : 1}
                    returnKeyType={returnKeyType ? returnKeyType : 'done'}
                >
                    {this.props.children}
                </TextInput>
            </View>
        );
    }

    _onFocus() {
        this.setState({ autoFocusEnabled: true });
        if (this.props.onFocus !== undefined) {
            this.props.onFocus();
        }
    }

}

const styles = StyleSheet.create({
    textField: {
        flex: .1,
        borderColor: 'rgba(242,70,70,0.5)',
        borderWidth: 1,
        backgroundColor: 'rgba(242,100,70,0.5)',
        color: 'white',
        padding:0,
        paddingLeft:10,
        margin:0,
        marginTop:7,
    }
});

export default textField;
