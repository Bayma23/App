import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarMotivos: false, 
    };
  }

  toggleMotivos = () => {
    this.setState({ mostrarMotivos: !this.state.mostrarMotivos });
  };

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
        <View style={styles.itemRow}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/10438/10438381.png" }}
            style={styles.imageesquerda}
          />
          <Text style={styles.descricaodireita}>Controle seus custos e aumente sua rentabilidade.</Text>
        </View>
        <View style={styles.itemRow}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/1763/1763438.png" }}
            style={styles.imageesquerda}
          />
          <Text style={styles.descricaodireita}>Tome decisões estratégicas para um crescimento sustentável.</Text>
        </View>
        <View style={styles.itemRow}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/8936/8936741.png" }}
            style={styles.imageesquerda}
          />
          <Text style={styles.descricaodireita}>Planeje seus recursos e maximize seus lucros.</Text>
        </View>

        
        <View style={styles.c}>
          <Button 
            title={this.state.mostrarMotivos ? "Ocultar informações" : "Saiba mais sobre o app"} 
            onPress={this.toggleMotivos} 
          />
        </View>

        
        {this.state.mostrarMotivos && (
          <View style={styles.extraInfoContainer}>
            <View style={styles.item}>
              <Image 
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/2583/2583250.png" }}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Nosso app ajuda você a controlar seus gastos de forma prática e intuitiva. 
                Com apenas alguns cliques, você pode registrar suas despesas e acompanhar 
                seu orçamento em tempo real, garantindo mais segurança financeira.
              </Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/1046/1046405.png" }}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Acompanhe suas receitas e despesas detalhadamente. Nosso sistema categoriza 
                automaticamente os seus gastos, permitindo que você visualize onde seu dinheiro 
                está indo e faça ajustes conforme necessário.
              </Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/2583/2583316.png" }}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Defina metas financeiras personalizadas. Seja para economizar para uma viagem, 
                um carro novo ou uma reserva de emergência, nosso app ajuda você a alcançar seus 
                objetivos com um planejamento financeiro eficiente.
              </Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/7439/7439660.png" }}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Receba relatórios detalhados sobre suas finanças. Gráficos e estatísticas ajudam 
                a entender seus hábitos de consumo e tomar decisões mais inteligentes sobre como 
                gastar seu dinheiro de maneira eficiente.
              </Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/9242/9242802.png" }}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Seu dinheiro, suas regras! Com nosso aplicativo, você tem total controle sobre suas 
                finanças, garantindo uma vida financeira mais organizada, equilibrada e preparada 
                para o futuro.
              </Text>
            </View>
          </View>
        )}
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
  },
  buttoncontainer: {
    marginTop: 20,
    width: "80%"
  },
  extraInfocontainer: {
    marginTop: 20,
    alignItems: "center"
  }
});
