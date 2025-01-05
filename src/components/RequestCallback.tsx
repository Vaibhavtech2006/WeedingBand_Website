import React, { useState } from "react";
import img1 from "../pages/1.jpg";

const RequestCallback: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  function generateCaptcha(): string {
    return Math.random().toString().substr(2, 5);
  }

  const validateForm = (name: string, value: string): string | null => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required." : null;
      case "phone":
        return !/^\d{10}$/.test(value) ? "Phone number must be 10 digits." : null;
      case "email":
        return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? "Invalid email address." : null;
      case "captcha":
        return value !== captcha ? "Captcha does not match." : null;
      default:
        return null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormErrors({ ...formErrors, [id]: validateForm(id, value) || "" });
    if (id === "captcha") setInputCaptcha(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    ["name", "phone", "email", "captcha"].forEach((field) => {
      const error = validateForm(field, (e.target as any)[field]?.value);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    alert("Form submitted successfully!");
    setCaptcha(generateCaptcha());
  };

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center py-10 px-4">
      <div className="container max-w-5xl flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={img1}
            alt="Decorated carriage"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-gray-700 text-white p-8">
          <h2 className="text-2xl font-bold text-center mb-6">REQUEST A CALLBACK</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
              { id: "phone", label: "Phone no.", type: "tel", placeholder: "Enter your phone number" },
              { id: "email", label: "Email id", type: "email", placeholder: "Enter your email" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  required
                  onChange={handleInputChange}
                  className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {formErrors[id] && (
                  <p className="text-red-500 text-sm mt-1">{formErrors[id]}</p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Your message here..."
                className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <div>
              <label htmlFor="captcha" className="block text-sm font-medium">
                Captcha
              </label>
              <input
                type="text"
                id="captcha"
                required
                value={inputCaptcha}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {formErrors["captcha"] && (
                <p className="text-red-500 text-sm mt-1">{formErrors["captcha"]}</p>
              )}
            </div>

            {/* Captcha Display */}
            <div className="flex items-center justify-between text-black bg-white p-3 rounded-lg">
              <span className="text-lg font-bold">{captcha}</span>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="text-gray-700 underline"
              >
                Refresh
              </button>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestCallback;
