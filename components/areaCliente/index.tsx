import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AreaScreenRouteProp } from '../../src/types'

export default function Area() {
  const route = useRoute<AreaScreenRouteProp>(); // Usando o tipo definido
  const { nom_paciente, num_cpf, des_email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.name}>{nom_paciente}</Text>
          <Text>CPF: {num_cpf}</Text>
          <Text>Email: {des_email}</Text>
        </View>
        {/* Adicione sua imagem aqui */}
      </View>
      {/* Adicione sua tabela aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
