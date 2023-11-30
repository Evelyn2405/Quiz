import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Questao2 = ({ navigation, onCorrectAnswer }) => {
  const handleAnswerSelected = (selectedOption) => {
    if (selectedOption === 'Resposta correta') {
      onCorrectAnswer();
    }
    navigation.navigate('Questao3');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          Qual a rede social que está crescendo?
        </Text>

        <View>
          <TouchableOpacity
            onPress={() => handleAnswerSelected('Resposta 1')}
            style={styles.botao}>
            <Text style={styles.corBotao}> Instagram </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 2')}>
            <Text style={styles.corBotao}> Whatsapp </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta correta')}>
            <Text style={styles.corBotao}> Tik Tok </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 4')}>
            <Text style={styles.corBotao}> Facebook </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questao2;
