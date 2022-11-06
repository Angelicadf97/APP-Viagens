import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => (
  <View style={styles.separator} />
);

function Clientes({ navigation }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:5101/api/Cliente');
      setClientes(await response.json());
    }
    fetchMyAPI();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.fixToText}>
        <Button color='#034C8C'
          title="Clientes"
          onPress={() => navigation.navigate('Clientes')}
        />
        <Button color='#034C8C'
          title="Aeroportos"
          onPress={() => navigation.navigate('Aeroporto')}
        />
        <Button color='#034C8C'
          title="Hospedagens"
          onPress={() => navigation.navigate('Hospedagem')}
        />
        <Button color='#034C8C'
          title="Companhias"
          onPress={() => navigation.navigate('Companhia')}
        />
      </View>
      <View style={styles.fixToList}>
        <Text style={{ width: '10%' }}>Id</Text>
        <Text style={{ width: '30%' }}>Nome</Text>
        <Text style={{ width: '30%' }}>Cpf</Text>
        <Text style={{ width: '30%' }}>Email</Text>
      </View>
      {clientes.map(cli => (
        <View>
          <View style={styles.fixToList}>
            <Text style={{ width: '10%' }}>{cli.id}</Text>
            <Text style={{ width: '30%' }}>{cli.nome}</Text>
            <Text style={{ width: '30%' }}>{cli.cpf}</Text>
            <Text style={{ width: '30%' }}>{cli.email}</Text>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
};

function Aeroporto({ navigation }) {
  const [aeroportos, setAeroportos] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:5101/api/Aeroporto');
      setAeroportos(await response.json());
    }
    fetchMyAPI();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.fixToText}>
        <Button color='#034C8C'
          title="Clientes"
          onPress={() => navigation.navigate('Clientes')}
        />
        <Button color='#034C8C'
          title="Aeroportos"
          onPress={() => navigation.navigate('Aeroporto')}
        />
        <Button color='#034C8C'
          title="Hospedagens"
          onPress={() => navigation.navigate('Hospedagem')}
        />
        <Button color='#034C8C'
          title="Companhias"
          onPress={() => navigation.navigate('Companhia')}
        />
      </View>
      <View style={styles.fixToList}>
        <Text style={{ width: '20%' }}>Id</Text>
        <Text style={{ width: '40%' }}>Nome</Text>
        <Text style={{ width: '40%' }}>Cpf</Text>
      </View>
      {aeroportos.map(aero => (
        <View>
          <View style={styles.fixToList}>
            <Text style={{ width: '20%' }}>{aero.id}</Text>
            <Text style={{ width: '40%' }}>{aero.nome}</Text>
            <Text style={{ width: '40%' }}>{aero.cnpj}</Text>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
}

function Hospedagem({ navigation }) {
  const [hospedagens, setHospedagens] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:5101/api/Hospedagem');
      setHospedagens(await response.json());
    }
    fetchMyAPI();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.fixToText}>
        <Button color='#034C8C'
          title="Clientes"
          onPress={() => navigation.navigate('Clientes')}
        />
        <Button color='#034C8C'
          title="Aeroportos"
          onPress={() => navigation.navigate('Aeroporto')}
        />
        <Button color='#034C8C'
          title="Hospedagens"
          onPress={() => navigation.navigate('Hospedagem')}
        />
        <Button color='#034C8C'
          title="Companhias"
          onPress={() => navigation.navigate('Companhia')}
        />
      </View>
      <View style={styles.fixToList}>
        <Text style={{ width: '20%' }}>Id</Text>
        <Text style={{ width: '40%' }}>Nome</Text>
        <Text style={{ width: '40%' }}>Cpf</Text>
      </View>
      {hospedagens.map(hos => (
        <View>
          <View style={styles.fixToList}>
            <Text style={{ width: '20%' }}>{hos.id}</Text>
            <Text style={{ width: '40%' }}>{hos.nome}</Text>
            <Text style={{ width: '40%' }}>{hos.cnpj}</Text>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
}

function Companhia({ navigation }) {
  const [companhias, setCompanhias] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:5101/api/Companhia');
      setCompanhias(await response.json());
    }
    fetchMyAPI();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.fixToText}>
        <Button color='#034C8C'
          title="Clientes"
          onPress={() => navigation.navigate('Clientes')}
        />
        <Button color='#034C8C'
          title="Aeroportos"
          onPress={() => navigation.navigate('Aeroporto')}
        />
        <Button color='#034C8C'
          title="Hospedagens"
          onPress={() => navigation.navigate('Hospedagem')}
        />
        <Button color='#034C8C'
          title="Companhias"
          onPress={() => navigation.navigate('Companhia')}
        />
      </View>
      <View style={styles.fixToList}>
        <Text style={{ width: '20%' }}>Id</Text>
        <Text style={{ width: '40%' }}>Nome</Text>
        <Text style={{ width: '40%' }}>Cpf</Text>
      </View>
      {companhias.map(com => (
        <View>
          <View style={styles.fixToList}>
            <Text style={{ width: '20%' }}>{com.id}</Text>
            <Text style={{ width: '40%' }}>{com.nome}</Text>
            <Text style={{ width: '40%' }}>{com.cnpj}</Text>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cliente'>
        <Stack.Screen
          name="Clientes" component={Clientes} options={{
            title: 'Clientes',
            headerStyle: { backgroundColor: '#034C8C', }, headerTintColor: '#fff'
          }} />
        <Stack.Screen
          name="Aeroporto"
          component={Aeroporto}
          options={{
            title: 'Aeroportos',
            headerStyle: { backgroundColor: '#034C8C', }, headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Hospedagem"
          component={Hospedagem}
          options={{
            title: 'Hospedagens',
            headerStyle: { backgroundColor: '#034C8C', }, headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Companhia"
          component={Companhia}
          options={{
            title: 'Companhias',
            headerStyle: { backgroundColor: '#034C8C', }, headerTintColor: '#fff'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  fixToList: {
    flexDirection: 'row',
  },
});