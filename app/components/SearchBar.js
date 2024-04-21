import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.searchContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder='Search here..'
      />
      <AntDesign name='search1'
        size={20}
          color={colors.DARK}
          onPress={onClear}
          style={styles.searchBtn}
      />
      </View>
      
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: colors.DARK,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
  searchContainer: {
    
    position:'relative'
  },
  searchBtn: {
    position: 'absolute',
    right: 15,
    top: 10,
  
  }
});

export default SearchBar;
