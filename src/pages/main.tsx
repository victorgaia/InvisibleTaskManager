import React from 'react';
import { useEffect, useState} from 'react';
import { FlatList, View, Image, Text } from 'react-native';

interface Member {
  login: string;
  avatar_url: string;
}

// import { Container } from './styles';

const Main: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/ExpediaGroup/members').then(response => {
      response.json().then(data => {
        setMembers(data);
      })
    })
  }, []); 

  return (
    <FlatList
      data={members}
      keyExtractor={member => member.login}
      renderItem={({ item: member }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
          <Image style={{width: 48, height: 48, borderRadius: 24, marginRight: 16, marginLeft: 12}}  source={{ uri: member.avatar_url }} />
          <Text>{member.login}</Text>
        </View>
      )}
    />
  );
}

export default Main;