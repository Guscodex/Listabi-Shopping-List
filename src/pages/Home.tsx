import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button,TouchableOpacity, TouchableHighlight } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home/Minha lista</Text>

      <TouchableHighlight onPress={() => {}}>
          <View style={styles.button01}>
            <Text style={styles.txt}>Vamos lá</Text>
          </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => {}}>
          <View style={styles.button02}>
            <Text>Vamos lá</Text>
          </View>
         </TouchableHighlight>

         <TouchableHighlight onPress={() => {}}>
          <View style={styles.button03}>
          <Text style={styles.txt}>Vamos lá</Text>
          </View>
         </TouchableHighlight>

    </SafeAreaView>

        
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  button01:{
      alignItems: "center",
      backgroundColor: "#66A466",
      justifyContent: "space-between",
      textTransform: 'uppercase',
      paddingRight: 125,
      paddingLeft:125,
      paddingBottom:20,
      paddingTop:20,
      borderRadius:10,
      
      
    },
    button02:{
      alignItems: "center",
      backgroundColor: "#ffff",
      borderWidth: 1,
      borderColor:"#66A466",
      justifyContent: "space-between",
      textTransform: 'uppercase',
      paddingRight: 125,
      paddingLeft:125,
      paddingBottom:20,
      paddingTop:20,
      borderRadius:10,
      
      
    },
    button03:{
      alignItems: "center",
      backgroundColor: "#A8C8A3",
      justifyContent: "space-between",
      textTransform: 'uppercase',
      paddingRight: 125,
      paddingLeft:125,
      paddingBottom:20,
      paddingTop:20,
      borderRadius:10,
      
      
    },
    txt:{
      color:'#ffff'
       
    }

  },
)


