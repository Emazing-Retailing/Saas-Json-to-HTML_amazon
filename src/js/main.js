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
    const oldPriceHTML = product.price.old_price ? `<span class="old-price"><del>${roundToTwoDecimals(product.price.old_price)}</del></span>` : '';
    const currentPriceHTML = product.price.price ? `<span class="current-price">${roundToTwoDecimals(product.price.price)}</span>` : '';
    let rating = ratingAlign(roundToHalfStep(product.rating) + '');



    return productDiv.innerHTML = `
                <div class="product" style="order: ${product.order}">
                    <div class="product-img">
                        <img src="${product.main_image_url}" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-content-title">${product.name}</div>
<!--                        <div class="product-content-brand"></div>-->
                        <div class="product-content-rating product-content-rating-r${product.rating}">${product.rating} <span class="rating-stars rating-stars-n${rating}"></span><span class="nb-reviews nb-reviews-${product.nb_reviews}">(${product.nb_reviews})</span></div>
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

function roundToHalfStep(num) {
    return Math.round(num * 2) / 2;
}

function roundToTwoDecimals(price) {
    return price.toFixed(2);
}

function ratingAlign(rating){
    return rating.replace('.', '-');
}
