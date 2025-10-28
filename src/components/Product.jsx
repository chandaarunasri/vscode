import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 50000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrqZWQWVtYmrF1Brf92RcZRXvtjRgZS4TAA&s",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 199900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5iAUHzgZ8PW4rFhHzlkfkMy6PxPqaG8URA&s",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 1249,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKafx7xH08ZusHQHtSAT28ZbYnkGDMcOK9lw&s",
  },
  {
    id: 4,
    name: "Head sets",
    price: 1990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBdCu0UYVHHAtvlmbLOMiHa8ZehHltfFeMQ&s",
  },
  {
    id: 5,
    name: "Iqoo Z6",
    price: 15000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleBh1V0i0DpeOgk6rj13MqZ9ojmuHNhRNCw&s",
  },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-100 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-15">
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
