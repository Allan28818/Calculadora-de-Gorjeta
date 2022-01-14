import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #1a1a33e0;
  align-items: center;
  padding-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  color: #fafafa;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  color: #fafafa;
  background-color: #95a5a6;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #95a5a6;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fafafa;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
  color: #fafafa;
`;

const PercentageArea = styled.View`
  flex-direction: row;
  margin: 20px;
  justify-content: center;
  width: 100%;
`;

const PercentageItem = styled.Button``;

const App = () => {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(10);

  useEffect(() => {
    if (!!tip && !!parseFloat(bill)) {
      handleCalculate();
    }
  }, [percentage]);

  const handleCalculate = () => {
    let numericBill = parseFloat(bill);
    setTip(0);

    if (!!numericBill) {
      setTip(numericBill * (percentage / 100));
    } else {
      alert("Digite o valor da conta!");
    }
  };

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#fafafa"
        keyboardType="numeric"
        value={bill}
        onChangeText={(number) => setBill(number)}
      />
      <PercentageArea>
        <PercentageItem title="5%" onPress={() => setPercentage(5)} />
        <PercentageItem title="10%" onPress={() => setPercentage(10)} />
        <PercentageItem title="15%" onPress={() => setPercentage(15)} />
        <PercentageItem title="20%" onPress={() => setPercentage(20)} />
      </PercentageArea>
      <CalcButton title={`Calcular ${percentage}%`} onPress={handleCalculate} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} ({percentage}%)
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};

export default App;
