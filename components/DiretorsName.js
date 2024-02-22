import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DiretorsName = (props) => {
       const removeTask = (index)=>{
              let itemscopy = [...taskList];
              itemscopy.splice(index,1);
              setTasklist(itemscopy);
       }
  return (
    <View style = {styles.mainWrapper}>
      <View style={styles.directorsNameWrapper}>
        <Text>{props.text}</Text>
      </View>
      <View style={styles.directorsNameWrapper}>
        <Text>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={()=>removeTask(index)} style = {styles.RemoveBtn}>
         <Text style={{color:'white'}}>Remove</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DiretorsName

const styles = StyleSheet.create({
    mainWrapper:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:10
    },
    directorsNameWrapper:{
        width:130,
        height:50,
        borderColor:'black',
        borderRadius:5,
        borderWidth:2,
        backgroundColor:'lightgrey',
        padding:10
    },
    RemoveBtn:{
        width:80,
        height:50,
        backgroundColor:'red',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        
    }
})