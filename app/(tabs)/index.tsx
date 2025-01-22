import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';


export default function IndexScreen() {
  const [name, setName] = useState("");

  return <View style={styles.container}>
    <Text style={styles.text}>Hello {name}</Text>
    <TextInput
      value={name}
      onChangeText={setName}
      style={styles.textInput}
      placeholder='Please input your name' />
    <Button title='Ok!' />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  textInput: {
    color: "white",
    width: 150,
    height: 40,
    borderColor: "white",
    borderWidth: 2
  },
  text: {
    color: "white",
    fontSize: 50
  }
});