import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';

const Intro = ({ onFinish }) => {
  const [name, setName] = useState('');
  const handleOnChangeText = text => setName(text);

  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
  
        <Text style={styles.inputTitle}>Welcome To Notes App 📝</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder='Enter Name'
          style={styles.textInput}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.DARK,
    color: colors.PRIMARY,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'center',
    paddingLeft: 25,
    fontSize: 25,
    marginBottom: 15,
    opacity: 0.5,
  },
});

export default Intro;
