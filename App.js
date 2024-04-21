import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from './app/screens/Intro';
import NoteScreen from './app/screens/NoteScreen';
import NoteDetail from './app/components/NoteDetail';
import NoteProvider from './app/contexts/NoteProvider';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result === null) {
      setIsAppFirstTimeOpen(true);
    } else {
      setUser(JSON.parse(result));
      setIsAppFirstTimeOpen(false);
    }
  };

 

  useEffect(() => {
    findUser();
    
  }, []);

  const renderNoteScreen = props => <NoteScreen {...props} user={user}  />;

  return isAppFirstTimeOpen ? (
    <Intro onFinish={findUser} />
  ) : (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator screenOptions={{ headerTitle: '', headerTransparent: true }}>
          <Stack.Screen name="NoteScreen" component={renderNoteScreen} />
          <Stack.Screen name="NoteDetail" component={NoteDetail} />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}
