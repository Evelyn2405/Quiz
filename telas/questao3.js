import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Questao3 = ({ navigation, onCorrectAnswer }) => {
  const handleAnswerSelected = (selectedOption) => {
    if (selectedOption === 'Resposta correta') {
      onCorrectAnswer();
    }
    navigation.navigate('Questao4');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>
          Em que ano foi criado as redes sociais?
        </Text>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta correta')}>
            <Text style={styles.corBotao}> 1995 </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 2')}>
            <Text style={styles.corBotao}> 1996 </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 3')}>
            <Text style={styles.corBotao}> 1997 </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleAnswerSelected('Resposta 4')}>
            <Text style={styles.corBotao}> 1998 </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questao3;
