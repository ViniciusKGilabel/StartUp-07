import React from "react";
import {View, SafeAreaView } from "react-native"
import Text from '../../atom/Text'
import Button from '../../atom/Button'

function Home () {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    Começe criando uma conta
                </Text>
            </View>
            <View>
                <Text textStyle={textStyleEnum.FONT_SUB_TITLE}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Text>
            </View>
            <View>
                <Button>
                    {'Crie sua conta'}
                </Button>
            </View>
            <View>
                <Button>
                    {'Entrar'}
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Home