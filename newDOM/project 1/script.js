document.addEventListener("DOMContentLoaded", () => {
    const updateTotal = () => {
        const cartItems = document.querySelectorAll(".cart-item");
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".quantity").textContent, 10);
            total += price * quantity;
        });

        document.querySelector(".total-price").textContent = `$${total.toFixed(2)}`;
    };

    document.querySelectorAll(".cart-item").forEach(item => {
        const plusBtn = item.querySelector(".plus-btn");
        const minusBtn = item.querySelector(".minus-btn");
        const deleteBtn = item.querySelector(".delete-btn");
        const likeBtn = item.querySelector(".like-btn");
        const quantityElement = item.querySelector(".quantity");

        // Increment quantity
        plusBtn.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityElement.textContent, 10);
            quantityElement.textContent = currentQuantity + 1;
            updateTotal();
        });

        // Decrement quantity
        minusBtn.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityElement.textContent, 10);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });

        // Delete item
        deleteBtn.addEventListener("click", () => {
            item.remove();
            updateTotal();
        });

        // Toggle like
        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("liked");
        });
    });

    // Initial total calculation
    updateTotal();
});
