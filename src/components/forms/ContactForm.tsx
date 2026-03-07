import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import gsap from "gsap";

interface FormData {
   user_name: string;
   user_email: string;
   user_phone: number;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required("Name is required").label("Name"),
      user_email: yup.string().required("Email is required").email("Invalid email format").label("Email"),
      user_phone: yup.number()
         .transform((originalValue, originalObject) => {
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required("Please enter a message").label("Message"),
   })
   .required();

const ContactForm = () => {
   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const formRef = useRef<HTMLFormElement>(null);
   const fieldsRef = useRef<(HTMLDivElement | null)[]>([]);

   // Staggered Entrance Animation for Form Fields
   useEffect(() => {
      gsap.fromTo(fieldsRef.current, 
         { opacity: 0, y: 30 }, 
         { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
   }, []);

   const sendEmail = () => {
      if (formRef.current) {
         emailjs.sendForm('themegenix', 'template_hdr7ic6', formRef.current, 'QOBCxT0bzNKEs-CwW')
            .then((result) => {
               toast.success('Message sent successfully!', { 
                  position: 'top-center',
                  style: { backgroundColor: '#09B2AB', color: '#fff', fontWeight: 'bold' } 
               });
               reset();
               console.log(result.text);
            }, (error) => {
               toast.error('Failed to send message. Please try again.', { position: 'top-center' });
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
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

   // Function to handle focus state dynamically without external CSS
   const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#09B2AB';
      e.target.style.boxShadow = '0 0 0 3px rgba(9, 178, 171, 0.15)';
   };

   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = 'rgba(0, 57, 65, 0.1)';
      e.target.style.boxShadow = 'none';
   };

   return (
      <form id="contact-form" ref={formRef} onSubmit={handleSubmit(sendEmail)}>
         <div className="row g-4">
            
            {/* Name Field - FIXED REF */}
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

            {/* Email Field - FIXED REF */}
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

            {/* Phone Field - FIXED REF */}
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

            {/* Website Field (Optional) - FIXED REF */}
            <div className="col-12" ref={(el) => { fieldsRef.current[3] = el; }}>
               <label htmlFor="website" className="form-label fw-bold mb-2" style={{ color: '#003941', fontSize: '0.9rem' }}>Practice Website (Optional)</label>
               <input 
                  id="website" 
                  type="text" 
                  placeholder="www.yourdentalpractice.com"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
            </div>

            {/* Message Field - FIXED REF */}
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

            {/* Custom Interactive Button - FIXED REF */}
            <div className="col-12 mt-4" ref={(el) => { fieldsRef.current[5] = el; }}>
               <button 
                  type="submit" 
                  className="w-100 rounded-pill py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 border-0 shadow-sm"
                  style={{ 
                     backgroundColor: '#09B2AB', 
                     color: '#ffffff', 
                     transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = '#003941';
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 57, 65, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = '#09B2AB';
                     e.currentTarget.style.transform = 'translateY(0px)';
                     e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                  }}
               >
                  SEND MESSAGE <i className="fa-solid fa-paper-plane ms-1"></i>
               </button>
            </div>
         </div>
      </form>
   );
}

export default ContactForm;