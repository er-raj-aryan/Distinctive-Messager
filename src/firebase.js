import firebase from "firebase";
const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyApTJgojOfLlLlM1dlaYm0jKx4p-9wGy_4",
        authDomain: "raj-messanger-2d4ac.firebaseapp.com",
        databaseURL: "https://raj-messanger-2d4ac.firebaseio.com",
        projectId: "raj-messanger-2d4ac",
        storageBucket: "raj-messanger-2d4ac.appspot.com",
        messagingSenderId: "712942027397",
        appId: "1:712942027397:web:ee558f1327f4b8974c5fec",
        measurementId: "G-MV3MBEFW7R"
});

const db = firebaseApp.firestore();

export default db;