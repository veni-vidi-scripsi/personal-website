import Head from 'next/head';
import { useState } from 'react';
import { FiMapPin, FiClock, FiCalendar, FiArrowRight, FiX } from 'react-icons/fi';

const tours = [
  {
    id: 1,
    title: 'Dublin City Highlights',
    duration: '3 hours',
    price: '€35',
    description: 'Explore the heart of Dublin with our expert guides. Visit Trinity College, Temple Bar, and more!',
    image: 'https://images.pexels.com/photos/3566191/pexels-photo-3566191.jpeg',
    location: 'Dublin',
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    title: 'Cliffs of Moher',
    duration: 'Full day',
    price: '€75',
    description: 'Experience the breathtaking Cliffs of Moher on this unforgettable day trip from Dublin.',
    image: 'https://images.pexels.com/photos/33893284/pexels-photo-33893284.jpeg',
    location: 'Cliffs of Moher',
    rating: 4.9,
    reviews: 243
  },
  {
    id: 3,
    title: 'Guinness Storehouse',
    duration: '2.5 hours',
    price: '€45',
    description: 'Discover the history of Ireland\'s most famous beer with a tasting session included.',
    image: 'https://images.pexels.com/photos/31759849/pexels-photo-31759849.jpeg',
    location: 'Dublin',
    rating: 4.7,
    reviews: 189
  }
];

const Home = () => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1,
    tourId: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert(`Thank you for booking ${tours.find(t => t.id === selectedTour)?.title}! We'll send the details to ${bookingData.email}.`);
    setSelectedTour(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Head>
        <title>We Show You - Premium Irish Tours & Experiences</title>
        <meta name="description" content="Discover Ireland with We Show You - Expert guided tours showcasing the best of Irish culture, history, and landscapes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl">W</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">WeShowYou</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-800 hover:text-amber-600"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">Tours</a>
              <a href="#about" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">About</a>
              <a href="#reviews" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">Reviews</a>
              <a href="#contact" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">Contact</a>
              <button className="bg-gradient-to-r from-orange-500 to-amber-700 hover:from-orange-600 hover:to-amber-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Book a Tour
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <a href="#tours" className="block px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg">Tours</a>
              <a href="#about" className="block px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg">About</a>
              <a href="#reviews" className="block px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg">Contact</a>
              <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-700 text-white px-4 py-2.5 rounded-lg font-medium">
                Book a Tour
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 to-amber-200/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507136566006-cfc505b906fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-6">
              <span className="animate-pulse h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              Explore Ireland with local experts
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover the Magic of</span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
                Ireland's Hidden Gems
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-amber-800 max-w-2xl mx-auto leading-relaxed">
              Experience Ireland like never before with our handcrafted tours. From the dramatic coastlines to the vibrant cities, we'll show you the heart and soul of the Emerald Isle.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tours"
                className="px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-amber-700 hover:from-orange-600 hover:to-amber-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center"
              >
                Explore Our Tours
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-amber-200 text-base font-medium rounded-full text-amber-800 bg-white hover:bg-amber-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-amber-900">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                  <FiMapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">10+ Locations</p>
                  <p className="text-xs text-amber-700">Across Ireland</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                  <FiClock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Flexible</p>
                  <p className="text-xs text-amber-700">Tour Durations</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Local</p>
                  <p className="text-xs text-amber-700">Expert Guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dublin Castle Section */}
      <div className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Discover Dublin Castle</h2>
              <p className="text-lg text-amber-800 mb-6">
                Step into history at Dublin Castle, a landmark that has stood at the heart of Irish history for over 800 years. 
                This magnificent structure has served as a fortress, royal residence, and now a major Irish government complex.
              </p>
              <p className="text-amber-700 mb-8">
                Explore the State Apartments, medieval undercroft, and the beautiful Dubh Linn Gardens. Our expert guides will bring 
                to life the castle's fascinating history, from Viking origins to its role in modern Irish government.
              </p>
              <a 
                href="#tours" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-amber-700 hover:from-orange-600 hover:to-amber-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Castle Tour
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.istockphoto.com/id/173751911/photo/dublin-castle-in-ireland.jpg?s=1024x1024&w=is&k=20&c=HTbF7S6J2PdV3OiiIjYwDj_wKi73Vn7bD1BQrzyjL20=" 
                alt="Dublin Castle"
                className="w-full h-full object-cover aspect-video"
                onError={(e) => {
                  // Fallback to a different image if the primary one fails to load
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1602797882193-51cb0e037534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-medium">Dublin Castle, Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <div id="tours" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full mb-4">
              Our Tours
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Discover Ireland's Best Experiences
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Handpicked tours that showcase the very best of Ireland's landscapes, history, and culture.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <div 
                key={tour.id} 
                className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    src={tour.image} 
                    alt={tour.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                        <div className="flex items-center mt-1 text-sm text-emerald-100">
                          <FiMapPin className="h-4 w-4 mr-1" />
                          {tour.location}
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-600 text-white">
                        {tour.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-900 font-medium">{tour.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{tour.reviews} reviews</span>
                    </div>
                    <div className="ml-auto flex items-center">
                      <FiClock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {tour.description}
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedTour(tour.id)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                    >
                      Book Now
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md transform transition-all duration-300">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Book Your Tour
                  </h3>
                  <p className="mt-1 text-emerald-100">
                    {tours.find(t => t.id === selectedTour)?.title}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="text-white/80 hover:text-white transition-colors duration-200 p-1 -mt-1 -mr-1"
                >
                  <span className="sr-only">Close</span>
                  <FiX className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    placeholder="Your name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    placeholder="your@email.com"
                    value={bookingData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Tour Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        value={bookingData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 appearance-none bg-white"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, '6+'].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                    <span>Total Price:</span>
                    <span className="text-lg font-bold text-emerald-700">
                      {(() => {
                        const price = parseInt(tours.find(t => t.id === selectedTour)?.price?.replace('€', '') || '0');
                        const guests = typeof bookingData.guests === 'number' ? bookingData.guests : 6;
                        return `€${price * guests}`;
                      })()}
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 px-6 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Confirm Booking</span>
                    <FiArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    You'll receive a confirmation email with all the details.
                  </p>
                </div>
              </div>
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
export default Home;
