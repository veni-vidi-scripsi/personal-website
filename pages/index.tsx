import Head from 'next/head';
import { useState } from 'react';

const tours = [
  {
    id: 1,
    title: 'Dublin City Highlights',
    duration: '3 hours',
    price: '€35',
    description: 'Explore the heart of Dublin with our expert guides. Visit Trinity College, Temple Bar, and more!',
    image: 'https://images.pexels.com/photos/3566191/pexels-photo-3566191.jpeg'
  },
  {
    id: 2,
    title: 'Cliffs of Moher Day Trip',
    duration: 'Full day',
    price: '€75',
    description: 'Experience the breathtaking Cliffs of Moher on this unforgettable day trip from Dublin.',
    image: 'https://images.pexels.com/photos/33893284/pexels-photo-33893284.jpeg'
  },
  {
    id: 3,
    title: 'Guinness Storehouse Experience',
    duration: '2.5 hours',
    price: '€45',
    description: 'Discover the history of Ireland\'s most famous beer with a tasting session included.',
    image: 'https://images.pexels.com/photos/31759849/pexels-photo-31759849.jpeg'
  }
];

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    tourId: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Thank you for your booking! We\'ll contact you shortly to confirm your tour.');
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
      <Head>
        <title>We Show You - Dublin&apos;s Premier Tour Experience</title>
        <meta name="description" content="Discover Dublin with We Show You - Expert guided tours of Ireland&apos;s capital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-green-800/80 backdrop-blur-md fixed w-full z-50 shadow-lg border-b-2 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://img.icons8.com/color/48/000000/leprechaun.png" 
                alt="Leprechaun Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent font-serif">We Show You Ireland</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-white hover:text-yellow-300 transition-colors duration-200">Tours</a>
              <a href="#about" className="text-white hover:text-yellow-300 transition-colors duration-200">About</a>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-colors duration-200">Contact</a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg"
            alt="Irish countryside with rainbow over green fields"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/60" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-serif drop-shadow-lg text-center">
            <span className="text-yellow-300">Céad Míle Fáilte</span><br />
            <span className="text-4xl sm:text-5xl lg:text-6xl text-white">A Hundred Thousand Welcomes</span>
          </h1>
          <p className="mt-6 text-xl text-white max-w-2xl leading-relaxed italic font-medium drop-shadow text-center mx-auto">
            Discover the Emerald Isle's most breathtaking landscapes. From the rolling green hills to the magical rainbows, experience the real Ireland with our expert guides.
          </p>
          <div className="mt-10">
            <a
              href="#tours"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-base font-bold rounded-full text-green-900 bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl md:text-lg font-serif"
            >
              Explore Tours
            </a>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <div id="tours" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block">
            <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl font-serif relative z-10 px-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-900">
                Our Irish Adventures
              </span>
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full opacity-30 blur"></div>
          </div>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-emerald-800 sm:mt-4 font-medium">
              Choose from our selection of handcrafted Dublin experiences
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {tours.map((tour) => (
              <div 
                key={tour.id} 
                className="group relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-emerald-100 hover:border-yellow-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    src={tour.image} 
                    alt={tour.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/800x400?text=Tour+Image+Not+Available';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full border border-white shadow-md">
                    {tour.duration}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {tour.title}
                    </h3>
                    <span className="text-indigo-200 font-medium">{tour.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {tour.description}
                  </p>
                  <button 
                    onClick={() => setSelectedTour(tour.id)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 border border-yellow-400 hover:border-yellow-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  Book Your Tour
                </h3>
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-indigo-100">
                {tours.find(t => t.id === selectedTour)?.title}
              </p>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Tour Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 appearance-none"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Confirm Booking</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                We'll send you a confirmation email with all the details.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* About Section */}
      <div id="about" className="py-12 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlOGY4ZWEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnptLTEgMGgxLjAxYy0uMDcgLjY4LS4zMiAxLjMxLS43IDEuODdsL43LjlhMy45ODggMy45ODggMCAwIDEtMS4yMS0yLjc3em0tMiAwYzAgMS4wNS4zNyAyLjAxMSAxIDIuNzd2LTIuNzdoLTF6bS0xIDBoLTF2M2gxdi0zem0tMSAwdjNoLTF2LTNoMXptLTEgMHYzaC0xYy0uNTUyIDAtMS0uNDQ4LTEtMWgydjJ6bTAgMHYtM2gxYzAgLjU1Mi40NDggMSAxIDFoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="relative inline-block">
              <h2 className="text-base text-emerald-700 font-semibold tracking-wide uppercase font-serif">Fáilte go hÉirinn</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-900 sm:text-4xl font-serif">
                <span className="relative">
                  <span className="relative z-10">Discover the Magic of Ireland</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/40 -z-0"></span>
                </span>
              </p>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're passionate about sharing the true spirit of Dublin with visitors from around the world.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-yellow-300 border-2 border-yellow-300 shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Local Experts</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Our guides are Dublin natives with years of experience and a deep love for their city.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-yellow-300 border-2 border-yellow-300 shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Flexible Scheduling</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Tours available daily with multiple time slots to fit your schedule.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-yellow-300 border-2 border-yellow-300 shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Hidden Gems</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We take you beyond the tourist traps to discover Dublin's best-kept secrets.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-yellow-300 border-2 border-yellow-300 shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Best Value</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Competitive pricing with no hidden fees. Your satisfaction is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGEwNjYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggOGgxYTEgMSAwIDAgMSAxIDF2OWEyIDIgMCAwIDEtMiAyaC0xIi8+PHBhdGggZD0iTTYgMTBIMmEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxIi8+PHBhdGggZD0iTTEwIDJoNCIvPjxwYXRoIGQ9Ik0xMCAxNmg0Ii8+PHBhdGggZD0iTTEwIDRoM3YxMkgxMCIvPjwvc3ZnPg==')", backgroundSize: '100px'}}></div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="relative inline-block">
                <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl font-serif relative z-10 px-4">
                  <span className="relative">
                    <span className="relative z-10">What Our Guests Say</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/50 -z-0"></span>
                  </span>
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full opacity-30 blur"></div>
              </div>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Don't just take our word for it. Here's what our guests have to say about their experiences.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-base text-gray-900">Sarah & Michael</div>
                    <div className="text-sm text-indigo-600 font-medium">New York, USA</div>
                    <div className="mt-1 text-base text-gray-500">
                      "The Dublin City Highlights tour was the perfect introduction to the city. Our guide was incredibly knowledgeable and showed us parts of Dublin we would have never found on our own. Highly recommended!"
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-base text-gray-900">Thomas</div>
                    <div className="text-sm text-indigo-600 font-medium">Berlin, Germany</div>
                    <div className="mt-1 text-base text-gray-500">
                      "The Cliffs of Moher day trip was the highlight of our Ireland vacation. The guide was fantastic and the scenery was breathtaking. Worth every euro!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Have questions? We&apos;re here to help. Get in touch with our team.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-base text-gray-500">
                  info@weshowyou.ie
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-base text-gray-500">
                  +353 1 234 5678
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-base text-gray-500">
                  123 Dublin Street
                </p>
                <p className="text-base text-gray-500">
                  Dublin 2, Ireland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <h3 className="text-white text-xl font-bold">We Show You</h3>
              <p className="text-gray-300 text-base">
                Your premier tour guide service in Dublin, Ireland. Showing you the best of what our beautiful city has to offer.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Tours</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        City Highlights
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Day Trips
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Private Tours
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#about" className="text-base text-gray-400 hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-base text-gray-400 hover:text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        Cancellation Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} We Show You. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
