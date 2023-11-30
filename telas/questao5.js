import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Questao5 = ({ navigation, onCorrectAnswer }) => {
  const handleAnswerSelected = (selectedOption) => {
    if (selectedOption === 'Resposta correta') {
      onCorrectAnswer();
    }
    navigation.navigate('Resultado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          Qual foi o ano que foi criado o Instagram?
        </Text>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta correta')}>
            <Text style={styles.corBotao}>2010</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 2')}>
            <Text style={styles.corBotao}>2011</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 3')}>
            <Text style={styles.corBotao}>2012</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 4')}>
            <Text style={styles.corBotao}>2015</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questao5;
