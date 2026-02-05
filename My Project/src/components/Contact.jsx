import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Logo3D from "./Logo3D";

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
        "https://api-production-4280.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
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
      icon: <FaEnvelope className="text-2xl text-cyan-500" />,
      title: "Email",
      content: "anwaramar177@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl text-cyan-500" />,
      title: "Phone",
      content: "+201001799244",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-cyan-500" />,
      title: "Location",
      content: "Cairo, Egypt",
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block mb-3 text-transparent bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto rounded bg-cyan-600"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
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
              className="flex flex-col items-center p-6 text-center rounded-lg shadow-custom bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors duration-300"
            >
              <div className="p-4 mb-4 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
                {info.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {info.title}
              </h3>
              <a
                href={info.link}
                className="text-slate-600 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
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
          className="overflow-hidden shadow-lg bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center p-8 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
              <div>
                <h3 className="mb-6 text-2xl font-bold">
                  Let's discuss your project
                </h3>
                <p className="mb-8 text-slate-600 dark:text-slate-300">
                  Have a project in mind? I'd love to hear about it. Fill out
                  the form and I'll get back to you as soon as possible.
                </p>
                <Logo3D />
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg shadow-md bg-cyan-600 hover:bg-cyan-700 hover:shadow-lg"
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
