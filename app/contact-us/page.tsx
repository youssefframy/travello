import { ContactUs } from "@/components/booking/ContactUs";

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

      <ContactUs />
    </div>
  );
}
