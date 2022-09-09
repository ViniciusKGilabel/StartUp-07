import React from "react"
import { View, Text as Tx, TextStyle, StyleProp } from 'react-native'
import {
    FONT_SUB_TITLE,
    FONT_TEXT,
    FONT_TITLE,
    FONT_TEXT_IMPUT_TITLE,
    FONT_TEXT_NAMES,
    FONT_TITLE_IMPUT,
} from '../../../styles/typography'

export enum textStyleEnum {
    FONT_SUB_TITLE = 'FONT_SUB_TITLE',
    FONT_TEXT = 'FONT_TEXT',
    FONT_TITLE = 'FONT_TITLE',
    FONT_TEXT_IMPUT_TITLE = 'FONT_TEXT_IMPUT_TITLE',
    FONT_TEXT_NAMES = 'FONT_TEXT_NAMES',
    FONT_TITLE_IMPUT = 'FONT_TITLE_IMPUT',
}

interface TextProps{
    textStyle: textStyleEnum;
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
    
}   

function switchTextStyle(textStyle: textStyleEnum) {
    let style: StyleProp<TextStyle>;

    switch (textStyle) {

        // case 'FONT_SUB_TITLE':
        //     return (
        //         {
        //             color: 'white',
        //             fontFamily: FONT_FAMIL   ,
        //         }
        //     ) ESSE E UM MODO DE FAZER. EXISTEM MODO COM ELE INTEIRO EM TS(LEONARDO ENSINOU) E IMPORTANDO O TS EXPORTANDO O TS DE FORA COMO O JUSTINO FEZ.
        case textStyleEnum.FONT_SUB_TITLE:
            style = FONT_SUB_TITLE;
            break;
        case textStyleEnum.FONT_TEXT:
            style = FONT_TEXT;
            break;
        case textStyleEnum.FONT_TITLE:
            style = FONT_TITLE;
            break;
        case textStyleEnum.FONT_TEXT_IMPUT_TITLE:
            style = FONT_TEXT_IMPUT_TITLE;
            break;
        case textStyleEnum.FONT_TEXT_NAMES:
            style = FONT_TEXT_NAMES;
            break;
        case textStyleEnum.FONT_TITLE_IMPUT:
            style = FONT_TITLE_IMPUT;
            break;
    }

    return style;
}

function Text({ textStyle, children, style }: TextProps) {
    return (
        <View>
            <Tx style={[switchTextStyle(textStyle ), style ? style : null]}>{children}</Tx>
        </View>
    );
}

export default Text;