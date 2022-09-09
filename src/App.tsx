
import React from 'react';
import Text from './components/atom/Text'
import { textStyleEnum } from './components/atom/Text/Text';
import TextButton from './components/atom/Button/';
import { ButtonColorEnun } from './components/atom/Button/Button';



function App() {
  return (
    <>
      <Text textStyle={textStyleEnum.FONT_SUB_TITLE}>
        ASDFASDFASDFASFD
      </Text>
      <TextButton 
        onPress = {() => {'algumlugar'}}
        buttonColor = {ButtonColorEnun.Button_Blue}
>
          asdfasdfadfadf
      </TextButton>
    </>
  )
}

export default App;
