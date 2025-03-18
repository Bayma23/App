import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3RSfeoAnp5PZEXG2x2lST9dSi0vCr-bGSQ&s" }}
            style={styles.image}
          />
          <Text style={styles.descricao}>Gestão do Dinheiro</Text>
        </View>

        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg29XTDu7Irr4E0M7o0noIr2NSSeympkxFZeJX9dXpULohRZPcKWPATuL6J0iMFwNJFg&usqp=CAU" }}
            style={styles.image}
          />
          <Text style={styles.descricao}>Controle suas finanças! 📊💰</Text>
        </View>

        <View style={styles.item}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShs5U28Hs9Z45wdRz5B-JXmuh0oS9zk1h58hfzf2JGzSL-oWMKNP-v6FfLXbtyWhUTykA&usqp=CAU" }}
            style={styles.image}
          />
          <Text style={styles.descricao}>Controle seus gastos de forma simples.</Text>
        </View>

        <View style={styles.itemRow}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/7132/7132294.png" }}
            style={styles.imageesquerda}
          />
          <Text style={styles.descricaodireita}>Acompanhe suas despesas diárias.</Text>
        </View>

        <View style={styles.itemRow}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/7172/7172561.png" }}
            style={styles.imageesquerda}
          />
          <Text style={styles.descricaodireita}>Economize e invista com sabedoria.</Text>
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
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: "100%"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  imageesquerda: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  descricao: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    
    fontFamily: "Inter"
  },
  descricaodireita: {
    fontSize: 18,
    fontFamily: "Inter",
    flex: 1
  }
});