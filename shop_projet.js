// Exemple de données de produits
var products = [
  { name: "Produit 1", price: 9.99, image: "produit1.jpg" },
  { name: "Produit 2", price: 19.99, image: "produit2.jpg" },
  { name: "Produit 3", price: 14.99, image: "produit3.jpg" },
];

// Fonction pour afficher les produits
function displayProducts() {
  var productsList = document.getElementById("products-list");
  
  products.forEach(function(product) {
    var productElement = document.createElement("div");
    productElement.classList.add("product");
    
    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    productElement.appendChild(imageElement);
    
    var nameElement = document.createElement("h2");
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);
    
    var priceElement = document.createElement("p");
    priceElement.textContent = "$" + product.price.toFixed(2);
    productElement.appendChild(priceElement);
    
    var addButton = document.createElement("button");
    addButton.textContent = "Ajouter au panier";
    productElement.appendChild(addButton);
    
    productsList.appendChild(productElement);
  });
}

// Appel de la fonction pour afficher les produits lors du chargement de la page
window.onload = displayProducts;
