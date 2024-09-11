import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,TouchableOpacity, Text, View, ScrollView } from 'react-native'; // Importar para se usar as tags
import ferrari from './assets/picture/ferrari.png';
import subaru from './assets/picture/subaru.png';

export default function App() {
  
  const [ferrariOn, setFerrariOn] = useState(false)

  function handleFerrari(){ {}
    setFerrariOn ((oldValue : boolean)=>{
      return !oldValue;
    });
  }
  
  return (
    <View style={ferrariOn ? stylesFerrari.ferrari : stylesSubaru.subaru}>
      <TouchableOpacity onPress = {handleFerrari}>
      <Image source={ferrariOn ? ferrari : subaru}/>
      </TouchableOpacity>
      <Text style={ferrariOn ? stylesFerrari.titleFerrari : stylesSubaru.titleSubaru}>{ferrariOn ? 'FERRARI ENZO 2004' : 'SUBARU IMPREZA WRX STI 2004'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesFerrari = StyleSheet.create({
  ferrari:{
    flex: 1,
    backgroundColor: '#c1121f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleFerrari: {
    color: '#c1121f',
    fontSize: 24,
    backgroundColor: '#780000',
    padding: '1rem',
    margin: '.5rem'
  }
});
const stylesSubaru = StyleSheet.create({
  subaru:{
    flex: 1,
    backgroundColor: '#003566',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleSubaru: {
    color: '#003566',
    fontSize: 24,
    backgroundColor: '#001d3d',
    padding: '1rem',
    margin: '.5rem'
  }
});
