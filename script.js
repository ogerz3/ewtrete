async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const products = await response.json();

        const container = document.getElementById('products-container');
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="product-info">
                    <h2>${product.title}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <p class="rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Fetch products on page load
fetchProducts();