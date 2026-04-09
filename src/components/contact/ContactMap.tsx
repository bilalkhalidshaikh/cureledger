const ContactMap = () => {
   return (
      <div className="td-contact-map-area position-relative" style={{ height: '500px', backgroundColor: '#FAFAFA' }}>
         
         {/* Gradient Overlay for blending */}
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to bottom, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
         
         {/* Embedded Google Map (Set to Laredo, TX) */}
         <iframe 
            src="https://maps.google.com/maps?q=2106%20MALLORCA%20DR.%20LAREDO%20TX%2078046&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CureLedger Laredo Office Map"
         ></iframe>

      </div>
   )
}

export default ContactMap;