import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from './MainScreenStyle';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen({ theme, setHistory, history }) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility
  const navigation = useNavigation();

  // Handle calculator button presses
  const handlePress = (value) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const res = eval(input.replace('×', '*').replace('÷', '/')).toString();
        setResult(res);
        setHistory([...history, `${input} = ${res}`]);
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=',]
  ];

  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, isDark ? styles.darkContainer : styles.lightContainer]}>
      {/* Settings Button */}
      <TouchableOpacity style={styles.settingsButton} onPress={() => setMenuVisible(true)}>
        <Text style={styles.settingsButtonText}>☰</Text>
      </TouchableOpacity>

      {/* Display Section */}
      <View style={styles.displayContainer}>
        <Text style={[styles.result, isDark ? styles.darkResult : styles.lightResult]}>
          {result || input || '0'}
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  item === '0' ? styles.zeroButton : null,
                  ['AC', '+/-', '%'].includes(item)
                    ? isDark
                      ? styles.darkFunctionButton
                      : styles.lightFunctionButton
                    : null,
                  ['÷', '×', '-', '+', '='].includes(item)
                    ? isDark
                      ? styles.darkOperatorButton
                      : styles.lightOperatorButton
                    : isDark
                    ? styles.darkButton
                    : styles.lightButton,
                ]}
                onPress={() => handlePress(item)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    ['÷', '×', '-', '+', '='].includes(item)
                      ? isDark
                        ? styles.darkButtonText
                        : styles.lightOperatorButtonText
                      : isDark
                      ? styles.darkButtonText
                      : styles.lightButtonText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Expandable Menu */}
      <Modal transparent={true} visible={menuVisible} animationType="fade">
        <View style={menuStyles.modalContainer}>
          <View style={menuStyles.menu}>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={menuStyles.closeButton}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate('CalcMaster'); }}>
              <Text style={menuStyles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate('History'); }}>
              <Text style={menuStyles.menuItem}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate('Settings'); }}>
              <Text style={menuStyles.menuItem}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  menuItem: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
  },
});
