
# 🌐 IPAcademy - Learn Networking with Fun Exercises! 🎓

Welcome to **IPAcademy**, a web application designed to help you master networking concepts such as subnets, IP addresses, masks, and more! 🚀 This app generates dynamic exercises and quizzes to enhance your knowledge and skills in computer networking.

## 🛠️ Technologies Used

- **HTML5, CSS3, JavaScript**: The core technologies used to build the app's frontend.
- **Node.js & Express**: A secure backend serving the app, handling sensitive operations and managing API routes.
- **Firebase**: For authentication and database management, making it easy to track user progress.
- **DOM Manipulation**: JavaScript is heavily used to dynamically create and manage the DOM elements, ensuring a smooth and interactive user experience.

## 📁 Project Structure

The project is well-organized into different folders to ensure clean and maintainable code.

### 📂 `public/`
This folder contains the static front-end files like HTML, CSS, and JavaScript.

- `index.html`: The main entry point for the frontend.
- `assets/`: Contains images and icons (e.g., favicon, logo).
- `css/style.css`: The main stylesheet for the app.
- `js/`: JavaScript files for frontend logic.
  - `app.js`: Manages page navigation and event handling.
  - `auth.js`: Handles user authentication with Firebase.
  - `firestore.js`: Manages Firestore database interactions.
  - `layout/`: Contains reusable layout components.
    - `BaseLayout.js`: Handles the basic structure for most pages.
    - `ProfileLayout.js`: A specialized layout for user profile pages.
  - `modals/`: Contains reusable modal components.
    - `SignupModal.js`: Modal for user signup interactions.
  - `pages/`: Manages individual pages of the app.
    - `HomePage.js`: The main landing page.
    - `SignupPage.js`: User registration page.
    - `ProfilePage.js`: User profile management page.
  - `tools/GenerateUUID.js`: Utility function for generating unique user keys.

### 📂 `server/`
The backend logic is placed here, primarily handling Firebase operations and API routes.

- `firebaseAdmin.js`: Initializes the Firebase Admin SDK for secure server-side operations.

### 📂 `server.js` (index.js)
The main server file that serves static files and handles backend routing using **Node.js** and **Express**.

## 🌟 Key Features

- **Dynamic Quiz Generation**: Automatically creates exercises on subnetting, masks, and networking concepts. 🧠
- **Customizable User Experience**: Users can choose to either create a password or use a generated key for quick access. 🔐
- **Modular Layouts**: Reusable layouts and modals make it easy to maintain and expand the application. ⚙️
- **Firebase Authentication**: Secure authentication and user profile management. 🛡️
- **Responsive Design**: The app looks great on both desktop and mobile devices. 📱💻

## 🚀 How to Get Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/IPAcademy.git
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Local Server
Run the server locally using **Node.js**:
```bash
node index.js
```
The app will be served at `http://localhost:3000`.

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

- **New Louwa** - Aspiring Full-stack developer and networking enthusiast.
- - **ChatGPT 4o (OpenAI)** - Assisted with architecture and coding best practices.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
