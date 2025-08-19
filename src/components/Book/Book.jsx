import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, User, Mail, Phone, Plane, CheckCircle, AlertCircle, X, RefreshCw } from "lucide-react";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    droneModel: "",
    useCase: "",
    fromDate: "",
    toDate: "",
    time: "",
    location: "",
    additionalNotes: "",
  });

  const [selectedDrone, setSelectedDrone] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('droneBookingForm');
    const savedSelectedDrone = localStorage.getItem('selectedDrone');
    
    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (error) {
        console.error('Error loading saved form data:', error);
        localStorage.removeItem('droneBookingForm');
      }
    }
    
    if (savedSelectedDrone) {
      try {
        setSelectedDrone(JSON.parse(savedSelectedDrone));
      } catch (error) {
        console.error('Error loading saved drone selection:', error);
        localStorage.removeItem('selectedDrone');
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (!formSubmitted) {
      localStorage.setItem('droneBookingForm', JSON.stringify(formData));
    }
  }, [formData, formSubmitted]);

  // Save selected drone to localStorage
  useEffect(() => {
    if (selectedDrone && !formSubmitted) {
      localStorage.setItem('selectedDrone', JSON.stringify(selectedDrone));
    }
  }, [selectedDrone, formSubmitted]);

  const droneModels = [
    {
      id: "agri-drone",
      name: "Agriculture Drone",
      description: "Perfect for crop monitoring, spraying, and precision agriculture",
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$150/day",
      features: ["Crop Monitoring", "Spraying", "NDVI Mapping", "Precision Agriculture"]
    },
    {
      id: "photo-drone",
      name: "Photography Drone",
      description: "High-quality aerial photography and videography for events and real estate",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$200/day",
      features: ["4K Video", "Aerial Photography", "Event Coverage", "Real Estate"]
    },
    {
      id: "survey-drone",
      name: "Survey Drone",
      description: "Professional surveying and mapping for construction and land development",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$250/day",
      features: ["3D Mapping", "Topographic Survey", "Construction Monitoring", "Land Development"]
    }
  ];

  const useCases = {
    "agri-drone": [
      "Crop Monitoring & Analysis",
      "Pesticide Spraying",
      "NDVI Mapping",
      "Soil Analysis",
      "Irrigation Management"
    ],
    "photo-drone": [
      "Event Photography",
      "Real Estate Photography",
      "Wedding Coverage",
      "Commercial Photography",
      "Aerial Videography"
    ],
    "survey-drone": [
      "Construction Survey",
      "Land Mapping",
      "Topographic Survey",
      "Volume Calculation",
      "Progress Monitoring"
    ]
  };

  // Enhanced validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters except +
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/;
    return phoneRegex.test(cleanPhone);
  };

  const validateDates = (fromDate, toDate) => {
    if (!fromDate || !toDate) return { isValid: false, message: "Both dates are required" };
    
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (start < today) {
      return { isValid: false, message: "Start date cannot be in the past" };
    }
    
    if (end < start) {
      return { isValid: false, message: "End date must be after start date" };
    }
    
    const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (daysDiff > 30) {
      return { isValid: false, message: "Booking duration cannot exceed 30 days" };
    }
    
    return { isValid: true, message: "" };
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation with better messages
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., john@example.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +91 9876543210)";
    }

    if (!selectedDrone) {
      newErrors.droneModel = "Please select a drone model to continue";
    }

    if (!formData.fromDate) {
      newErrors.fromDate = "Start date is required";
    }

    if (!formData.toDate) {
      newErrors.toDate = "End date is required";
    }

    // Enhanced date validation
    if (formData.fromDate && formData.toDate) {
      const dateValidation = validateDates(formData.fromDate, formData.toDate);
      if (!dateValidation.isValid) {
        newErrors.dateRange = dateValidation.message;
      }
    }

    if (!formData.location.trim()) {
      newErrors.location = "Project location is required";
    } else if (formData.location.trim().length < 5) {
      newErrors.location = "Please provide a more detailed location";
    }

    // Additional validation for notes
    if (formData.additionalNotes && formData.additionalNotes.length > 500) {
      newErrors.additionalNotes = "Additional notes cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    
    // Clear date range error when dates change
    if ((name === 'fromDate' || name === 'toDate') && errors.dateRange) {
      setErrors({ ...errors, dateRange: "" });
    }

    // Clear network error when user makes changes
    if (networkError) {
      setNetworkError(false);
    }
  };

  const handleDroneSelect = (drone) => {
    setSelectedDrone(drone);
    setFormData({ ...formData, droneModel: drone.name });
    
    // Clear drone model error
    if (errors.droneModel) {
      setErrors({ ...errors, droneModel: "" });
    }

    // Clear network error
    if (networkError) {
      setNetworkError(false);
    }
  };

  const calculateTotal = () => {
    if (!selectedDrone || !formData.fromDate || !formData.toDate) return 0;
    
    const start = new Date(formData.fromDate);
    const end = new Date(formData.toDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    const pricePerDay = parseInt(selectedDrone.price.replace('$', ''));
    return days * pricePerDay;
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      droneModel: '',
      useCase: '',
      fromDate: '',
      toDate: '',
      time: '',
      location: '',
      additionalNotes: '',
    });
    setSelectedDrone(null);
    setErrors({});
    setNetworkError(false);
    setFormSubmitted(false);
    
    // Clear localStorage
    localStorage.removeItem('droneBookingForm');
    localStorage.removeItem('selectedDrone');
  };

  const retrySubmission = () => {
    setNetworkError(false);
    setErrors({ submit: "" });
    handleSubmit({ preventDefault: () => {} });
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setNetworkError(false);
    setErrors({ submit: "" });

    try {
      // Simulate API call with potential network issues
      const randomError = Math.random();
      if (randomError < 0.1) { // 10% chance of network error
        throw new Error('Network error');
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const total = calculateTotal();
      
      setShowSuccess(true);
      setFormSubmitted(true);
      
      // Clear form after successful submission
      setTimeout(() => {
        clearForm();
        setShowSuccess(false);
      }, 3000);
      
      console.log('Booking submitted successfully:', formData);
      
    } catch (error) {
      console.error('Booking error:', error);
      
      if (error.message === 'Network error') {
        setNetworkError(true);
        setErrors({ submit: "Network connection failed. Please check your internet connection and try again." });
      } else {
        setErrors({ submit: "Failed to submit booking. Please try again or contact support if the problem persists." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = (fieldName) => {
    setErrors({ ...errors, [fieldName]: "" });
  };

  const clearAllErrors = () => {
    setErrors({});
    setNetworkError(false);
  };

  // Error message component with enhanced styling
  const ErrorMessage = ({ message, onClear, type = "field" }) => (
    <div className={`flex items-center text-red-600 text-sm mt-1 ${type === "global" ? "p-3 bg-red-50 border border-red-200 rounded-lg" : ""}`}>
      <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
      <span className="flex-1">{message}</span>
      {onClear && (
        <button
          onClick={onClear}
          className="ml-2 hover:text-red-800 transition-colors"
          aria-label="Clear error"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );

  // Success message component
  const SuccessMessage = () => (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm animate-in slide-in-from-right">
      <div className="flex items-center">
        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">Booking Successful!</h4>
          <p className="text-sm">We'll contact you soon to confirm your booking.</p>
        </div>
      </div>
    </div>
  );

  // Network error component
  const NetworkErrorBanner = () => (
    <div className="fixed top-4 left-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <div>
            <h4 className="font-semibold">Connection Error</h4>
            <p className="text-sm">Unable to submit booking. Please check your internet connection.</p>
          </div>
        </div>
        <button
          onClick={retrySubmission}
          className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <RefreshCw className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <RefreshCw className="w-4 h-4 mr-2" />
          )}
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {showSuccess && <SuccessMessage />}
      {networkError && <NetworkErrorBanner />}
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Drone Service
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional drone services for agriculture, photography, and surveying. 
              Book your preferred drone model and get started today.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Drone Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Plane className="w-6 h-6 mr-2 text-blue-600" />
                Select Drone Model
              </h2>
              
              {errors.droneModel && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <ErrorMessage message={errors.droneModel} type="global" />
                </div>
              )}
              
              <div className="space-y-4">
                {droneModels.map((drone) => (
                  <div
                    key={drone.id}
                    onClick={() => handleDroneSelect(drone)}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-lg ${
                      selectedDrone?.id === drone.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={drone.image}
                        alt={drone.name}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/64x64?text=Drone';
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{drone.name}</h3>
                          <span className="text-lg font-bold text-blue-600">{drone.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{drone.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {drone.features.map((feature, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      {selectedDrone?.id === drone.id && (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Summary */}
              {selectedDrone && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Pricing Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Price per day:</span>
                      <span className="font-semibold">{selectedDrone.price}</span>
                    </div>
                    {formData.fromDate && formData.toDate && (
                      <>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-semibold">
                            {Math.ceil((new Date(formData.toDate) - new Date(formData.fromDate)) / (1000 * 60 * 60 * 24)) + 1} days
                          </span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span className="text-blue-600">${calculateTotal()}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                  Booking Details
                </h2>
                {Object.keys(errors).length > 0 && (
                  <button
                    onClick={clearAllErrors}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Clear all errors
                  </button>
                )}
              </div>

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <ErrorMessage message={errors.submit} type="global" onClear={() => clearError('submit')} />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        data-error={!!errors.name}
                        maxLength={50}
                        required
                      />
                      {errors.name && <ErrorMessage message={errors.name} onClear={() => clearError('name')} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        data-error={!!errors.email}
                        required
                      />
                      {errors.email && <ErrorMessage message={errors.email} onClear={() => clearError('email')} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        data-error={!!errors.phone}
                        required
                      />
                      {errors.phone && <ErrorMessage message={errors.phone} onClear={() => clearError('phone')} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Use Case
                      </label>
                      <select
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select specific use case</option>
                        {selectedDrone && useCases[selectedDrone.id]?.map((useCase, index) => (
                          <option key={index} value={useCase}>{useCase}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Booking Schedule */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Booking Schedule
                  </h3>
                  
                  {errors.dateRange && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <ErrorMessage message={errors.dateRange} type="global" onClear={() => clearError('dateRange')} />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.fromDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        data-error={!!errors.fromDate}
                        required
                      />
                      {errors.fromDate && <ErrorMessage message={errors.fromDate} onClear={() => clearError('fromDate')} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="toDate"
                        value={formData.toDate}
                        onChange={handleChange}
                        min={formData.fromDate || new Date().toISOString().split('T')[0]}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.toDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        data-error={!!errors.toDate}
                        required
                      />
                      {errors.toDate && <ErrorMessage message={errors.toDate} onClear={() => clearError('toDate')} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Location Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter address, village, city, or coordinates"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.location ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      data-error={!!errors.location}
                      required
                    />
                    {errors.location && <ErrorMessage message={errors.location} onClear={() => clearError('location')} />}
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                      <span className="text-gray-500 text-xs ml-2">
                        ({formData.additionalNotes.length}/500)
                      </span>
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows="3"
                      maxLength={500}
                      placeholder="Any specific requirements, special instructions, or project details..."
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.additionalNotes ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.additionalNotes && <ErrorMessage message={errors.additionalNotes} onClear={() => clearError('additionalNotes')} />}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDrone || isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-200 ${
                    selectedDrone && !isSubmitting
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : selectedDrone ? (
                    `Book ${selectedDrone.name} - $${calculateTotal()}`
                  ) : (
                    "Select a drone model first"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
