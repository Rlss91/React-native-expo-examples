import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const NavRightBtn = (props) => {
    return(
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={'#4f2'} />
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0ff',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5
    },
  });
  

export default NavRightBtn
