var updateBtns = document.getElementsByClassName('update-cart');
var increaseButtons = document.getElementsByClassName('increase-item');
var decreaseButtons = document.getElementsByClassName('decrease-item');

for (var i = 0; i < increaseButtons.length; i++) {
  increaseButtons[i].addEventListener('click', function() {
    var productId = this.dataset.product;
    var action = 'add';
    updateUserOrder(productId, action);
  });
}

for (var i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener('click', function() {
    var productId = this.dataset.product;
    var action = 'remove';
    updateUserOrder(productId, action);
  });
}

for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.productId;
        var action = this.dataset.action;
        console.log('productId:', productId, 'Action:', action);

        console.log('USER:', user);
        if (user == 'AnanymousUser') {
            console.log('User is not authenticated');
        } else {
            updateUserOrder(productId, action);
        }
    });
}

// console.log(csrftoken)
function updateUserOrder(productId, action) {
    var url = "/update_item/";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ productId: productId, action: action }),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Data:", data);
            location.reload();
        });
}

