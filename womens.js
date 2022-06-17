let productData = [
  {
    brand: "Nordstrom",
    name: "Everyday Open Front Cardigan",
    price: 6247.55,
    size: "X,XX,XXL",
    productID: "women1",
    catagory: "Casual",
    rating: "Rating : 4",
    img: "https://n.nordstrommedia.com/id/sr3/34aff824-70cf-457f-952b-8c2a21f94bf9.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Caslon®",
    name: "Open Front Cardigan Sweater",
    price: 3853.56,
    size: "X,M,L,XX,XXL",
    productID: "women2",
    rating: "Rating : 4",
    catagory: "festive",
    img: "https://n.nordstrommedia.com/id/sr3/c8066fe3-7335-43f2-b36d-33360196ab5c.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Fitted V-Neck Cardigan",
    price: 4918.02,
    rating: "Rating : 4",
    size: "M,L,XX,XXS",
    productID: "women3",
    catagory: "party",
    img: "https://n.nordstrommedia.com/id/sr3/a82e939a-6c2d-4786-94d9-1b907a739ef1.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Polo Ralph Lauren",
    name: "Linen Sweater Tank",
    price: 8168.91,
    size: "X,M,L,XXS,XXL",
    rating: "Rating : 4",
    productID: "women4",
    catagory: "formal",
    img: "https://n.nordstrommedia.com/id/sr3/771a2b0e-2f54-4b35-9296-55a50376e9fe.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "La Blanca",
    name: "Slouchy Hooded Sweater Cover-Up Tunic",
    price: 5751.58,
    size: "X,M,L",
    rating: "Rating : 4",
    productID: "women5",
    catagory: "workout",
    img: "https://n.nordstrommedia.com/id/sr3/9a448873-09f3-482f-8cd2-37e30a0de6c7.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Side Slit Cardigan (Regular & Petite)",
    price: 5751.51,
    size: "XXS,M,L",
    rating: "Rating : 4",
    productID: "women6",
    catagory: "travel",
    img: "https://n.nordstrommedia.com/id/sr3/404f470f-1824-45aa-a482-10dc7f40e85a.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Open Front Pocket Cardigan (Regular & Petite)",
    price: 6568.71,
    size: "XXL,M,L",
    rating: "Rating : 4",
    productID: "women7",
    catagory: "sports",
    img: "https://n.nordstrommedia.com/id/sr3/998566fc-d5e3-458a-866b-09395fc7f91f.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Sweaty Betty",
    name: "Cora Organic Cotton Cardigan",
    price: 7335.55,
    size: "X,M,L,XX",
    productID: "women8",
    rating: "Rating : 4",
    catagory: "Casual",
    img: "https://n.nordstrommedia.com/id/sr3/4668bc26-8f6b-4686-869c-67bacf32bd44.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Nordstrom",
    name: "Crewneck Pima Cotton Blend Cardigan",
    price: 4046.45,
    size: "XS,M,L,XX",
    rating: "Rating : 4",
    productID: "women9",
    catagory: "festive",
    img: "https://n.nordstrommedia.com/id/sr3/a56b5ccc-6830-405b-afb9-3cb23efbaceb.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Cross Neck Halter Sweater Tank",
    price: 4084.45,
    rating: "Rating : 4",
    size: "X,L,XX",
    productID: "women10",
    catagory: "party",
    img: "https://n.nordstrommedia.com/id/sr3/0132cf01-a7d3-4fda-9dc3-5d0c2fcd2bd8.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Barefoot Dreams®",
    name: "CozyChic Lite® Circle Cardigan",
    price: 9669.66,
    size: "M,L,XXS",
    rating: "Rating : 4",
    productID: "women11",
    catagory: "formal",
    img: "https://n.nordstrommedia.com/id/sr3/5024c75d-fd56-42b0-a4bc-afdb6a953759.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "NIC+ZOE",
    name: "Convertible Cardigan",
    price: 8168.98,
    size: "S,M,L,XXl",
    rating: "Rating : 4",
    productID: "women12",
    catagory: "workout",
    img: "https://n.nordstrommedia.com/id/sr3/2e8d5d15-5edd-4577-aadc-4f2ad483d263.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "BP.",
    name: "Collegiate Sweater Vest",
    price: 2600.71,
    rating: "Rating : 4",
    size: "S,X,L,XXl",
    productID: "women13",
    catagory: "travel",
    img: "https://n.nordstrommedia.com/id/sr3/80910ca5-b113-4df7-adaf-464894ab25f7.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Relaxed Fit Cardigan",
    price: 3446.91,
    rating: "Rating : 4",
    size: "S,M,X,XXL",
    productID: "women14",
    catagory: "sports",
    img: "https://n.nordstrommedia.com/id/sr3/236b127c-5530-4841-a79d-c3911a246db4.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Barefoot Dreams®",
    name: "CozyChic Lite® Long Cardigan",
    price: 10000.74,
    rating: "Rating : 4",
    size: "S,M,X,XXL",
    productID: "women15",
    catagory: "Casual",
    img: "https://n.nordstrommedia.com/id/sr3/a82feccc-47f2-4bd2-a315-cdd2423fab2a.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Eliza J",
    name: "Bolero Cardigan",
    price: 2834.11,
    rating: "Rating : 4",
    size: "S,M,L,XXL",
    productID: "women16",
    catagory: "festive",
    img: "https://n.nordstrommedia.com/id/sr3/d2a95ab6-e8ae-4bf9-9c84-07629233af61.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Treasure & Bond",
    name: "Women's Off the Shoulder Linen Blend Sweater",
    price: 4918.02,
    size: "S,XX",
    rating: "Rating : 4",
    productID: "women17",
    catagory: "party",
    img: "https://n.nordstrommedia.com/id/sr3/d67fd5be-c58a-4ce2-ab1f-fc7819924523.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "NIC+ZOE",
    name: "Open Front Linen Blend Long Cardigan (Regular & Petite)",
    price: 10699.17,
    rating: "Rating : 4",
    size: "S,M,XX,XXL",
    productID: "women18",
    catagory: "formal",
    img: "https://n.nordstrommedia.com/id/sr3/7a3a5a55-b8a7-4151-b2fb-66c8eaccb26c.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Sleeveless Peplum Sweater",
    price: 5911.33,
    rating: "Rating : 4",
    size: "M,XXL,XX",
    productID: "women19",
    catagory: "workout",
    img: "https://n.nordstrommedia.com/id/sr3/142f8270-303a-467a-9de8-003d64a0f19e.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Madewell",
    name: "Bobble Cardigan Sweater (Regular & Plus Size)",
    price: 9836.91,
    rating: "Rating : 4",
    size: "M,X,L,XXL",
    productID: "women20",
    catagory: "travel",
    img: "https://n.nordstrommedia.com/id/sr3/3622acb2-b369-4580-bdd2-27286f2c3aa3.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "NIC+ZOE",
    name: "4-Way Convertible Cardigan (Regular & Petite)",
    price: 4567.88,
    rating: "Rating : 4",
    size: "M,L,XXL",
    productID: "women21",
    catagory: "sport",
    img: "https://n.nordstrommedia.com/id/sr3/2f75009e-4c41-4a06-9017-a754757a3377.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "GaNIC+ZOE",
    name: "4-Way Convertible Cardiganp",
    rating: "Rating : 4",
    price: 8168.98,
    size: "S,XX",
    productID: "women22",
    catagory: "Casual",
    img: "https://n.nordstrommedia.com/id/sr3/41b42827-cc34-480c-9fee-f7acd6a4220a.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Eliza J",
    name: "Bolero Cardigan",
    price: 2834.11,
    size: "XXL",
    rating: "Rating : 4",
    productID: "women23",
    catagory: "festive",
    img: "https://n.nordstrommedia.com/id/sr3/43fddc8f-ee6f-413b-bb68-5eed5bfd2453.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "Halogen®",
    name: "Sleeveless Peplum Sweater",
    price: 4918.67,
    size: "S,X,L",
    productID: "women24",
    rating: "Rating : 4",
    catagory: "party",
    img: "https://n.nordstrommedia.com/id/sr3/9f9af019-b4c9-405b-9699-df7d8144bd79.jpeg?h=365&w=240&dpr=2",
  },
  {
    brand: "NIC+ZOE",
    name: "Convertible Cardigan",
    price: 8168.91,
    size: "S,XXL,XX",
    productID: "women25",
    rating: "Rating : 4",
    catagory: "formal",
    img: "https://n.nordstrommedia.com/id/sr3/78de21aa-058d-48e1-b685-7fb60305d23e.jpeg?h=365&w=240&dpr=2",
  },
];

