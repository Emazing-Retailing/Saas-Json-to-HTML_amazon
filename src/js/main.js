const productsContainer = document.getElementById('products');

fetch('products.json')
    .then(response => response.json())
    .then(jsonData => {

        displayJsonInfo(jsonData);

        jsonData.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-wrap');

            productDiv.innerHTML = displayProduct(productDiv, product);

            productsContainer.appendChild(productDiv);
        });
    }).catch(error => console.error('Error fetching JSON:', error));

function displayProduct(productDiv, product) {
    console.log(product);
    const oldPriceHTML = product.price.old_price ? `<span class="old-price"><del>${product.price.old_price}</del></span>` : '';
    const currentPriceHTML = product.price.price ? `<span class="current-price">${product.price.price}</span>` : '';

    return productDiv.innerHTML = `
                <div class="product" style="order: ${product.order}">
                    <div class="product-img">
                        <img src="${product.main_image_url}" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-content-title">${product.name}</div>
<!--                        <div class="product-content-brand"></div>-->
                        <div class="product-content-rating">${product.rating} <span class="rating rating-${product.rating}"></span><span class="nb-reviews">(${product.nb_reviews})</span></div>
                        <div class="product-content-price">${currentPriceHTML} ${oldPriceHTML}</div>
                    </div>
                </div>
            `;
}

function displayJsonInfo(jsonData) {
    let countElement = document.getElementById('current-qty-products');
    if (countElement) {
        countElement.textContent = jsonData.length;
    }

    countElement = document.getElementById('all-qty-products');
    if (countElement) {
        countElement.textContent = jsonData.length;
    }
}

