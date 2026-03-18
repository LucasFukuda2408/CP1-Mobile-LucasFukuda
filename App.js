import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(()=>{
    console.log("O Aplicativo foi Iniciado!")
  }, [])

  function enviarDados(){
    setDadosEnviados({
      nome,
      curso,
      disciplina,
      descricao,
    });
  }

  return (
    <SafeAreaView style ={styles.container}>
      <Text style = {styles.titulo}>Formulário Cadastrado</Text>
      <View style={styles.form}>
      <TextInput
      style = {styles.input}
      placeholder= "Digite seu nome"
      value= {nome}
      onChangeText={setNome}
      />
      <TextInput
      style = {styles.input}
      placeholder= "Digite seu curso"
      value= {curso}
      onChangeText={setCurso}
      />
      <TextInput
      style = {styles.input}
      placeholder= "Digite sua disciplina"
      value= {disciplina}
      onChangeText={setDisciplina}
      />
      <TextInput
      style = {styles.input}
      placeholder= "Escreva uma descrição (2 a 3 linhas)"
      value= {descricao}
      onChangeText={setDescricao}
      multiline={true}
      numberOfLines={3}
      />
      <Button title="Enviar" onPress={enviarDados} />
    </View>
    
  {dadosEnviados && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTitulo}>Os Dados foi enviado: </Text>
          <Text>Nome: {dadosEnviados.nome}</Text>
          <Text>Curso: {dadosEnviados.curso}</Text>
          <Text>Disciplina: {dadosEnviados.disciplina}</Text>
          <Text>Descrição: {dadosEnviados.descricao}</Text>
        </View>
      )}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  titulo:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20,
  }, 
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  resultadoTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
