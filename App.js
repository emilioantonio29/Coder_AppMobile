import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, FlatList, Button, Modal, Pressable, TextInput } from "react-native";
import ProductList from "./mock/ProductList";
import React, { useState } from 'react';
import Header from "./components/Header";

const productos = ProductList
// const sesion = false

export default function App() {
  // console.log(productos)
  const agregarProducto = () => {
    const item = {
      producto: {
        id: Math.random().toString(),
        nombre: textNombre,
        precio: textPrecio,
        cantidad: "",
        moneda: "$",
        tipo: "",
        descript: "",
        imagen: ""
    }}
    setLista([
      ...lista,
      item,
    ]);
    settextNombre('');
    settextPrecio('');
    setModalVisible(!modalVisible)

  }

  const  handleChangeText = (value) =>{
    settextNombre(value)
    // console.log(textNombre)
  }
  const  handleChangeText2 = (value) =>{
    settextPrecio(value)
    // console.log(textPrecio)
  }
  // const [session, setSession] = useState(sesion);
  const [lista, setLista] = useState(productos);
  const [textNombre, settextNombre] = useState('');
  const [textPrecio, settextPrecio] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const borrarItem = (data) =>{
      // console.log(data)
      const newList = lista.filter(item => item.producto.id !== data.id);
      setLista(newList);
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View >
              <TextInput
                placeholder="nombre"
                style={styles.nada}
                onChangeText={handleChangeText}
                value={textNombre}
              />
              <TextInput
                placeholder="precio"
                style={styles.nada}
                onChangeText={handleChangeText2}
                value={textPrecio}
              />
            </View>
            <View style={styles.item}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => agregarProducto()}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Agregar productos</Text>
        </Pressable>
      </View>
      <FlatList 

        keyExtractor={(item) => item.producto.id} 
        data={lista} 
        renderItem={({ item }) => ( 
          <View style={styles.item}>
            <Text>{item.producto.nombre} ${item.producto.precio}</Text>
            <Button title="X" onPress={() => borrarItem(item.producto)} />
          </View>          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  centeredView: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:30,
    // borderWidth: 1
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  nada:{

  }
});