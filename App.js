import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from './Fetch-api/Red';
// import DisplayData from './Fetch-api/DisplayData';
import FetchData from './Fetch-api/FetchData';
// import FormSubmit from './Fetch-api/FormSubmit';
// import Reduxdata from './Fetch-api/redux/reduxdata';
export default function App(){
const Message="react native";
  return (
    <View style={styles.container}>
      <Text> this is react native code</Text>
      <StatusBar style="auto"/>
      <FetchData/>
      {/* <Provider store={store}>
<ScrollView>
  <FetchData/>
  <FormSubmit/>
  <DisplayData/>
  <Reduxdata/>
</ScrollView>
      </Provider> */}
      {/* <About new={Message}/>
      <Menu/>
      <Provider store={store}>
        <ActionView/>
      </Provider> */}
      
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
