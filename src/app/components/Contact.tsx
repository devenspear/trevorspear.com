"use client";
import { useState } from "react";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  
  const emailUser = "trevor";
  const emailDomain = "trevorspear.com";
  const email = `${emailUser}@${emailDomain}`;

  const handleEmailClick = () => {
    setShowEmail(true);
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    setShowPhone(true);
    window.location.href = "tel:9198689574";
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-center text-gray-700 mb-8 space-y-4">
          <div>Address: 518 S West St. Raleigh NC 27601</div>
          <div>
            Phone: 
            <button 
              onClick={handlePhoneClick}
              className="ml-2 text-blue-700 underline hover:text-blue-900"
            >
              {showPhone ? "919-868-9574" : "Click to reveal"}
            </button>
          </div>
          <div>
            Email: 
            <button 
              onClick={handleEmailClick}
              className="ml-2 text-blue-700 underline hover:text-blue-900"
            >
              {showEmail ? email : "Click to reveal"}
            </button>
          </div>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-gray-500 text-sm space-y-2">
        <div>
          &copy; 2025 Trevor Spear | All Rights Reserved.
          <span className="inline-block ml-2 align-middle">
            <a href="https://www.linkedin.com/in/trevorspear/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline align-middle"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </span>
        </div>
        <div>
          If you're interested in Nanue's Farm, <a href="https://nanuesfarm.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">click here</a>
        </div>
      </footer>
    </section>
  );
} 