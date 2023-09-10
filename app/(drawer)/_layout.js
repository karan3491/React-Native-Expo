import { Drawer } from "./Drawer";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';


function DrawerIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  
  return (
    <Drawer screenOptions={
      {
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }
    }>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon:  ({ color }) => <DrawerIcon name="home" color={color} />,
        }}
      />
      <Drawer.Screen
        name="dashboard" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
          drawerIcon:  ({ color }) => <DrawerIcon name="line-chart" color={color} />,
        }}
      />
    </Drawer>
  );
}