import { Mail, Phone, User } from "lucide-react";
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative">
        <img
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 mt-8">
        <section className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-100 opacity-25 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-25 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <User className="text-gray-500 mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Mail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Phone className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <textarea
                  name="comments"
                  placeholder="Comments"
                  className="w-full py-2 px-4 text-gray-700 focus:outline-none h-32 resize-none"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
