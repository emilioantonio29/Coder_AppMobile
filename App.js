import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// el StyleSheet se puede crear en otro archivo y se puede importar en cualquier componente para utilizar los estilos

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hola, Coder!</Text>
      <StatusBar style="auto" /> */}
      {/* En react native a todos los view se les aplica flexbox; en mobile es column y en web es row */}
      <View style={{padding: 1}}> 
        {/* Los estilos del componente reciben por prop un objeto js de estilos que contiene las reglas y propiedades css */}
        <TextInput placeholder='item de lista' style={{borderBottomColor:'black', borderBottomWidth: 1, color: 'violet'}}/>
        {/* Estos objetos no permiten asignar multiples valores a propiedades CSS, como lo son el padding 0 0 0 0 que recibe up right down y left en una sola linea*/}
        {/* */}
        <Button title="ADD" style={{backgroundColor: '#fff'}}/>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.lista}>
          <Text>Item nro 1</Text>
          <Button title="X"/>
        </View>
        <View style={styles.lista}>
          <Text>Item nro 2</Text>
          <Button title="X"/>
        </View>
        <View style={styles.lista}>
          <Text>Item nro 3</Text>
          <Button title="X"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {backgroundColor: '#fff',  borderRadius: 7, backgroundColor: 'black'},
  lista: {flexDirection: "row"},
});
