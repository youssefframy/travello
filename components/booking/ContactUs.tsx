"use client";
import { Mail, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your request has been successfully sent!");
    }
  }, [isSuccess]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const res = await response.json();
      console.log(res);
      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };
  return (
    <main className="max-w-3xl mx-auto p-6 mt-8">
      <section className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 opacity-25 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-25 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center border-b border-gray-300 py-2">
              <User className="text-gray-500 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                className="w-full py-2 px-4 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <Mail className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                className="w-full py-2 px-4 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <Phone className="text-gray-500 mr-3" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={values.phone}
                className="w-full py-2 px-4 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                name="comments"
                placeholder="Comments"
                value={values.comments}
                onChange={handleChange}
                className="w-full py-2 px-4 text-gray-700 focus:outline-none h-32 resize-none"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 disabled:bg-slate-500 disabled:opacity-65 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
