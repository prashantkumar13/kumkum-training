import React from 'react';

const Location = () => {
  return (
    <div className="mt-10 lg:px-20 h-80 w-full rounded-lg mb-20 overflow-hidden" id="mentor">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.582153030305!2d84.6655062!3d25.5522919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f68edc1774f%3A0xceac85e5415bcad2!2sKumKum%20technical%20institute%20ara%20Training%20Centre!5e0!3m2!1sen!2sin!4v1723534653411!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "5px solid rgba(101, 86, 255, 0.65)", borderRadius: "20px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
