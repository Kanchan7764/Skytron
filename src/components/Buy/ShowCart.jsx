import { useCart } from "./Cart";

const Cart = () => {
  const { cart } = useCart(); // ✅ Fixed line

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border-b pb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">₹ {item.price} × {item.quantity}</p>
              <p className="text-sm font-medium">Subtotal: ₹ {(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
