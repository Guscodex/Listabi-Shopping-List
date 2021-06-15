import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight,   } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import CheckBox from '@react-native-community/checkbox';



export const Extract = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>Meu extrato</Text>

      {/* <View style={styles.allproductcard}>
        <View style={styles.contentcard}>
        <View style={styles.imgproduct}>

        </View>
        <Text style={styles.tileproduct}>Bolacha aruicha   </Text>
        <TouchableHighlight  style={styles.buttonadd}onPress={() => {}}>
          <Text style={styles.buttontext}>Adicionar</Text>
         </TouchableHighlight>
         </View>
        

      </View>

      <View style={styles.allproductcardgreen}>
            <View style={styles.contentcard}>
            <View style={styles.imgproduct}>
            </View>
          <Text style={styles.tileproduct}>Bolacha aruicha   </Text>
            <View style={styles.buttonandleaf}>
                <TouchableHighlight  style={styles.buttonadd}onPress={() => {}}>
                  <Text style={styles.buttontext}>Adicionar</Text>
                </TouchableHighlight>
                <View style={styles.imgleaf}>
                    <svg  width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 24.6754C0 23.4484 -1.92404e-06 21.7183 0.125969 19.6201C0.51648 13.8531 0.793618 9.63214 3.55239 6.22103C4.91834 4.61693 6.64157 3.33707 8.59123 2.47862C16.0235 -1.3374 24.0731 0.171832 27.4869 1.01847C27.6579 3.05925 27.6873 5.10893 27.5751 7.15356C27.5777 9.65184 27.1825 12.1354 26.4035 14.5157C25.6862 16.8152 24.4216 18.9173 22.7126 20.6508C19.7019 23.4729 15.9605 23.8778 10.1155 24.4913C6.75693 24.8599 3.37034 24.9216 0 24.6754Z" fill="#31626D"/>
                      <path d="M20.7974 7.48485C20.5741 7.22545 20.2557 7.06111 19.9099 7.02674C19.5641 6.99237 19.2182 7.09069 18.9456 7.3008C18.9456 7.3008 11.8283 13.1659 11.6267 13.35L8.76716 11.0064C8.46825 10.7692 8.09452 10.6397 7.70899 10.6397C7.32346 10.6397 6.94974 10.7692 6.65084 11.0064C6.48113 11.1334 6.33932 11.2923 6.2338 11.4737C6.12829 11.6551 6.06121 11.8553 6.03654 12.0624C6.01187 12.2695 6.03012 12.4793 6.0902 12.6794C6.15027 12.8795 6.25096 13.0658 6.3863 13.2273L10.0773 17.6568C10.4321 18.0366 10.9241 18.2678 11.4501 18.3021C11.9761 18.3365 12.4953 18.1712 12.899 17.8409L20.6714 9.14132C20.9018 8.93087 21.0426 8.6438 21.0659 8.33701C21.0893 8.03021 20.9934 7.72607 20.7974 7.48485Z" fill="#ECFFF9"/>
                      </svg>
                  </View>
              </View>
         </View>  
      </View> */}

{/* 
      <View style={styles.buttonright}>
      <TouchableHighlight onPress={() => {}}>
          
       <AntDesign name="arrowright" size={30} color="white" />
         </TouchableHighlight>
      </View> */}

        {/* check */}
      <View style={styles.checkbox}>
        <View style={styles.imgcheck}></View>
        <View style={styles.textcheck}>
          <Text>Bolacha Zooreta Mãe Terra</Text>
        <View style={styles.textitens}> 01 itens</View>
        </View>
        <View style={styles.check}>
        </View>
      </View>


        {/* no check */}
      <View style={styles.checkboxcheck}>
        <View style={styles.imgcheck}></View>
        <View style={styles.textcheck}>
          <Text>Bolacha Zooreta Mãe Terra</Text>
        <View style={styles.textitens}> 01 itens</View>
        </View>
        <View style={styles.check}>
        </View>
      </View>

      {/* trash */}
      <View style={styles.checkboxtrash}>
        <View style={styles.imgcheck}></View>
        <View style={styles.textcheck}>
          <Text>Bolacha Zooreta Mãe Terra</Text>
        <View style={styles.textitens}> 01 itens</View>
        </View>
        <View style={styles.check}>
        </View>
      </View>

    










    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  checkbox:{
    width:315,
    height:85,
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#09BC8A',
    alignItems:'center',
    display:'flex',
    paddingLeft:8,
    flexDirection:'row',
   


  },
  checkboxcheck:{
    width:315,
    height:85,
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#30837F',
    alignItems:'center',
    display:'flex',
    paddingLeft:8,
    flexDirection:'row',
   


  },
  checkboxtrash:{
    width:315,
    height:85,
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#F56960',
    borderStartColor: "white",
    alignItems:'center',
    display:'flex',
    paddingLeft:8,
    flexDirection:'row',
   


  },
 

 
  imgcheck:{
    width:60,
    height:60,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, 
    shadowRadius: 3,
    elevation: 4,
  


  },
  textcheck:{
    fontSize: 15,
    width:200,
    paddingLeft:8,
    fontWeight: 600,
    
  },
  textitens:{
    fontSize: 15,
    fontWeight: 600,
    paddingTop:10,
    color:'#535353',
  },
  check:{
    
  },
  




  buttonright:{
    width:65,
    height:65,
    backgroundColor:'#09BC8A',
    borderRadius:15,
    alignItems:'center',
    display:'flex',
    paddingLeft:18,
    flexDirection:'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4,
   
    
    
  },



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
  allproductcardgreen:{
    height: 250,
    width: 160,
    borderWidth: 1,
    borderColor:'#31626D',
    borderRadius:12,

  },
  contentcardgreen:{

  },
  imgproductgreen:{

  },
  buttonandleaf:{
    display:'flex',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  imgleaf:{
   paddingBottom: 6,
    
  },


  
})

