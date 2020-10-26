//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Toni from './assets/Toni.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Toni} style={styles.image} />

      <View style={styles.viewTextName}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.labelinfo}>Tony Stack</Text>
      </View>

      <View style={styles.viewTextName}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.labelinfo}>tonyS@gmail.com</Text>
      </View>

      <View style={styles.viewTextName}>
        <Text style={styles.label}>Gender</Text>
        <Text style={styles.labelinfo}>Male</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  image:{
    height:250,
    width:250,
    alignSelf :'center',
    borderRadius:5,
    marginVertical:40
  },

  viewTextName: {
    flexDirection:'row',
    marginVertical:2
  },

  label:{
    borderColor:'green',
    borderWidth:2,
    flex: 2,
    paddingHorizontal:5    
  },

  labelinfo:{
    flex:8,
    borderColor:'green',
    borderWidth:2,
    paddingHorizontal:5    


  }
});



