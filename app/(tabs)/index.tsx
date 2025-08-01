import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#AA2200",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "#121212",
    textAlign: "center",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});

export default function Index(): JSX.Element {
  const [corrente, setCorrente] = useState<string>("");
  const [distancia, setDistancia] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const calcularBitola = (): void => {
    const correnteNum = parseFloat(corrente.replace(",", "."));
    const distanciaNum = parseFloat(distancia.replace(",", "."));

    if (isNaN(correnteNum) || isNaN(distanciaNum)) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }

    const bitola110 = (2 * correnteNum * distanciaNum) / 294.64;
    const bitola220 = (2 * correnteNum * distanciaNum) / 510.4;

    setResultado(
      `Bitola para 110V: ${bitola110.toFixed(2)} mm²\nBitola para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bitola de Fio</Text>

      <TextInput
        placeholder="Corrente (A)"
        style={styles.input}
        keyboardType="numeric"
        value={corrente}
        onChangeText={setCorrente}
      />
      <TextInput
        placeholder="Distância (m)"
        style={styles.input}
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <Button title="Calcular" onPress={calcularBitola} />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}
