// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDoTcUl0u2cCa-35IOao8jvippMheC3Oy8",
    authDomain: "chatapp-e979e.firebaseapp.com",
    databaseURL: "https://chatapp-e979e-default-rtdb.firebaseio.com",
    projectId: "chatapp-e979e",
    storageBucket: "chatapp-e979e.appspot.com",
    messagingSenderId: "718281567643",
    appId: "1:718281567643:web:7c2590a173029d239e853e"
  };
  
  // Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



