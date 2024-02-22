import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DiretorsName from './components/DiretorsName';

export default function App() {

  const [data,setData]=useState();
  const [data2,setData2]=useState();
  const [taskList,setTasklist]=useState([]);

  const addTask = ()=>{
     if(data,data2&&data,data2.trim()){
      setTasklist([...taskList]);
      Keyboard.dismiss();
      setData(null);
      setData2(null);
     }
       
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.HeadingText}>
            Directors And Movies
        </Text>
      </View>
      <View style={styles.inputAndAddWrapper}>
       <TextInput value={data} onChangeText={setData} style = {styles.directorsInput}
       placeholder='Directors Name'
       
       />
       <TextInput  value={data2} onChangeText={setData2} style = {styles.movieNameInput}
       placeholder='Directors Name'
       
       />
       <TouchableOpacity onPress={()=>addTask()} style={styles.addBtn}>
         <Text>Add</Text>
       </TouchableOpacity>
      </View>
      <View style={styles.mainComponentWrapper}>
        {
          taskList.map((item,index)=>{
            return(
              <View key={index}>
              <DiretorsName text={item}/>
              </View>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeadingText:{
    fontWeight:'bold',
    fontSize:25,
    padding:40,
    textAlign:'center'
  },
  mainComponentWrapper:{
    // padding:20
    
  },
  directorsInput:{
    width:120,
    height:40,
    backgroundColor:'lightgrey',
    borderRadius:5,
  },
  movieNameInput:{
    width:120,
    height:40,
    backgroundColor:'lightgrey',
    borderRadius:5,
  },
  addBtn:{
    height:40,
    width:50,
    backgroundColor:'lightgreen',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  inputAndAddWrapper:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:5
  }
});
