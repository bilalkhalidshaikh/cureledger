import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import gsap from "gsap";

// 1. Explicitly define your form data shape
interface FormData {
   user_name: string;
   user_email: string;
   user_phone: string;
   website?: string;
   message: string;
}

// 2. Define the validation schema
const schema = yup.object().shape({
   user_name: yup.string().required("Name is required").label("Name"),
   user_email: yup.string().required("Email is required").email("Invalid email format").label("Email"),
   user_phone: yup.string().required('Phone number is required').label("Phone"),
   website: yup.string(), // Default is optional
   message: yup.string().required("Please enter a message").label("Message"),
});

const ContactForm = () => {
   // 3. Cast the resolver as 'any' to bypass the TypeScript optionality mismatch
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ 
      resolver: yupResolver(schema) as any 
   });
   
   const formRef = useRef<HTMLFormElement>(null);
   const fieldsRef = useRef<(HTMLDivElement | null)[]>([]);
   const successRef = useRef<HTMLDivElement>(null);

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);

   // Staggered Entrance Animation for Form Fields
   useEffect(() => {
      if (!isSuccess) {
         gsap.fromTo(fieldsRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
         );
      } else if (successRef.current) {
         gsap.fromTo(successRef.current,
            { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }
         );
      }
   }, [isSuccess]);

   const sendEmail = () => {
      if (formRef.current) {
         setIsSubmitting(true);
         
         // NOTE: Replace these 3 strings with your actual EmailJS IDs once you set up your Zoho email
         const SERVICE_ID = 'YOUR_SERVICE_ID'; 
         const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
         const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
               console.log("Success:", result.text);
               setIsSuccess(true); // Triggers the Thank You screen
            }, (error) => {
               console.log("Error:", error.text);
               toast.error('Failed to send message. Please try again.', { position: 'top-center' });
               setIsSubmitting(false);
            });
      }
   };

   // Shared modern input styling
   const inputStyle = {
      backgroundColor: '#F8FAFA',
      border: '1px solid rgba(0, 57, 65, 0.1)',
      color: '#002C34',
      borderRadius: '8px',
      padding: '15px 20px',
      width: '100%',
      outline: 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
   };

   const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#09B2AB';
      e.target.style.boxShadow = '0 0 0 3px rgba(9, 178, 171, 0.15)';
   };

   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = 'rgba(0, 57, 65, 0.1)';
      e.target.style.boxShadow = 'none';
   };

   // Success Screen (Replaces the form instantly)
   if (isSuccess) {
      return (
         <div ref={successRef} className="text-center py-5 px-3">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-sm" style={{ width: '80px', height: '80px', backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB' }}>
               <i className="fa-solid fa-check fs-1"></i>
            </div>
            <h2 className="fw-bold mb-3" style={{ color: '#003941' }}>Message Sent!</h2>
            <p className="fs-5 mb-0" style={{ color: '#002C34', opacity: 0.8, lineHeight: '1.6' }}>
               Thank you for reaching out. <br/> One of our billing experts will contact you shortly.
            </p>
         </div>
      );
   }

   return (
      <form id="contact-form" ref={formRef} onSubmit={handleSubmit(sendEmail)}>
         <div className="row g-4">
            
            <div className="col-12" ref={(el) => { fieldsRef.current[0] = el; }}>
               <label htmlFor="name" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>Full Name *</label>
               <input 
                  {...register("user_name")} 
                  id="name" 
                  type="text" 
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
               {errors.user_name && <p className="text-danger small mt-1 fw-bold"><i className="fa-solid fa-circle-exclamation me-1"></i>{errors.user_name.message}</p>}
            </div>

            <div className="col-md-6" ref={(el) => { fieldsRef.current[1] = el; }}>
               <label htmlFor="email" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>Email Address *</label>
               <input 
                  {...register("user_email")} 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
               {errors.user_email && <p className="text-danger small mt-1 fw-bold"><i className="fa-solid fa-circle-exclamation me-1"></i>{errors.user_email.message}</p>}
            </div>

            <div className="col-md-6" ref={(el) => { fieldsRef.current[2] = el; }}>
               <label htmlFor="phone" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>Phone Number *</label>
               <input 
                  {...register("user_phone")} 
                  id="phone" 
                  type="text" 
                  placeholder="(555) 123-4567"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
               {errors.user_phone && <p className="text-danger small mt-1 fw-bold"><i className="fa-solid fa-circle-exclamation me-1"></i>{errors.user_phone.message}</p>}
            </div>

            <div className="col-12" ref={(el) => { fieldsRef.current[3] = el; }}>
               <label htmlFor="website" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>Practice Website (Optional)</label>
               <input 
                  {...register("website")} 
                  id="website" 
                  type="text" 
                  placeholder="www.yourdentalpractice.com"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
            </div>

            <div className="col-12" ref={(el) => { fieldsRef.current[4] = el; }}>
               <label htmlFor="message" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>How can we help you? *</label>
               <textarea 
                  {...register("message")} 
                  id="message" 
                  rows={5}
                  placeholder="Tell us about your practice and your billing needs..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               ></textarea>
               {errors.message && <p className="text-danger small mt-1 fw-bold"><i className="fa-solid fa-circle-exclamation me-1"></i>{errors.message.message}</p>}
            </div>

            <div className="col-12 mt-4" ref={(el) => { fieldsRef.current[5] = el; }}>
               <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-100 rounded-pill py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 border-0 shadow-sm"
                  style={{ 
                     backgroundColor: isSubmitting ? '#A3B1B2' : '#09B2AB', 
                     color: '#ffffff', 
                     cursor: isSubmitting ? 'not-allowed' : 'pointer',
                     transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                  }}
                  onMouseEnter={(e) => {
                     if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#003941';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 57, 65, 0.2)';
                     }
                  }}
                  onMouseLeave={(e) => {
                     if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#09B2AB';
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                     }
                  }}
               >
                  {isSubmitting ? (
                     <>SENDING... <i className="fa-solid fa-circle-notch fa-spin ms-1"></i></>
                  ) : (
                     <>SEND MESSAGE <i className="fa-solid fa-paper-plane ms-1"></i></>
                  )}
               </button>
            </div>
         </div>
      </form>
   );
}

export default ContactForm;