import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../css/estilo';

const Splash = () => {
  const navigation = useNavigation();

  const handleEnterPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.containerSplash}>
      <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
      <Image source={require('../img/logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>REDES SOCIAIS</Text>
      <TouchableOpacity style={styles.botao} onPress={handleEnterPressed}>
        <Text style={styles.corBotao}> Entrar </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
