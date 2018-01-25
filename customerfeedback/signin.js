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
function loginbutton(){
    
    
    location.href = "login.html"
    
}

function signin(){
    
        var reg = new RegExp("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail)\.com$");
    var emailid = document.getElementById("emailid").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
 location.href = "feedback.html"
}
    
    
