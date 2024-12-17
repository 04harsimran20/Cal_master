import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import HistoryScreen from './HistoryScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [history, setHistory] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CalcMaster">
          {props => <MainScreen {...props} theme={theme} setHistory={setHistory} history={history} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {props => <HistoryScreen {...props} theme={theme} history={history} />}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {props => <SettingsScreen {...props} theme={theme} setTheme={setTheme} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
