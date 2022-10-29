
var firebaseConfig = {
      apiKey: "AIzaSyDwXzPnQs-3wHunK4phbemC_s9-K-_4Z-k",
      authDomain: "kwitter-9-10-22.firebaseapp.com",
      databaseURL: "https://kwitter-9-10-22-default-rtdb.firebaseio.com",
      projectId: "kwitter-9-10-22",
      storageBucket: "kwitter-9-10-22.appspot.com",
      messagingSenderId: "163773968506",
      appId: "1:163773968506:web:6c2483c58cd0fbd6f6cbc3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName()
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}