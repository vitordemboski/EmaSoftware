

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Topo from './components/Topo'
import ListaItens from './components/ListaItens'
export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor="#512F86" translucent={false} />
        <Topo />
        <ListaItens />
      </View>
    );
  }
}
