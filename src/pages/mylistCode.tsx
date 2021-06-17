import React from 'react';
import { StyleSheet, SafeAreaView, Text, View,TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export const SearchProduct = () => {
  return (
    <SafeAreaView style={styles.container} >
     
      <View style={styles.top}>
      <Text style={styles.titlelist}>Minha lista</Text>
      <Text style={styles.textlist}>Você ainda não tem nenhuma lista com produtos.</Text>
        
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

      </View>
        <View style={styles.news}>
          <Text style={styles.newstitle}>Novidades</Text>
            <View style={styles.goshop}>
            
                <View style={styles.svgshop}>
                  <svg  width="30" height="30" viewBox="0  15  15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 20.4658L22 2.09091C22 0.935682 21.105 0 20 0H12H4C2.895 0 2 0.935682 2 2.09091L0.0469999 20.4658C0.0179999 20.609 0 20.7565 0 20.9091C0 22.0643 0.895 23 2 23H12H22C23.105 23 24 22.0643 24 20.9091C24 20.7565 23.982 20.609 23.953 20.4658ZM17 5.13109V6.27273C17 9.15505 14.757 11.5 12 11.5C9.243 11.5 7 9.15505 7 6.27273V5.13109C6.419 4.91573 6 4.34073 6 3.65909C6 2.79345 6.672 2.09091 7.5 2.09091C8.328 2.09091 9 2.79345 9 3.65909V6.27273C9 8.00191 10.346 9.40909 12 9.40909C13.654 9.40909 15 8.00191 15 6.27273V3.65909C15 2.79345 15.672 2.09091 16.5 2.09091C17.328 2.09091 18 2.79345 18 3.65909C18 4.34073 17.581 4.91573 17 5.13109Z" fill="white"/>
                  </svg>
                  </View>
              <View style={styles.alltext}>

                  <Text style={styles.shoptitle}>Vamos as compras?</Text>
                  <Text style={styles.shoptext}>Ative essa funcionalidade ao ir ao mercado! </Text>
              </View>
            </View>
            <Text style={styles.newstitle}>Seus produtos</Text>

            <View style={styles.controlproduct}>
              <View style={styles.iconcontrol}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13.5" fill="#F5FDF9" stroke="#F56960"/>
              <path d="M13.788 9.001C13.38 9.001 13.057 8.882 12.819 8.644C12.581 8.406 12.462 8.1 12.462 7.726C12.462 7.29533 12.598 6.93833 12.87 6.655C13.142 6.37167 13.5047 6.23 13.958 6.23C14.4113 6.23 14.757 6.35467 14.995 6.604C15.233 6.842 15.352 7.14233 15.352 7.505C15.352 7.95833 15.216 8.321 14.944 8.593C14.672 8.865 14.2923 9.001 13.805 9.001H13.788ZM12.887 12.163L11.68 11.84V10.701L14.791 10.327H14.825L15.301 10.667V18.844L16.44 18.98V20H11.697V18.98L12.887 18.827V12.163Z" fill="#F56960"/>
              </svg>

              </View>
              <View style={styles.alltextcontrol}>
                <Text style={styles.text}>Controle sua compra</Text>
                <Text style={styles.text}>03 itens e 02 produtos</Text>
              </View>
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
  titlelist:{
    fontWeight:600,
    fontSize:30,
    width:170,
  },
  textlist:{
    width:265,
    color:'#898989',
    fontWeight:400,
    fontSize:17,
  },
  top:{
    display: 'flex',
    flexDirection:'column ',
    justifyContent:'space-between',
  
  },
  news:{

  },
  newstitle:{
    fontSize:20,
    fontWeight:500,
    color: '#52665A',
    paddingBottom:25,
    paddingTop:25,

  },
  svgshop:{
    paddingTop: 40,
  },
  goshop:{
    width: 315,
    height:120,
    paddingLeft:22,
    
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',

    backgroundColor: '#09BC8A',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, 
    shadowRadius: 7,
    elevation: 4,

  },
  alltext:{
    display: 'flex',
    flexDirection:'column ',
    justifyContent:'space-between',
    paddingRight:40,
    

  },
  shoptitle:{
    color:'#fff',
    width: 185,
    fontSize:20,
    fontWeight:500,
    paddingTop:25,
    
  },
  shoptext:{
    color:'#fff',
    width:225,
    paddingTop:10,
    color:'#fff',
    fontSize: 15,
    fontWeight:400,
    paddingBottom:30,
  },
  controlproduct:{
    paddingLeft:15,
    paddingTop: 15,
    width:315,
    height:60,
    backgroundColor:'#F56960',
    borderRadius:10,
    display: 'flex',
    flexDirection:'row',
    
  },
  iconcontrol:{

  },
  text:{
    color: '#FFFF',
    fontColor: '#fff',
    fontSize:12,
    fontWeight: 400,
  },
  alltextcontrol:{
   
    paddingLeft:10,
    width:180,
   

  },
  form:{
    width:315, 
    height:170,
    backgroundColor: '#4D8374',
    borderRadius:10,
    borderWidth: 1,
     borderColor:"#66A466",
    zIndex:-5,
    
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
    backgroundColor: '#AA4465',
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
    backgroundColor: '#F56960',
    width: 50,
    height: 25,
    borderRadius:3,
    textAlign: "center",
    paddingBottom: 0,

  },
  componentyes:{
   backgroundColor: '#09BC8A',
   width: 50,
   height: 25,
   borderRadius:3,
   textAlign: "center",
   marginRight: 5,
   paddingBottom: 0,
   
  },


})