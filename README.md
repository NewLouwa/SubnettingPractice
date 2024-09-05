# 🌐 Subnetting Practice - Learn Networking with Fun Exercises! 🎓

Welcome to **Subnetting Practice**, a web application designed to help you master networking concepts such as subnets, IP addresses, masks, and more! 🚀 This app generates dynamic exercises and quizzes to enhance your knowledge and skills in computer networking.

## 🛠️ Technologies Used

- **HTML5, CSS3, JavaScript**: The core technologies used to build the app's frontend.
- **Firebase**: For authentication and database management, making it easy to track user progress.
- **DOM Manipulation**: JavaScript is heavily used to dynamically create and manage the DOM elements, ensuring a smooth and interactive user experience.

## 📁 Project Structure

The project is well-organized into different folders to ensure clean and maintainable code.

### 📂 `layout/`
This folder contains all the layout-related components that manage the structure and design of the app. It helps to generate common elements like headers, footers, and page layouts.

- `BaseLayout.js`: Handles the basic structure for most pages.
- `ProfileLayout.js`: A specialized layout for user profile pages.

### 📂 `pages/`
Contains the JavaScript files responsible for generating the various pages of the app.

- `HomePage.js`: The main landing page where users can start learning.
- `SignupPage.js`: A dedicated page for user signups.
- `ProfilePage.js`: Allows users to view and manage their profiles.

### 📂 `modals/`
This folder contains reusable modal components that pop up when users need to input data or interact with the app.

- `SignupModal.js`: A modal that asks users to input their username and decide whether they want to create a password or use a generated key.

### 📂 `tools/`
Utility functions that are used across different parts of the application.

- `GenerateUUID.js`: Generates short UUIDs for users who prefer not to create passwords and want to use a unique key for login.

### 📂 `assets/`
Contains static assets like images and icons.

- `favicon.ico`: The app's favicon.
- `favicon.png`: An alternative favicon image.

### 📂 `css/`
All the styling for the app is handled in this folder.

- `style.css`: The main stylesheet for the entire app.

## 🌟 Key Features

- **Dynamic Quiz Generation**: Automatically creates exercises on subnetting, masks, and networking concepts. 🧠
- **Customizable User Experience**: Users can choose to either create a password or use a generated key for quick access. 🔐
- **Modular Layouts**: Reusable layouts and modals make it easy to maintain and expand the application. ⚙️
- **Firebase Authentication**: Secure authentication and user profile management. 🛡️
- **Responsive Design**: The app looks great on both desktop and mobile devices. 📱💻

## 🚀 How to Get Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/subnetting-practice.git
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Local Server
If you're using a tool like **http-server** or **Live Server**, run the command to serve the app locally:

```bash
http-server ./public
```
Or:
```bash
npx live-server ./public
```
### 4. Deploy to Firebase (Optional)
Once you're ready to share the app, you can deploy it using Firebase:

```bash
firebase deploy
```


## 🤖 Future Improvements

- **More Networking Concepts**: We plan to add more exercises around other networking topics such as VLANs, routing, and protocols. 🛣️
- **Leaderboard**: Add a competitive leaderboard to track users' scores globally. 🏆
- **Social Logins**: Implement Google and Facebook login options for a faster onboarding experience. 🌍

## 👥 Contributors

- **New Louwa** - Wanna be Fullstack developer and networking student.


## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.