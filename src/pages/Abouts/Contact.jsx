import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-semibold text-center mb-4"
            style={{ wordSpacing: "8px" }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you! Fill out the
            form below and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-md px-6 py-12 grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Our Office
              </h2>
              <p className="text-gray-600">
                Rajshahi, Bangladesh <br />
                Open: Sat - Thu (9am - 6pm)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Email & Phone
              </h2>
              <p className="text-gray-600">Email: support@foodshare.com</p>
              <p className="text-gray-600">Phone: +880 123456789</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Follow Us
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
