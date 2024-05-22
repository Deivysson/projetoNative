import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../types' // Atualize o caminho conforme necessário

export default function SignIn() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Utilizando o hook useNavigation com o tipo definido
  const navigation = useNavigation<LoginScreenNavigationProp>();

  async function handleArea() {
    try {
      const response = await axios.post('http://localhost:3000/authenticate', { login: name, senha: password });
      console.log(response.data && response.data.message === 'Autenticação bem-sucedida')
      if (response.data.user) {
        // Agora a chamada para navigate está tipada corretamente
        navigation.navigate('Area', {
          nom_paciente: response.data.exames.nom_paciente,
          num_cpf: response.data.exames.num_cpf,
          des_endereco: response.data.exames.des_endereco,
          des_email: response.data.exames.des_email,
        });
      } else {
        alert('Login ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      alert('Erro na autenticação.');
    }
  }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Login Paciente</Text>
            <TextInput 
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder='Usuario'
            />
            <TextInput 
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder='********'
            secureTextEntry
            />
            <Button title='Entrar' onPress={handleArea} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
});