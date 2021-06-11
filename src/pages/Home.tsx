import { processFontFamily } from 'expo-font';
import React from 'react';
import LogoGoogle from "../assets/google.png";


import { StyleSheet, SafeAreaView, Text, View, Button,TouchableOpacity, TouchableHighlight, Image } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home/Minha lista</Text>
      <View style={styles.card}>
        <Text style={styles.textcard}>É uma pena.. Infelizmente esse produto não possui certificações sustentáveis</Text>
        
      </View>


      <View style={styles.cardcenter}>
        <Text style={styles.textcardcenter}>Que tal começar a adicionar produtos para comprar? </Text>
        
      </View>
      
      {/* <TouchableHighlight onPress={() => {}}>
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
         </TouchableHighlight> */}
  
         <TouchableHighlight onPress={() => {}}>
            <View style={styles.button04}>
            <Text style={styles.txt}>Entrar com o google</Text>
           
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
  card:{
    backgroundColor: '#5A818A',
    width: 320,
    height: 90,
    borderRadius:10,
  },
  cardcenter:{
    backgroundColor: '#511E8B',
    
    width: 320,
    height: 90,
    borderRadius:10,
  },
  textcardcenter:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight:400,
    paddingRight: 60,
    paddingTop: 25,
    paddingLeft:52,
    
    color: '#ffff'
  },
  textcard:{
    fontSize: 15,
    fontWeight:400,
    paddingRight: 26,
    paddingTop: 18,
    paddingLeft:25,
    paddingBottom: 18,
    color: '#ffff'
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
      paddingRight: 155,
      paddingLeft:155,
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

    button04:{
      alignItems: "center",
      backgroundColor: "#FFFF",
      justifyContent: "space-between",
      paddingRight: 125,
      paddingLeft:125,
      paddingBottom:20,
      paddingTop:20,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2, 
      shadowRadius: 7,
      elevation: 4,
    },
    

    txt:{
      color:'#000'
       
    }
    
   
  },
)


