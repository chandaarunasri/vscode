import React from 'react';


function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">MyShop</div>
      <ul className="flex space-x-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
         <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}
export default Header