import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setTextValue(value);
  }

  const handleAddItem = () => {
    const item = {
      value: textValue,
      id: Math.random().toString(),
    };
    setItemList([
      ...itemList,
      item,
    ]);
    setTextValue('');
  }

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(itemList.find(item => item.id === id));
  }

  const handleRemoveConfirm = () => {
    const newList = itemList.filter(item => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          onChangeText={handleChangeText}
          value={textValue}
        />
        <Button
          title="ADD"
          onPress={handleAddItem}
        />
      </View>
      <View style={styles.items}>
        <FlatList
          data={itemList}
          keyExtractor={item => item.id}
          renderItem={(data) => (
            <View style={styles.item} key={data.item.id}>
              <Text>{data.item.value}</Text>
              <Button title="X" onPress={() => handleRemoveItem(data.item.id)} />
            </View>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <View>
            <Text>¿Está seguro que desea borrar?</Text>
          </View>
          <View>
            <Text>{itemSelected.value}</Text>
          </View>
        </View>
        <View>
          <Button title="CONFIRMAR" onPress={handleRemoveConfirm} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    backgroundColor: '#ECECEC',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
  },
});


// el StyleSheet se puede crear en otro archivo y se puede importar en cualquier componente para utilizar los estilos

      {/* <Text>Hola, Coder!</Text>
      <StatusBar style="auto" /> */}
      {/* En react native a todos los view se les aplica flexbox; en mobile es column y en web es row */}
      {/* Los estilos del componente reciben por prop un objeto js de estilos que contiene las reglas y propiedades css */}
      {/* Estos objetos no permiten asignar multiples valores a propiedades CSS, como lo son el padding 0 0 0 0 que recibe up right down y left en una sola linea*/}
/*export default function App() {
  return (
    <View style={styles.container}>
      <View style={{padding: 1}}> 
        <TextInput placeholder='item de lista' style={{borderBottomColor:'black', borderBottomWidth: 1, color: 'violet'}}/>
        <Button title="ADD" style={{backgroundColor: '#fff'}}/>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.lista}>
          <Text>Item nro 1</Text>
          <Button title="XX"/>
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
});*/

