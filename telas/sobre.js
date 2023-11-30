import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/estilo';

const Sobre = () => {
  const navigation = useNavigation();

  const handleEnterPressed = () => {
    navigation.navigate('Questao1');
  };

  const openInstagramProfile = (profileUrl) => {
    Linking.openURL(profileUrl);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sobre nós:</Text>
        <Image source={require('../img/sobre.png')} style={styles.sobre} />
        <Text style={styles.paragrafo}>Evelyn e Isabelle - 2°info</Text>

        <View style={[styles.iconButtonContainer, { flexDirection: 'row' }]}>
          <Text style={styles.iconButtonText}>Evelyn</Text>
          <TouchableOpacity
            onPress={() =>
              openInstagramProfile('https://www.instagram.com/eve_b015/')
            }>
            <Icon name="instagram" size={30} color="#000" />
          </TouchableOpacity>

          <Text style={styles.iconButtonText}>Isabelle</Text>
          <TouchableOpacity
            onPress={() =>
              openInstagramProfile('https://www.instagram.com/isaaa.xdz/')
            }>
            <Icon name="instagram" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleEnterPressed}>
          <Text style={styles.corBotao}> Iniciar Quiz! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sobre;