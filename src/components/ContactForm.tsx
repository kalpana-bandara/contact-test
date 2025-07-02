import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: ''
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = 'Name must be at least 2 characters long';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear error when user starts typing
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: undefined
//       }));
//     }
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log('Form submitted:', formData);
//       setIsSubmitted(true);
      
//       // Reset form after successful submission
//       setTimeout(() => {
//         setFormData({ name: '', email: '' });
//         setIsSubmitted(false);
//       }, 3000);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };



  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p className="form-description">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <form noValidate data-netlify="true">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
         
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
             
              placeholder="Enter your email address"
            
            />
           
          </div>

          <button 
            type="submit" 
            className="submit-button"
            
          >

          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
