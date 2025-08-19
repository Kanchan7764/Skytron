import React, { useState } from 'react';
import { useCart } from './Cart';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, MapPin, Truck, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    
    // Payment Information
    paymentMethod: 'upi', // Default to UPI
    upiId: '',
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    
    // Order Summary
    shippingMethod: 'standard',
    giftWrap: false,
    giftMessage: '',
    bank: ''
  });

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    return `$${price.toFixed(2)}`;
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price;
      return sum + (price * item.quantity);
    }, 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    if (formData.shippingMethod === 'express') {
      return 15.99;
    } else if (formData.shippingMethod === 'overnight') {
      return 25.99;
    }
    return subtotal > 100 ? 0 : 9.99; // Free shipping over $100
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() + calculateTax();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateStep1 = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
    return required.every(field => formData[field].trim() !== '');
  };

  const validateStep2 = () => {
    if (formData.paymentMethod === 'upi') {
      return formData.upiId.trim() !== '';
    } else if (formData.paymentMethod === 'card') {
      const required = ['cardNumber', 'cardName', 'expiryMonth', 'expiryYear', 'cvv'];
      return required.every(field => formData[field].trim() !== '');
    } else if (formData.paymentMethod === 'cod') {
      return true; // Cash on delivery doesn't need validation
    }
    return false;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateStep1()) {
      alert('Please fill in all required shipping information.');
      return;
    }
    if (currentStep === 2 && !validateStep2()) {
      alert('Please fill in all required payment information.');
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handlePlaceOrder = () => {
    // Simulate order processing
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    navigate('/');
  };

  const renderShippingForm = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Shipping Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Method</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="shippingMethod"
              value="standard"
              checked={formData.shippingMethod === 'standard'}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Standard Shipping (3-5 business days) - {calculateShipping() > 0 ? `$${calculateShipping().toFixed(2)}` : 'Free'}</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="shippingMethod"
              value="express"
              checked={formData.shippingMethod === 'express'}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Express Shipping (1-2 business days) - $15.99</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="shippingMethod"
              value="overnight"
              checked={formData.shippingMethod === 'overnight'}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Overnight Shipping - $25.99</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Payment Method</h3>
      
      {/* Payment Method Selection */}
      <div className="space-y-4">
        {/* UPI Payment */}
        <div className="border border-gray-200 rounded-lg p-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === 'upi'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">UPI</span>
              </div>
              <div>
                <span className="font-medium">UPI (Google Pay, PhonePe, Paytm)</span>
                <p className="text-sm text-gray-600">Pay using any UPI app</p>
              </div>
            </div>
          </label>
          {formData.paymentMethod === 'upi' && (
            <div className="mt-4 ml-11">
              <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID *</label>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                placeholder="example@upi"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Enter your UPI ID (e.g., name@bank)</p>
            </div>
          )}
        </div>

        {/* Credit/Debit Cards */}
        <div className="border border-gray-200 rounded-lg p-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center mr-3">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-medium">Credit/Debit Cards</span>
                <p className="text-sm text-gray-600">Visa, MasterCard, RuPay, American Express</p>
              </div>
            </div>
          </label>
          {formData.paymentMethod === 'card' && (
            <div className="mt-4 ml-11 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card *</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Month *</label>
                  <select
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <option key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Year *</label>
                  <select
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">YYYY</option>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Net Banking */}
        <div className="border border-gray-200 rounded-lg p-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={formData.paymentMethod === 'netbanking'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xs">NB</span>
              </div>
              <div>
                <span className="font-medium">Net Banking</span>
                <p className="text-sm text-gray-600">All major banks supported</p>
              </div>
            </div>
          </label>
          {formData.paymentMethod === 'netbanking' && (
            <div className="mt-4 ml-11">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank *</label>
              <select
                name="bank"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Choose your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
                <option value="yes">Yes Bank</option>
                <option value="pnb">Punjab National Bank</option>
                <option value="canara">Canara Bank</option>
                <option value="union">Union Bank of India</option>
                <option value="bankofbaroda">Bank of Baroda</option>
              </select>
            </div>
          )}
        </div>

        {/* Cash on Delivery */}
        <div className="border border-gray-200 rounded-lg p-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === 'cod'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xs">₹</span>
              </div>
              <div>
                <span className="font-medium">Cash on Delivery</span>
                <p className="text-sm text-gray-600">Pay when you receive your order</p>
              </div>
            </div>
          </label>
          {formData.paymentMethod === 'cod' && (
            <div className="mt-4 ml-11">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Cash on Delivery is available for orders up to ₹10,000. 
                  You'll need to pay the exact amount when the delivery person arrives.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gift Options */}
      <div className="border-t pt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="giftWrap"
            checked={formData.giftWrap}
            onChange={handleInputChange}
            className="mr-2"
          />
          <span className="text-sm text-gray-700">Add gift wrapping (+$5.99)</span>
        </div>

        {formData.giftWrap && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gift Message</label>
            <textarea
              name="giftMessage"
              value={formData.giftMessage}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your gift message here..."
            />
          </div>
        )}
      </div>
    </div>
  );

  const renderOrderReview = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Order Review</h3>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Shipping Address</h4>
        <p className="text-gray-700">
          {formData.firstName} {formData.lastName}<br />
          {formData.address}<br />
          {formData.city}, {formData.state} {formData.zipCode}<br />
          {formData.country}<br />
          Phone: {formData.phone}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
        <p className="text-gray-700">
          {formData.paymentMethod === 'upi' && (
            <>
              <strong>UPI Payment</strong><br />
              UPI ID: {formData.upiId}
            </>
          )}
          {formData.paymentMethod === 'card' && (
            <>
              <strong>Credit/Debit Card</strong><br />
              Card ending in {formData.cardNumber.slice(-4)}<br />
              {formData.cardName}
            </>
          )}
          {formData.paymentMethod === 'netbanking' && (
            <>
              <strong>Net Banking</strong><br />
              Bank: {formData.bank || 'Selected bank'}
            </>
          )}
          {formData.paymentMethod === 'cod' && (
            <>
              <strong>Cash on Delivery</strong><br />
              Pay when you receive your order
            </>
          )}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
        <div className="space-y-2">
          {cart.map(item => {
            const unitPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price;
            const itemTotal = unitPrice * item.quantity;
            return (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 ml-2">x{item.quantity}</span>
                </div>
                <span className="font-semibold">{formatPrice(itemTotal)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
          {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
        </div>
        <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
          {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : '2'}
        </div>
        <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
          3
        </div>
      </div>
    </div>
  );

  const renderOrderSummary = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal ({cart.length} items)</span>
          <span>{formatPrice(calculateSubtotal())}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{calculateShipping() > 0 ? formatPrice(calculateShipping()) : 'Free'}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatPrice(calculateTax())}</span>
        </div>
        {formData.giftWrap && (
          <div className="flex justify-between">
            <span>Gift Wrapping</span>
            <span>$5.99</span>
          </div>
        )}
        <div className="border-t pt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{formatPrice(calculateTotal())}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Please add items to your cart before checkout.</p>
            <button
              onClick={() => navigate('/model')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/carts')}
            className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Cart
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        </div>

        {renderStepIndicator()}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {currentStep === 1 && renderShippingForm()}
              {currentStep === 2 && renderPaymentForm()}
              {currentStep === 3 && renderOrderReview()}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    Previous
                  </button>
                )}
                <div className="ml-auto">
                  {currentStep < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={handlePlaceOrder}
                      className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-semibold"
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {renderOrderSummary()}
          </div>
        </div>
      </div>
    </div>
  );
} 