import React from "react";
import { TextInput, TextInputEvent, View } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";



function Input (){
    return(
        <View>
            <TextInput
            onChangeText={onchange}
            value={}
            placeholder =''
            >

            </TextInput>
        </View>
    )
};

export default Input