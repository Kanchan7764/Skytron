import React from "react";
import { useCart } from "./Cart";
import { Trash2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart, getCartCount } = useCart()
  const navigate = useNavigate();

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    return `$${price.toFixed(2)}`;
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex flex-col items-center justify-center">
        {/* Hero/Empty State */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white rounded-full shadow-lg p-6 mb-4">
            <ShoppingCart className="w-16 h-16 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <a 
            href="/model" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <span className="ml-2 text-base text-gray-500">({getCartCount()} items)</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">Your Items</span>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-white hover:bg-red-600 border border-red-200 px-4 py-2 rounded-lg text-sm flex items-center gap-1 font-semibold transition shadow-sm"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>

          <div className="p-6 divide-y divide-gray-100">
            {cart.map((item) => {
              const unitPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price;
              const itemTotal = unitPrice * item.quantity;
              
              return (
                <div key={item.id} className="flex items-center gap-4 py-6 group hover:bg-gray-50 transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border-2 border-blue-100 shadow group-hover:shadow-lg group-hover:scale-105 transition"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.color && `Color: ${item.color}`}
                      {item.size && ` • Size: ${item.size}`}
                    </p>
                    <div className="mt-1">
                      <p className="text-sm text-gray-500">
                        {formatPrice(unitPrice)} each
                      </p>
                      <p className="text-lg font-semibold text-blue-600">
                        {formatPrice(itemTotal)} total
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-lg font-bold transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-200 bg-white text-base font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-lg font-bold transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-white hover:bg-red-600 p-2 rounded-lg transition shadow-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Total: {formatPrice(getTotal())}
                </p>
                <p className="text-sm text-gray-600">
                  {getCartCount()} item{getCartCount() !== 1 ? 's' : ''} in cart
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
