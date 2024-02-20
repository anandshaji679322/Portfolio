// Function to add a comment
function addComment(projectName) {
    var commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    var comments = JSON.parse(localStorage.getItem(projectName)) || [];
    comments.push(commentInput);
    localStorage.setItem(projectName, JSON.stringify(comments));
    displayComments(projectName);
    document.getElementById('commentInput').value = '';
}

// Function to display comments
function displayComments(projectName) {
    var commentsSection = document.getElementById('commentsSection');
    var comments = JSON.parse(localStorage.getItem(projectName)) || [];
    commentsSection.innerHTML = '';
    comments.forEach(function(comment) {
        var commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        commentsSection.appendChild(commentDiv);
    });
}

// Call displayComments on page load for each project
window.onload = function() {
    displayComments('clima'); // Change the project name as needed
    // Call displayComments for other projects if needed
};
