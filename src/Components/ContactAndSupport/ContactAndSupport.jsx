import React from 'react';

const ContactAndSupport = () => {

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact & Support
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Option 1: Phone */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                {/* <PhoneIcon className="h-8 w-8 text-blue-600" /> */}
                <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Reach us directly for immediate assistance.
              </p>
              <p className="text-blue-600 mt-4 font-medium">+1 (123) 456-7890</p>
            </div>
    
            {/* Contact Option 2: Email */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                {/* <MailIcon className="h-8 w-8 text-green-600" /> */}
                <h3 className="text-lg font-bold text-gray-800">Email Us</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Send us an email, and we’ll get back to you within 24 hours.
              </p>
              <p className="text-green-600 mt-4 font-medium">support@example.com</p>
            </div>
    
            {/* Contact Option 3: Chat */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                {/* <ChatIcon className="h-8 w-8 text-purple-600" /> */}
                <h3 className="text-lg font-bold text-gray-800">Live Chat</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Chat with our support team for quick solutions.
              </p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
                Start Chat
              </button>
            </div>
          </div>
    
          <div className="text-center mt-8">
            <p className="text-gray-600">Need more help? Visit our</p>
            <a
              href="/help-desk"
              className="text-blue-600 font-medium hover:underline"
            >
              Help Desk
            </a>
          </div>
        </div>
      );

};

export default ContactAndSupport;