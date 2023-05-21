import react from "react";
import {Text, Image, View, StyleSheet,Button, ImageBackground} from 'react-native';
import { Linking } from "react-native";

const App = () =>{
  
  return(
    <View style={styles.pageContainer}>

      <View style={styles.card}>
        <ImageBackground source={require('./IMG-20221005-WA0002.jpg')} style={styles.image}>
          <View style={styles.cardInner}>
           <Text style={styles.names}>Happy Birthday love</Text>
           <Text style={styles.bio}>This is a small present I have prepared for you. Its not much, I really wanted to do something unique and add more things but didn't get much time to work on this. Hope you like it! </Text>
          </View>
        </ImageBackground>
        
        <View style={{marginHorizontal:50}}>
          <Button
          title="Click Here!!!" 
          onPress={()=>{
            Linking.openURL('https://youtu.be/TbwP9STuXSg');
          }}
           />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'#F29CA3'
  },

  card:{
    width:'95%',
    height:'80%',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 1,
    shadowRadius: 13.97,
    elevation: 21,
  },

  cardInner:{
    padding:10,
    backgroundColor:'grey',

  },

  image:{
    width:'100%',
    height:'100%',
    borderRadius: 30,
    overflow:'hidden',


    justifyContent:'flex-end',
    
  },

  imageSt:{
    width:100,
    height:100,
  },

  names:{
    fontSize:25,
    Color: 'red',
    FontWeight:'bold',
    marginHorizontal:55,
    
  },
  bio:{
    marginLeft:20,
    marginTop: 5,
    fontSize:18,
    Color:'White',
    lineHeight: 20,
    alignItems:'center',
    
  },
  button:{
    flex: 1,
    backgroundColor:'#71EC4C',
    alignItems:'flex-end',
    justifyContent:'space-around',
  },
});

export default App;