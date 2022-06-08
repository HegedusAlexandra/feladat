const loadEvent = async function () {
  const rootElement = document.getElementById("pizzas");
  const response = await fetch("http://127.0.0.1:3000/Pizza");
  const responseJson = await response.json();
  for (const pizza of responseJson) {
    const pizzaHtml = `<div class="col">
      <div class="card">
        <img src="${pizza.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${pizza.name}</h5>
          <p class="card-text">${pizza.ingredients}</p>
          <input type="number" value="0" min="0" max="20" step="1" />
          <i class="bi bi-cart-plus-fill"></i>
        </div>
      </div>
    </div>`;
    rootElement.innerHTML += pizzaHtml;
  }
  console.log(responseJson);
};

window.addEventListener("load", loadEvent);
