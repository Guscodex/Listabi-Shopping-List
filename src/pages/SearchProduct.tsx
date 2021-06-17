import React from 'react';
import { StyleSheet, SafeAreaView, Text, View,TouchableHighlight, } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export const SearchProduct = () => {
  return (
    <SafeAreaView style={styles.container} >
     <View style={styles.nohistory}>
       <View style={styles.iconhistory}> 
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z" stroke="#F56960" stroke-width="5"/>
          <circle cx="25" cy="39" r="2" fill="#F56960"/>
          <path d="M23 12C23 10.8954 23.8954 10 25 10V10C26.1046 10 27 10.8954 27 12V34C27 35.1046 26.1046 36 25 36V36C23.8954 36 23 35.1046 23 34V12Z" fill="#F56960"/>
          </svg>

     

        </View>
       <View style={styles.texthistory}>
         <Text style={styles.titlehistory}>Histórico de Compras</Text>
         <Text style={styles.textphistory}>Infelizmente sua lista está vazia. Aqui você acessa todos os seus últimos produtos comprados, então adicione novidades a sua lista!</Text>
       </View>
       <Text></Text> 
     </View>
 

    

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  nohistory:{

  },
  iconhistory:{
    alignItems:'center',
    paddingBottom:40,

  },
  texthistory:{
    textAlign: 'center',


  },
  titlehistory:{
    textAlign: 'center',
   
    fontSize:20,
    color: '#F56960',
    fontWeight: 600,
    paddingBottom:20,
  },
  textphistory:{
    textAlign: 'center',
    width:290,
    fontSize:14,
    color: '#898989',
    fontWeight: 600,
    textAling: 'center',
  },

  

})