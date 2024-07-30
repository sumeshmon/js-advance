document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');
    const loadMoreButton = document.getElementById('loadMore');
    let page = 1; // Track the current page

    // Function to load items from the API
    function loadItems() {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'item';
                    itemElement.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
                    itemsContainer.appendChild(itemElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Load the first set of items on initial page load
    loadItems();

    // Load more items when the button is clicked
    loadMoreButton.addEventListener('click', () => {
        page++;
        loadItems();
    });
});
