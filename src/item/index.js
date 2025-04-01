document.addEventListener("DOMContentLoaded", () => {
	const numberInput = document.querySelector(".product__quantity-field");
	const decrementBtn = document.querySelector(
		".product__quantity-btn--decrement"
	);
	const incrementBtn = document.querySelector(
		".product__quantity-btn--increment"
	);
	const addToCartBtn = document.querySelector(".product__add-to-cart");

	decrementBtn.addEventListener("click", () => {
		let currentValue = parseInt(numberInput.value);
		const minValue = parseInt(numberInput.min) ?? 1;
		if (currentValue > minValue) {
			numberInput.value = currentValue - 1;
		}
	});

	incrementBtn.addEventListener("click", () => {
		let currentValue = parseInt(numberInput.value);
		numberInput.value = currentValue + 1;
	});

	addToCartBtn.addEventListener("click", () => {
		addToCartBtn.classList.add("animate");
		setTimeout(() => {
			addToCartBtn.classList.remove("animate");
		}, 500);
		numberInput.value = 1;
	});

	const accordionHeaders = document.querySelectorAll(".accordion__header");

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", () => {
			const accordionItem = header.parentElement;
			const isActive = accordionItem.classList.contains(
				"accordion__item--active"
			);

			document.querySelectorAll(".accordion__item").forEach((item) => {
				item.classList.remove("accordion__item--active");
				item.querySelector(".accordion__toggle").textContent = "+";
			});

			if (!isActive) {
				accordionItem.classList.add("accordion__item--active");
				header.querySelector(".accordion__toggle").textContent = "–";
			} else {
				accordionItem.classList.remove("accordion__item--active");
				header.querySelector(".accordion__toggle").textContent = "+";
			}
		});
	});
});
