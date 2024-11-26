// script for search bar functionality.
document.addEventListener('DOMContentLoaded', () => {
    const websiteContent = [
        {title: "Home", url: "./index.html"},
        {title: "About"},
        {title: "Variants", url: "./variants.html"},
        {title: "Appearances", url: "./Appearances.html"},
        {title: "Contact", url: "index.html#contact"},
        {title: "Comics", url: "./comics.html"},
        {title: "Movies", url: "./movies.html"},
        {title: "Videos", url: "./videos.html"},
        {title: "Privacy Policy", url: "./PrivacyPolicy.html"},
        {title: "Terms and conditions", url: "./Terms&conditions.html"},
    ];
    
    // Elements
    const searchForm = document.getElementById('searchForm');
    const searchBar = document.getElementById('search-bar');
    
    // Handle form submission
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form reload
        const query = searchBar.value.trim().toLowerCase();
    
        if (query) {
            const matches = websiteContent.filter(item =>
            item.title.toString().toLowerCase().includes(query) ||
            item.text?.toString().toLowerCase().includes(query)
            );
    
            if (matches.length > 0) {
                matches.forEach(item => {
                    // const newUrl = `${window.location.origin}${window.location.pathname}?search=${encodeURIComponent(query)}`;
                    // history.pushState(null, '', newUrl);
                    if(item.title === 'About'){
                        scrollToSection(event, 'about');
                    }
                    else{
                        window.location.href = item.url;
                    }
                    // performFunction(item.url);
                    // alert("Page found");
                });
            } else {
                // searchResults.innerHTML = '<p>No results found.</p>';
                alert("Page not found!");
            }
        }
    });
});
