import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch(
        "https://wonderful-vitality.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-primary-500" />,
      title: "Email",
      content: "anwaramar177@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl text-primary-500" />,
      title: "Phone",
      content: "+201119131252",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-500" />,
      title: "Location",
      content: "Cairo, Egypt",
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block mb-3 text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto rounded bg-primary-600"></div>
          <p className="mt-6 text-lg text-gray-600">
            Feel free to contact me for any work or suggestions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-custom"
            >
              <div className="p-4 mb-4 rounded-full bg-primary-50">
                {info.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark">
                {info.title}
              </h3>
              <a
                href={info.link}
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                {info.content}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden bg-white shadow-lg rounded-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center p-8 text-white bg-primary-600">
              <div>
                <h3 className="mb-6 text-2xl font-bold">
                  Let's discuss your project
                </h3>
                <p className="mb-8 text-primary-100">
                  Have a project in mind? I'd love to hear about it. Fill out
                  the form and I'll get back to you as soon as possible.
                </p>
                <img
                  src="/Meeting.jpg"
                  alt="Contact illustration"
                  className="hidden rounded-lg shadow-lg lg:block"
                />
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg shadow-md bg-primary-600 hover:bg-primary-700 hover:shadow-lg"
                  disabled={submitStatus.type === "loading"}
                >
                  {submitStatus.type === "loading"
                    ? "Sending..."
                    : "Send Message"}
                </button>
                {submitStatus.message && (
                  <div
                    className={`mt-4 p-3 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-700"
                        : submitStatus.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
