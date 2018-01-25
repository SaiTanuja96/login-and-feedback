  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEBWfizfVLFQJaateCgSY91XXCoKMaKSo",
    authDomain: "feedbackform-2b5ad.firebaseapp.com",
    databaseURL: "https://feedbackform-2b5ad.firebaseio.com",
    projectId: "feedbackform-2b5ad",
    storageBucket: "feedbackform-2b5ad.appspot.com",
    messagingSenderId: "528302404387"
  };
  firebase.initializeApp(config);

function login(){
    
    var emailid = document.getElementById("emailid").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(emailid, password).then(function () {
                   var user = firebase.auth().currentUser;
        if(user){
            location.href="feedback.html"
        }
        else{
            window.alert("login please!")
        }
    
    });
}
                                                                 
     function signup(){
       location.href="signin.html" 
        
    }                                                            