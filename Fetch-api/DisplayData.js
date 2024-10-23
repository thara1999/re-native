import React from 'react';
import { View, FlatList, SectionList, Text } from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['Fries', 'Onion Rings', 'Garlic Bread'],
  },
];

const DisplayData = () => {
  return (
    <View>
      <Text>FlatList Example:</Text>
      <FlatList
        data={DATA[0].data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Text>SectionList Example:</Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
      />
    </View>
  );
};

export default DisplayData;
