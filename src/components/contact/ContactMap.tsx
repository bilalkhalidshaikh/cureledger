const ContactMap = () => {
   return (
      <div className="td-contact-map-area position-relative" style={{ height: '500px', backgroundColor: '#FAFAFA' }}>
         
         {/* Gradient Overlay for blending */}
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to bottom, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
         
         {/* Embedded Google Map (Set to Austin, TX) */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.642511477544!2d-97.7441584245642!3d30.283181874803928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b04fcf115%3A0xcb1b59f7df8cfb29!2s2025%20Guadalupe%20St%20%23260%2C%20Austin%2C%20TX%2078705!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CureLedger Austin Office Map"
         ></iframe>

      </div>
   )
}

export default ContactMap;