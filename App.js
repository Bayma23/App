import React, { Component } from "react";
import { View,Text,Image,StyleSheet,ScrollView,Button,TextInput,Switch,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarMotivos: false,
      nome: "",
      valor: "",
      descricao: "",
      observacoes: "",
      categoria: "alimentacao",
      tipo: "fixa",
      importancia: 50,
      urgencia: 50,
      essencial: false,
      notificar: false,
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

        <View style={styles.item}>
          <Text style={styles.descricao}>Registre uma despesa</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={this.state.nome}
            onChangeText={(nome) => this.setState({ nome })}
          />

          <TextInput
            style={styles.input}
            placeholder="Valor"
            keyboardType="numeric"
            value={this.state.valor}
            onChangeText={(valor) => this.setState({ valor })}
          />

          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={this.state.descricao}
            onChangeText={(descricao) => this.setState({ descricao })}
          />

          <TextInput
            style={styles.input}
            placeholder="Observações"
            value={this.state.observacoes}
            onChangeText={(observacoes) => this.setState({ observacoes })}
          />

          <Picker
            selectedValue={this.state.categoria}
            onValueChange={(categoria) => this.setState({ categoria })}
            style={styles.picker}
          >
            <Picker.Item label="Alimentação" value="alimentacao" />
            <Picker.Item label="Transporte" value="transporte" />
          </Picker>

          <Picker
            selectedValue={this.state.tipo}
            onValueChange={(tipo) => this.setState({ tipo })}
            style={styles.picker}
          >
            <Picker.Item label="Fixa" value="fixa" />
            <Picker.Item label="Variável" value="variavel" />
          </Picker>

          <Text>Importância: {this.state.importancia}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={this.state.importancia}
            onValueChange={(importancia) => this.setState({ importancia })}
          />

          <Text>Urgência: {this.state.urgencia}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={this.state.urgencia}
            onValueChange={(urgencia) => this.setState({ urgencia })}
          />

          <View style={styles.switchRow}>
            <Text>Essencial</Text>
            <Switch
              value={this.state.essencial}
              onValueChange={(essencial) => this.setState({ essencial })}
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Notificar</Text>
            <Switch
              value={this.state.notificar}
              onValueChange={(notificar) => this.setState({ notificar })}
            />
          </View>

          <View style={styles.buttoncontainer}>
            <Button title="Salvar" onPress={() => alert("Despesa salva!")} />
          </View>

          <View style={styles.buttoncontainer}>
            <Button title="Enviar" onPress={() => alert("Dados enviados!")} />
          </View>
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
    backgroundColor: "#fff",
  },
  item: {
    marginBottom: 20,
    alignItems: "center",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: "100%",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
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
  },
  descricaodireita: {
    fontSize: 18,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    width: "90%",
  },
  picker: {
    height: 50,
    width: "90%",
    marginTop: 10,
  },
  slider: {
    width: "90%",
    height: 40,
    marginTop: 10,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  buttoncontainer: {
    marginTop: 20,
    width: "90%",
  },
  extraInfoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
