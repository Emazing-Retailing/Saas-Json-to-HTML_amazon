const productsContainer = document.getElementById('products');

// Parse json data
///////////////////////////////////////////////////////////////////////////////
fetch('products.json')
    .then(response => response.json())
    .then(jsonData => {

        displayCountProductsInfo(jsonData);
        jsonData.forEach(product => {
            if (product.price.price) {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-wrap');

                productDiv.innerHTML = displayProduct(productDiv, product);
                productsContainer.appendChild(productDiv);
            }

        });
    }).catch(error => console.error('Error fetching JSON:', error));


// Display product
///////////////////////////////////////////////////////////////////////////////
function displayProduct(productDiv, product) {

    return productDiv.innerHTML = `
                <div class="product">
                    <div class="product-img">
                        <img src="${product.main_image_url}" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-content-title">${product.name}</div>
                        <div class="product-content-brand">Brand</div>
                        <div class="product-content-rating product-content-rating-${ratingAlign(roundToHalfStep(product.rating) + '')}">${product.rating} <span class="rating-stars rating-stars-${ratingAlign(roundToHalfStep(product.rating) + '')}"></span><span class="nb-reviews nb-reviews-${product.nb_reviews}">(${product.nb_reviews})</span></div>
                        <div class="product-content-price">${getCurrentPriceHtml(product)} ${getOldPriceHtml(product)}</div>
                    </div>
                </div>
            `;
}

// Helpers
///////////////////////////////////////////////////////////////////////////////
function displayCountProductsInfo(jsonData) {
    let countElement = document.getElementById('current-qty-products');
    if (countElement) {
        countElement.textContent = jsonData.length;
    }

    countElement = document.getElementById('all-qty-products');
    if (countElement) {
        countElement.textContent = jsonData.length;
    }
}

function roundToHalfStep(num) {
    return Math.round(num * 2) / 2;
}

function roundToTwoDecimals(price) {
    return price.toFixed(2);
}

function ratingAlign(rating) {
    return rating.replace('.', '');
}

function getOldPriceHtml(product) {
    return `<span class="old-price"><del><span class="currency">$</span>100.99</del></span>`;
}

function getCurrentPriceHtml(product) {
    return product.price.price ? `<span class="current-price"><sup><span class="currency">$</span></sup>${roundToTwoDecimals(product.price.price)}</span>` : ''
}