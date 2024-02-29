document.addEventListener("DOMContentLoaded", function() {
    const blogListDiv = document.getElementById('blogList');

    // Assuming you have an array of objects with blog titles and descriptions
    const blogs = [
        { title: "People", description: "who are those?", url: "blogs/29-02-2024/29-02-2024.html" }
        // Add more blog objects as needed
    ];

    // Loop through the blogs array and create HTML elements for each blog
    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `<h2>${blog.title}</h2><p>${blog.description}</p>`;
        blogItem.style.top = `${Math.random() * 400}px`; // Random vertical position
        blogItem.style.left = `${Math.random() * 400}px`; // Random horizontal position

        // Add click event listener to open the respective webpage when clicked
        blogItem.addEventListener('click', function() {
            window.location.href = blog.url;
        });

        // Append the blog item to the blog list div
        blogListDiv.appendChild(blogItem);

        if (index === 0) {
            blogItem.classList.add('highlighted');
        }
    });
});
