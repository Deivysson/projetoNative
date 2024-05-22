
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Interface para os parâmetros da tela Area
export interface AreaParams {
  nom_paciente: string;
  num_cpf: string;
  des_endereco: string;
  des_email: string;
}

// Definindo os tipos de rota
export type RootStackParamList = {
  Login: undefined; // Não tem parâmetros
  Area: AreaParams; // Usa a interface AreaParams para os parâmetros
};

// Tipos para a navegação
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type AreaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Area'
>;

// Tipos para a rota
export type AreaScreenRouteProp = RouteProp<RootStackParamList, 'Area'>;
