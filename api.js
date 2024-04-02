document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const sportsLink = document.getElementById('sports-link');
    const techLink = document.getElementById('tech-link');
    const contentSection = document.getElementById('content');

    
    loadPage('home');

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadPage('home');
    });

    sportsLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadPage('sports');
    });

    techLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadPage('tech');
    });

    function loadPage(page) {
        let content = '';
        if (page === 'home') {
            content = '<h2>Top Headlines</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis voluptatibus sit et blanditiis debitis quam saepe praesentium cumque officiis dolorem, obcaecati tenetur laboriosam neque dolor rem! Ad, sapiente quia.</p>';
        } else if (page === 'sports') {
            content = '<h2>Sports News</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis voluptatibus sit et blanditiis debitis quam saepe praesentium cumque officiis dolorem, obcaecati tenetur laboriosam neque dolor rem! Ad, sapiente quia.</p>';
        } else if (page === 'tech') {
            content = '<h2>Election News</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis voluptatibus sit et blanditiis debitis quam saepe praesentium cumque officiis dolorem, obcaecati tenetur laboriosam neque dolor rem! Ad, sapiente quia.</p>';
        }

       
        contentSection.innerHTML = content;
    }
});