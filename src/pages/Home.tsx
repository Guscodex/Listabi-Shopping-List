import { processFontFamily } from 'expo-font';
import React from 'react';
import LogoGoogle from "../assets/google.png";
import { AntDesign } from '@expo/vector-icons'; 




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
  
         {/* /* <TouchableHighlight onPress={() => {}}>
            <View style={styles.button04}>
            <Text style={styles.txt}>Entrar com o google</Text>
           
            </View>
          </TouchableHighlight>   */} 
         
         <View style={styles.form}> 
              <View style={styles.iconform}>
                  <View style={styles.allicons}>
                    <View style={styles.iconfirst}>   </View>
                    <View style={styles.iconsecond}>   </View>
                    <View style={styles.iconthird}>   </View>
                </View>

                <AntDesign styles={styles.close} name="close" size={12} color="white" onPress={() => {}}  />
                
              </View>
              <View style={styles.alltext}>
                  <Text style={styles.title}>Nos ajude, é rápido :D</Text>
                  <Text style={styles.text}>No mercado Dia, você encontrou a marca ‘Nude’ de Leites e Bebidas?</Text>
              </View>
              <View style={styles.allbuttom}>
                    <TouchableHighlight style={styles.componentyes} onPress={() => {}}>
                        <View style={styles.buttonform}>
                        <Text style={styles.txtform}>Sim</Text>
                        </View> 
                     </TouchableHighlight>
                     <TouchableHighlight  style={styles.componentno}onPress={() => {}}>
                        <View style={styles.buttonform}>
                        <Text style={styles.txtform}>Não</Text>
                        </View> 
                     </TouchableHighlight>
                
                 
              </View>
                
          </View>
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
   form:{
     width:315, 
     height:170,
     backgroundColor: '#30837F',
     borderRadius:10,
     borderWidth: 1,
      borderColor:"#66A466",
    
   },
   iconform:{

    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:13,
    paddingTop: 15,
    paddingRight:20,
   },
   allicons:{
    display: 'flex',
    flexDirection:'row',

   
   },
   iconfirst:{
     backgroundColor: '#511E8B',
     width: 8 ,
     height: 8,
     borderRadius: 50,
     marginRight: 4.5,  
   },
   iconsecond:{
    backgroundColor: '#ffff',
    width: 8 ,
    height: 8,
    borderRadius: 50,
    marginRight: 4.5,  
  },
  iconthird:{
    backgroundColor: '#ffff',
    width: 8 ,
    height: 8,
    borderRadius: 50,
    marginRight: 4.5,  
  },
  

  
   close:{
        
        justifyContent:'flex-end',
   },

   alltext:{
     width: 275,
     height: 90,
    color: '#FFF',
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 5,
   },
   title:{
    color: '#FFF',
    fontSize:18,
    fontWeight: 600,
  },
   text:{
    color: '#FFF',
    fontWeight: 300,
    fontSize:17,
   },

   allbuttom:{
     display: 'flex',
     justifyContent:'flex-end',
   
     textAlign: "center",
     flexDirection: "row",
     flexWrap: "wrap",
     paddingRight: 40,
     paddingBottom:10,
     

   },
   buttonform:{
    
    
   },
   txtform:{
     textAlign: "center",
     color: '#FFFF',
     paddingBottom: 0,
     paddingTop:3,
     
    

   },
   componentno:{
     backgroundColor: '#FF3C38',
     width: 50,
     height: 25,
     borderRadius:3,
     textAlign: "center",
     paddingBottom: 0,

   },
   componentyes:{
    backgroundColor: '#28C313',
    width: 50,
    height: 25,
    borderRadius:3,
    textAlign: "center",
    marginRight: 5,
    paddingBottom: 0,
    
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


