import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {  Link,Redirect  } from 'expo-router';

export default function DrawerOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(drawer)/index.js" />
      {/* <Redirect href="/modal" >
      <Pressable>
        <Text>Model</Text>
      </Pressable>
    </Redirect> */}
    <Link href="/modal" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
