import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import NavRightBtn from './NavRightBtn'

const T1 = (props) => {
    return(
        <View style={styles.container}>
            <Text>T1</Text>
            <Button title="t2??" onPress={
                ()=>{
                    props.navigation.navigate({routeName: 'T2s'})
                    //props.navigation.push('T1s')
                }
            } />
        </View>
    )
}

T1.navigationOptions = navData => {
    return {
      headerTitle: 'T1 screen',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={NavRightBtn}>
          <Item
            title="T1"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default T1
