// Add event listener to the comment form
const commentForm = document.querySelector('.comment-section form');
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const commentInput = commentForm.querySelector('textarea');
  const comment = commentInput.value.trim();
  if (comment !== '') {
    // Perform actions with the comment, such as sending it to a server or displaying it on the page
    console.log('Comment:', comment);
    commentInput.value = '';
  }
});

// Add event listener to the search button
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {
  const searchInput = document.querySelector('.search-input');
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    // Perform actions with the search term, such as filtering content or redirecting to a search results page
    console.log('Search term:', searchTerm);
    searchInput.value = '';
  }
});
