



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




    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href="feedback.html"
    // User is signed in.
  } else {
      location.href="login.html"
    // No user is signed in.
  }
});
    

    
    
    
