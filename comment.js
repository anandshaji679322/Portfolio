// Function to add a comment
function addComment(projectName) {
    var commentInput = document.getElementById(projectName + 'CommentInput').value;
    if (commentInput.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    var comments = JSON.parse(localStorage.getItem(projectName)) || [];
    comments.push(commentInput);
    localStorage.setItem(projectName, JSON.stringify(comments));
    displayComments(projectName);
    document.getElementById(projectName + 'CommentInput').value = '';
}

// Function to display comments
function displayComments(projectName) {
    var commentsSection = document.getElementById(projectName + 'CommentsSection');
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
    displayComments('clima');
    displayComments('bmi');
    displayComments('xylophone');
};
