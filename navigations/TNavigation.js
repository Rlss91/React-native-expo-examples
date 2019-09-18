import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from 'react-navigation-drawer';
import T1 from '../Components/T/t1'
import T2 from '../Components/T/t2'
import NavRightBtn from '../Components/T/NavRightBtn'


const TNavigator = createStackNavigator({
    T1s: {
        screen:T1,
        navigationOptions: {
            headerTitle: 'T1',
            headerRight: 
            <HeaderButtons HeaderButtonComponent={NavRightBtn}>
                <Item title='title' iconName='md-cloud' onPress={()=>{console.log('you pressed here')}} />
            </HeaderButtons>
        }
    },
    T2s: T2
}, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#456'
        },
        headerTintColor: '#678',
        title: 'T2'
    }
})

const TBottomNavigator = createBottomTabNavigator({
    Mainnav: {
        screen: TNavigator,
        navigationOptions: {
            tabBarLabel: 'some text',
            tabBarIcon: (tabInfo)=>{
                return <Ionicons name='ios-cloudy-night' size={35} color={tabInfo.tintColor} />
            }
        }
    },
    T2s: T2
}, {
    tabBarOptions:{
        activeTintColor: '#f50'
    }
})

const MainNavigator = createDrawerNavigator(
    {
      T1nav: {
        screen: TBottomNavigator,
        navigationOptions: {
          drawerLabel: 'T1nav;D'
        }
      }
    },
    {
      contentOptions: {
        activeTintColor: '#456'
      }
    }
  );
  

export default createAppContainer(MainNavigator)