import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Questao1 = ({ navigation, onCorrectAnswer }) => {
  const handleAnswerSelected = (selectedOption) => {
    if (selectedOption === 'Resposta correta') {
      onCorrectAnswer();
    }
    navigation.navigate('Questao2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          Qual a rede social mais utilizada no Brasil?
        </Text>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 1')}>
            <Text style={styles.corBotao}>Twitter</Text>
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
            onPress={() => handleAnswerSelected('Resposta correta')}>
            <Text style={styles.corBotao}>Whatsapp</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 4')}>
            <Text style={styles.corBotao}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questao1;
