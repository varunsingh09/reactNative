import React from 'react';

//Import all required component
import { View,  TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => props.navigation.navigate('Dashboard')}
          name="md-arrow-back"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;