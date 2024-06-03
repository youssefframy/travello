export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative">
        <img
          src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">About Us</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to our travel website, where we specialize in creating
            unforgettable experiences in Egypt. Whether you are looking for a
            one-day trip or a comprehensive package, we have you covered. Our
            dedicated team is committed to providing premium services and
            ensuring that your journey is both memorable and seamless.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore the rich history and vibrant culture of Egypt with our
            carefully curated trips. We offer a range of services, from guided
            tours of iconic landmarks to personalized travel itineraries that
            cater to your specific interests and preferences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our high ratings and positive reviews are a testament to our
            commitment to excellence. We take pride in delivering top-notch
            service and ensuring that our clients have an exceptional travel
            experience. From the moment you book with us to the time you return
            home, we are here to make your trip to Egypt extraordinary.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Premium service tailored to your needs</li>
            <li>
              Expert guides with in-depth knowledge of Egyptian history and
              culture
            </li>
            <li>High customer satisfaction and top-rated experiences</li>
            <li>Personalized travel itineraries</li>
            <li>Seamless booking and exceptional support</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
