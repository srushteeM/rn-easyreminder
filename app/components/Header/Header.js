import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => (
  <View style={styles.navbar}>
    <Text style={{ color: "white", fontSize: 18 }}>Reminder</Text>
    <TouchableOpacity>
      <Icon size={26} name="md-more" color="#ffffff" />
    </TouchableOpacity>
  </View>
);

export default Header;
