import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Questao4 = ({ navigation, onCorrectAnswer }) => {
  const handleAnswerSelected = (selectedOption) => {
    if (selectedOption === 'Resposta correta') {
      onCorrectAnswer();
    }
    navigation.navigate('Questao5');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          Qual é a rede social que dá mais lucro?
        </Text>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta correta')}>
            <Text style={styles.corBotao}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 2')}>
            <Text style={styles.corBotao}>Youtube</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 3')}>
            <Text style={styles.corBotao}>Tik Tok</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 4')}>
            <Text style={styles.corBotao}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questao4;
