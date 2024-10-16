import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './About';
import Menu from './Menu';
import { Provider } from 'react-redux';
import store from './redux/Store';
import ActionView from './redux/Actionview';

export default function App(){
const Message="react native";
  return (
    <View style={styles.container}>
      <Text> this is react native code</Text>
      <StatusBar style="auto"/>
      <About new={Message}/>
      <Menu/>
      <Provider store={store}>
        <ActionView/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
