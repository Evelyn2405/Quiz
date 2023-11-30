import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#add8e6',
  },
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragrafo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: '100%',
  },
  sobre: {
    width: 200,
    height: 200,
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#FF0040',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 8,
  },
  corBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  iconButtonText: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default styles;
