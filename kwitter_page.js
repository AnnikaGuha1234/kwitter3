//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
 { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("firebase_messege_id");
console.log("messege_data");
name=message_data['name'];
messege=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='messege_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id=>"+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+Like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function updateLike(message_id){
      console.log("clicked on the like button -"+message_id);
      button_id=message_id;
      likes=document.getElementById("button_id").value;
      update_likes=Number(likes) +1;
      console.log("updated_Likes");

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}