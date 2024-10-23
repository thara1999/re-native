import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const FormSubmit = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {response && <Text>Response: {JSON.stringify(response)}</Text>}
    </View>
  );
};

export default FormSubmit;
