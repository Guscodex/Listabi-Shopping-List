import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';

export const Extract = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>Meu extrato</Text>

      <View style={styles.allproductcard}>
        <View style={styles.contentcard}>
        <View style={styles.imgproduct}>

        </View>
        <Text style={styles.tileproduct}>Bolacha aruicha   </Text>
        <TouchableHighlight  style={styles.buttonadd}onPress={() => {}}>
          <Text style={styles.buttontext}>Adicionar</Text>
         </TouchableHighlight>
         </View>
        

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
  allproductcard:{
    height: 250,
    width: 160,
    borderWidth: 1,
    borderColor:"#F56960",
    borderRadius:12,

    
  },
  contentcard:{
    paddingTop: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  imgproduct:{
    alignItems:'center',
    width:135,
    height:135,
    borderRadius:10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4,
  },
  tileproduct:{
    paddingTop:16,
    width:115,
    fontSize: 16,
    fontWeight: 500,
  },
  buttontext:{
    marginTop:8,
    marginBottom: 5,
    marginLeft:14,
    marginRight:14,
    fontWeight: 600,
    

    color:'#fff',
    fontSize:11,
  },
  buttonadd:{
    marginTop: 9,
    width: 80,
    height:30,
    backgroundColor: '#09BC8A',
    borderRadius:5,
    marginBottom:15,
  },


  
})

