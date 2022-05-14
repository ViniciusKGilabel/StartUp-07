import React from "react";
import { View, Text as Tx, TouchableOpacity, GestureHandleEvent }  from 'react-native'
import {FONT_BUTTOM_1, FONT_BUTTOM_2} from '../../../styles/typography'
import ButtonStyle from './Button.style'

function switchButtonStyles(){
    let textButton = '';
    let colorButton = '';

    switch(textButtonStyle){
        case textButtonSty.FONT_BUTTOM_1:
            textButton = FONT_BUTTOM_1;
            colorButton = color.blue;
            break;
        case textButtonSty.FONT_BUTTOM_2:
            textButton = FONT_BUTTOM_2;
            colorButton = color.gray;
            break;
    }
    return {
        textButton,
        colorButton,

    };
};


function button (onPress, children, textButton, colorButton) {
    const { textButton, colorButton} = switchButtonStyles
    return (
        <View>  
            <TouchableOpacity 
            style={[ButtonStyle.default, {backgroundColor: colorButton}] }
            onPress={onPress}>
                <Tx style={{textButton}}>
                    {children}
                </Tx>
            </TouchableOpacity>
        </View>
    )
}

export default button;