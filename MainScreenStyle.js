import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  displayContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 70,
    textAlign: 'right',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 10, // Adds horizontal padding to ensure no button is cut off
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    width: 80, // Ensures uniform size for all buttons
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  zeroButton: {
    width: 170, // Doubles the width for the "0" button
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    paddingLeft: 0, // Removes padding for perfect centering
  },
  buttonText: {
    fontSize: 32,
    textAlign: 'center', // Ensures text is centered
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#555',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  settingsButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  // Light Theme Styles
  lightContainer: {
    backgroundColor: '#fff',
  },
  lightResult: {
    color: '#000',
  },
  lightButton: {
    backgroundColor: '#E0E0E0',
  },
  lightFunctionButton: {
    backgroundColor: '#D3D3D3',
  },
  lightOperatorButton: {
    backgroundColor: '#4285F4',
  },
  lightButtonText: {
    color: '#000',
  },
  lightOperatorButtonText: {
    color: '#fff',
  },
  // Dark Theme Styles
  darkContainer: {
    backgroundColor: '#000',
  },
  darkResult: {
    color: '#fff',
  },
  darkButton: {
    backgroundColor: '#333',
  },
  darkFunctionButton: {
    backgroundColor: '#A5A5A5',
  },
  darkOperatorButton: {
    backgroundColor: '#FF9500',
  },
  darkButtonText: {
    color: '#fff',
  },
});
