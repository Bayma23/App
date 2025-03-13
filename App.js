import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Platform } from "react-native";

class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3RSfeoAnp5PZEXG2x2lST9dSi0vCr-bGSQ&s" }}
            style={styles.imagem}
          />
          <Text style={[styles.descrição, styles.fonte]}>Gestão do Dinheiro</Text>
        </View>

        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg29XTDu7Irr4E0M7o0noIr2NSSeympkxFZeJX9dXpULohRZPcKWPATuL6J0iMFwNJFg&usqp=CAU" }}
            style={styles.imagem}
          />
          <Text style={[styles.descrição, styles.fonte]}>Controle suas finanças! 📊💰</Text>
        </View>

        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShs5U28Hs9Z45wdRz5B-JXmuh0oS9zk1h58hfzf2JGzSL-oWMKNP-v6FfLXbtyWhUTykA&usqp=CAU" }}
            style={styles.imagem}
          />
          <Text style={[styles.descrição, styles.fonte]}>Controle seus gastos de forma simples.</Text>
        </View>
        
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center",     
    padding: 20,
    backgroundColor: "#fff"
  },
  item: {
    marginBottom: 20,
    alignItems: "center"
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  descrição: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center"
  },
  fonte: {
    fontFamily: Platform.select({
      android: "Inter_900Black",
      ios: "Inter-Black",
    })
  }
});
