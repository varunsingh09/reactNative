import React from 'react';
import { StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';

const Search = ({ searchQuery, updateSearch }) => {

  return (

    <SearchBar
      placeholder="What you are looking?"
      onChangeText={updateSearch}
      value={searchQuery}
      style={styles.searchbar}
      containerStyle={styles.searchcontainer}
      backgroundColor={styles.searchbackground}
      icon={{ type: 'font-awesome', name: 'search' }}

    />
  );
}

export default Search


const styles = StyleSheet.create({
  searchcontainer: {
    backgroundColor: "#FBFBFB",
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  searchbar: {
    width: "100%",
    backgroundColor: 'red', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },
  searchbackground: {
    backgroundColor: "#FBFBFB"
  }
});
