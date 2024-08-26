document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('.filter');
    const blogList = document.getElementById('blog-list');
    const blogItems = blogList.querySelectorAll('li');



    
    

    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const tag = link.getAttribute('data-tag');

            blogItems.forEach(item => {
                if (tag === 'all' || item.getAttribute('data-tag') === tag) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });

            filterLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

