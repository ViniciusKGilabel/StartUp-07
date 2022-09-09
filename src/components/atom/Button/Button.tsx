import React, { Children } from "react";
import { View, Text as Tx, TouchableOpacity, GestureResponderEvent, useColorScheme } from 'react-native'
import { FONT_BUTTOM_1, FONT_BUTTOM_2 } from '../../../styles/typography'
import ButtonStyle from './Button.style'

/* interface ButtonTextProps {
    buttonColor: ButtonColorEnun
};

export enum ButtonColorEnun{
    Button_Gray = "Button_Gray",
    Button_Blue = "Button_Blue"
};

interface switchButtonText{
    

};

function switchColorStyle (buttonColor: string): switchButtonText {
    let colorButton = ""

    switch(buttonColor){
        case ButtonColorEnun.Button_Gray:
            colorButton = "gray";
            break;
        case ButtonColorEnun.Button_Blue:
            colorButton = "blue";
            break;         
    } 
    return colorButton;     
}; */
interface TextProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    children?: String
    buttonColor: ButtonColorEnun
}

export enum ButtonColorEnun {
    Button_Grey = "Button_Grey",
    Button_Blue = "Button_Blue"
};

function switchButtonStyle(value: ButtonColorEnun) {

    switch (value) {
        case ButtonColorEnun.Button_Grey:
            return ButtonStyle.grey
        default:
            return ButtonStyle.default

    }

}


function TextButton({ onPress, children, buttonColor }: TextProps) {
    return (
        <View style={switchButtonStyle(buttonColor)}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Tx style = {{color: "black"}}>
                {children}
                </Tx>
            </TouchableOpacity> 
        </View>
    )
};

export default TextButton;