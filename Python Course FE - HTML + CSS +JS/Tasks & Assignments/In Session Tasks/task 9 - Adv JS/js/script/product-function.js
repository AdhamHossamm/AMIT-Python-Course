function renderProductCard(product, count = null) {
  return `
    <div class="product">
      ${count ? `<h2>Product ${count}</h2>` : ''}
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}">
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>Rating: ${product.rating}</p>
      <button onclick="window.history.back()">Go Back</button>
    </div>
  `;
}
