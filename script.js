// Initialize Firebase
var firebaseConfig = {
    authDomain: "golden-gateway-346003.firebaseapp.com",
    apiKey: "AIzaSyAqxju-ukKbiwSAiAxVT6ZXwyzfGInAviY",
    databaseURL: "https://golden-gateway-346003-default-rtdb.firebaseio.com",
    projectId: "golden-gateway-346003",
    messagingSenderId: "372919203020",
    storageBucket: "golden-gateway-346003.appspot.com",
    appId: "1:372919203020:web:c80ee5876ed4787ffdbe69",
    measurementId: "G-YECVCGG9Y0"
  };
  firebase.initializeApp(firebaseConfig);
  var element = document.querySelector(".door");
  console.log(element);
  
  // Get a reference to the database service
  var database = firebase.database();

  console.log("hello");
  database.ref("/door/state").on("value", function(snapshot) {
    if (snapshot.val() == true) {
        // push door open to class list
        element.classList.add("doorOpen");
        // play door open sound
        var audio = new Audio('dingDong.mp3');
        audio.play();
    }else{
        // remove door open from class list
        element.classList.remove("doorOpen");
    }
  });
  