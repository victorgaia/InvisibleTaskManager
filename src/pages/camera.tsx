import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

// import { Container } from './styles';

const Tarefas: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums').then(response => {
      response.json().then(data => {
        setSelectedTask(data);
      })
    })
  }, []); 

  return (
    <FlatList
      data={selectedTask}
      keyExtractor={member => member.title}
      renderItem={({ item: member }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, marginLeft: 8}}>
          <Text>{member.id}. </Text>
          <Text>{member.title}</Text>
        </View>
      )}
    />
  );
}

export default Tarefas;