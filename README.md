### **README.md**

# 📱 CalcMaster - Mobile Calculator Application

**Project Phase 4: Building the App**  
**Team Name**: SoloDev  
**Student Name**: Harsimran Preet Singh  
**Student ID**: 000922438

---

## **📋 Project Description**

**CalcMaster** is a fully functional mobile calculator app built using **React Native**. The app features:

1. **Basic Calculator Operations**: Addition, subtraction, multiplication, division, and percentage.
2. **Theme Switching**: Switch between **Dark Mode** (iPhone-style UI) and **Light Mode** (Google Calculator-style UI).
3. **History**: A history page to view previous calculations.
4. **Expandable Menu**: A settings menu for easy navigation to **Home**, **History**, and **Settings** screens.

---

## **🛠️ Technologies Used**

- **React Native**
- **Expo CLI**
- **React Navigation**

---

## **💻 Installation Instructions**

Follow these steps to set up the app on your local machine:

### **Prerequisites**

1. Install **Node.js** (v14 or higher): [Node.js Download](https://nodejs.org)
2. Install **Expo CLI** globally:
   ```bash
   npm install -g expo-cli
   ```
3. Install a mobile emulator (optional) or use a physical Android device with **Expo Go** installed.

---

### **Steps to Run the App**

1. Clone the project repository:
   ```bash
   git clone <Your-GitHub-Link>
   cd CalcMaster_Final
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Scan the QR code using **Expo Go** on your mobile device **or** run on an Android emulator.

---

## **🧩 Features**

1. **Basic Operations**:

   - Addition (+), Subtraction (-), Multiplication (×), Division (÷).
   - Reset (`AC`), Percentage (`%`), Decimal (.), and Equal (`=`).

2. **Dynamic Theme**:

   - Dark Mode: Replicates the **iPhone calculator** UI.
   - Light Mode: Replicates the **Google calculator** UI.

3. **Calculation History**:

   - View previously completed calculations.

4. **Expandable Menu**:
   - Easy navigation between **Home**, **History**, and **Settings**.

---

## **🔧 File Structure**

```
/CalcMaster_Final
   ├── App.js                 # Main entry point with navigation
   ├── MainScreen.js          # Calculator screen
   ├── MainScreenStyle.js     # Styles for MainScreen (Dark & Light Mode)
   ├── HistoryScreen.js       # Displays calculation history
   ├── SettingsScreen.js      # Allows theme switching
   ├── package.json           # Dependencies and configurations
   └── README.md              # Project documentation
```

---

## **📈 Future Improvements**

1. Add voice input for calculations using **Speech-to-Text APIs**.
2. Implement persistent history storage using **SQLite**.
3. Add animations for button clicks and transitions.

---

## **📄 License**

This project is licensed under the MIT License.

---

### **✅ Notes for Submission**

- All components are working perfectly.
- Ensure you test the app on an Android device or emulator.

---

### **🧪 Testing Instructions**

1. Run the app using `npx expo start`.
2. Verify:
   - Calculator functionality.
   - Theme switching.
   - Navigation to **History** and **Settings** screens.

---