let mainDiv = document.querySelector("#parent");
let cartLs = JSON.parse(localStorage.getItem("cart-page")) || [];

displayData(productData);

function displayData(productData) {
   mainDiv.innerHTML = "";
  productData.forEach(function (el) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", el.img);
    let pTag = document.createElement("h3");
    pTag.innerText = el.brand;
    let hTag = document.createElement("p");
    hTag.innerText = el.name;
    let pTag2 = document.createElement("h3");
    pTag2.innerText = el.price;
    let hTag2 = document.createElement("h3");
    hTag2.innerHTML =
      "<span class='fa fa-star checked'></span> <span class='fa fa-star checked'></span><span class='fa fa-star checked'></span> <span class='fa fa-star checked'></span><span class='fa fa-star'></span> <span>(5)</span>";
    let addToCart = document.createElement("button");
    addToCart.innerText = "Add to cart";
    addToCart.addEventListener("click", function () {
      if (addToCartFun(el.productID) === true) {
        cartLs.push(el);
        localStorage.setItem("cart-page", JSON.stringify(cartLs));
        alert("Product successfully added to cart");
      } else {
        alert("Product Already exists");
      }
    });
    card.append(image, pTag, hTag, pTag2, hTag2, addToCart);
    mainDiv.append(card);
  });
}
function addToCartFun(id) {
  for (let i = 0; i < cartLs.length; i++) {
    if (cartLs[i].productID == id) {
      return false;
    }
  }
  return true;
}

function sortFun() {
  let selected = document.querySelector("#sorting").value;
  if (selected == "lowToHigh") {
    productData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayData(productData);
  }
  if (selected == "highToLow") {
    productData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayData(productData);
  }
  if (selected == "All") {
    productData.sort(function (a, b) {
      if (a.brand > b.brand) return 1;
      if (a.brand < b.brand) return -1;
      return 0;
    });
    displayData(productData);
  }
}
