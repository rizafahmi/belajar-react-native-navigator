import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import Welcome from './src/Welcome.js'
import About from './src/About.js'

const BelajarNavigator = StackNavigator({
  Welcome: {screen: Welcome},
  About: {screen: About}
})

AppRegistry.registerComponent('BelajarNavigator', () => BelajarNavigator)
