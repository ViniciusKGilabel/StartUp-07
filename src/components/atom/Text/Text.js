import React from "react"
import { View, Text as Tx } from 'react-native';
import { 
    FONT_SUB_TITLE,
    FONT_TEXT,
    FONT_TITLE,
    FONT_TEXT_IMPUT_TITLE,
    FONT_TEXT_NAMES,
    FONT_TITLE_IMPUT,
 } from '../../../styles/typography'
import { textStyleEnum } from "../Enum/fontStyle.enum";

export function switchTextStyle (textStyle) {
    
    switch(textStyle){

    case 'FONT_SUB_TITLE':
        return (
            {
                color: 'white',
                fontFamily: FONT_FAMILY,
            }
        )
        
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

function Text ({textStyle, children, style}){
    return (
        <View>
            <Tx style={switchTextStyle({textStyle})}>{children}</Tx>
        </View>
    );
}

export default Text;