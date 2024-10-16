import React, { useState } from 'react';
import { StyleSheet, View ,Text,Button} from 'react-native';
``
const Menu = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>{count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Menu;
