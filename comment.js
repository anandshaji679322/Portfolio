// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAwuzdyKhR9pkRyWQAtWCy-rzhIoOKP44c",
    authDomain: "portfolio-a53a8.firebaseapp.com",
    projectId: "portfolio-a53a8",
    storageBucket: "portfolio-a53a8.appspot.com",
    messagingSenderId: "440500345697",
    appId: "1:440500345697:web:1a2c0e4005ae9f5b81c320"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Access Firestore
  var db = firebase.firestore();
  
  // Function to add a comment
  function addComment(projectName) {
      var commentInput = document.getElementById(projectName + 'CommentInput').value;
      if (commentInput.trim() === '') {
          alert('Please enter a comment.');
          return;
      }
  
      db.collection(projectName).add({
          comment: commentInput
      })
      .then(function(docRef) {
          console.log("Comment written with ID: ", docRef.id);
          displayComments(projectName);
          document.getElementById(projectName + 'CommentInput').value = '';
      })
      .catch(function(error) {
          console.error("Error adding comment: ", error);
      });
  }
  
  // Function to display comments
  function displayComments(projectName) {
      var commentsSection = document.getElementById(projectName + 'CommentsSection');
      commentsSection.innerHTML = '';
  
      db.collection(projectName).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              var commentDiv = document.createElement('div');
              commentDiv.textContent = doc.data().comment;
              commentsSection.appendChild(commentDiv);
          });
      })
      .catch(function(error) {
          console.error("Error getting comments: ", error);
      });
  }
  
  // Call displayComments on page load for each project
  window.onload = function() {
      displayComments('clima');
      displayComments('bmi');
      displayComments('xylophone');
  };
  