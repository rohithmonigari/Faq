 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-GrUuFXhJ9a85r_lRocpFuyGcGLQ3yX8",
    authDomain: "charge-bc3ca.firebaseapp.com",
    projectId: "charge-bc3ca",
    storageBucket: "charge-bc3ca.appspot.com",
    messagingSenderId: "74226437643",
    appId: "1:74226437643:web:1b96170c8d0fed27be810e",
    measurementId: "G-MWJ2WEFP2W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// reference message collections

let messagesRef =firebase.database().ref('messages');

/* Listen For Form*/

document.getElementById('contactform').addEventListener('submit',submitForm)

//submit form

function submitForm(e){
    e.preventDefault();
    
    //get values
    var name=getInputVal('name');
    var email=getInputVal('email');
    var subject=getInputVal('subject');
    var message=getInputVal('message');  
    saveMessage(name,email,subject,message);
}


//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}


//savemessages to firebase
 function saveMessage(name,email,subject,message){
        var newMessageRef =messagesRef.push();
        newMessageRef.set({
            name:name,
            email:email,
            subject:subject,
            message:message
        });

 }