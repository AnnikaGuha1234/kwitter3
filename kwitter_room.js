const firebaseConfig = {
      apiKey: "AIzaSyC8dOuNzdLMRxCSr80K7P2mEya1uqkNugw",
      authDomain: "kwitter-40f58.firebaseapp.com",
      databaseURL: "https://kwitter-40f58-default-rtdb.firebaseio.com",
      projectId: "kwitter-40f58",
      storageBucket: "kwitter-40f58.appspot.com",
      messagingSenderId: "979357742763",
      appId: "1:979357742763:web:d2fbb9007ccf383c0da9ee",
      measurementId: "G-W537L9C7R4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() 

{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
console.log("room_names-"+Room_names);
row="<div class='room_names'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
document.getElementsById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
      function logout(){
            localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
      }
      function redirectToRoomName(name){
            console.log(name)
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html"
            }