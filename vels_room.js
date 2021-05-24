var firebaseConfig = {
      apiKey: "AIzaSyAxwf6QJUWMyHd1NHkByLh18N3bjbEYERo",
      authDomain: "kwitter-e579d.firebaseapp.com",
      databaseURL: "https://kwitter-e579d-default-rtdb.firebaseio.com/",
      projectId: "kwitter-e579d",
      storageBucket: "kwitter-e579d.appspot.com",
      messagingSenderId: "232685294156",
      appId: "1:232685294156:web:85440d06a0deb0c07e1ae9",
      measurementId: "G-Q29MBQHKDX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "vels_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name", Room_names);
                  row = "<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  
            });
      });
}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="vels_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
