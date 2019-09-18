import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Switch} from 'react-native';

const T2 = (props) => {
    const [tf, setTF] = useState(false)
    return(
        <View style={styles.container}>
            <Text>T2</Text>
            <Button title="Back" onPress={
                ()=>{
                    props.navigation.goBack()
                    //props.navigation.push('T1s')
                }
            } />
            <Switch
                trackColor= {{true: '#000'}}
                thumbColor= { '#f00' }
                value= {tf}
                onValueChange = {(val)=>{
                    console.log(val)
                    setTF(!tf)}
                }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default T2
