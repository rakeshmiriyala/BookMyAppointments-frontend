const ContactUs = () => {
  return (
    <div className="mx-0 px-4 py-8 bg-[#333333] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Contact Us */}
        <div className="pl-6">
          <h3 className="text-2xl font-semibold mb-2">Contact Us:</h3>
          <div className="text-[#B7B7B7]">
            <p className="mb-2">Email: info@example.com</p>
          </div>
          <div className="mt-4 text-[#B7B7B7]">
            <p className="mb-2">Phone: +1234567890</p>
          </div>
          <div className="mt-4 text-[#B7B7B7]">
            <p className="">Address: 123 Street Name</p>
            <p>City, Country</p>
          </div>
        </div>
        {/* Quick Links */}
        <div className="pl-6">
          <h3 className="text-2xl font-semibold mb-2">Quick Links:</h3>
          <ul className="text-[#B7B7B7]">
            <li>
              <a href="#" className="underline">
                Home
              </a>
            </li>
            <li>
              Services
              <ul className="list-disc ml-4">
                <li>
                  <a href="#" className="underline">
                    Hospital
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Labs
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div className="pl-6">
          <h3 className="text-2xl font-semibold mb-2">Follow Us:</h3>
          <div className="text-[#B7B7B7]">
            <a href="#" className="block underline">
              Facebook
            </a>
            <a href="#" className="block underline">
              Twitter
            </a>
            <a href="#" className="block underline">
              Instagram
            </a>
            <a href="#" className="underline">
              LinkedIn
            </a>
          </div>
        </div>
        {/* Copy Right */}
        <div className="flex items-center justify-center text-[#B7B7B7]">
          <p>&copy; BookMyAppointments</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
