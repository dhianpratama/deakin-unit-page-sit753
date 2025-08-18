// JavaScript function to handle search
function performSearch() {
  const query = document.getElementById('searchInput').value;
  if (query) {
    alert(`You searched for: ${query}`);
  } else {
    alert('Please enter a search term.');
  }
}