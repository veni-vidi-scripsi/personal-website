import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const mockBookings = {
  'BK-1001': {
    id: 'BK-1001',
    customer: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+353 85 123 4567',
    tour: 'Dublin City Highlights',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '10:00',
    participants: 2,
    status: 'Confirmed',
    price: 70,
    specialRequests: 'One vegetarian meal required',
    createdAt: '2023-05-15T10:30:00Z',
    updatedAt: '2023-05-15T10:30:00Z',
    paymentStatus: 'Paid',
    guideNotes: 'Customer is interested in Irish history',
    pickupLocation: 'Temple Bar Hotel',
    emergencyContact: 'Jane Doe (Spouse) - +353 87 654 3210'
  },
  'BK-1002': {
    id: 'BK-1002',
    customer: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+353 86 987 6543',
    tour: 'Cliffs of Moher',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '08:00',
    participants: 4,
    status: 'Pending',
    price: 200,
    specialRequests: 'Need car seats for 2 children',
    createdAt: '2023-05-16T14:15:00Z',
    updatedAt: '2023-05-16T14:15:00Z',
    paymentStatus: 'Deposit Paid',
    guideNotes: 'Family with young children',
    pickupLocation: 'The Shelbourne Hotel',
    emergencyContact: 'Michael Johnson (Husband) - +353 85 123 9999'
  },
  'BK-1003': {
    id: 'BK-1003',
    customer: 'Robert Chen',
    email: 'robert.chen@example.com',
    phone: '+353 89 456 7890',
    tour: 'Guinness Storehouse',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '15:30',
    participants: 1,
    status: 'Completed',
    price: 45,
    specialRequests: 'Allergic to nuts',
    createdAt: '2023-05-10T09:45:00Z',
    updatedAt: '2023-05-12T18:20:00Z',
    paymentStatus: 'Paid',
    guideNotes: 'Solo traveler, interested in beer brewing process',
    pickupLocation: 'The Westin Dublin',
    emergencyContact: 'Lisa Chen (Sister) - +353 87 123 4567'
  }
};

const tourOptions = [
  'Dublin City Highlights',
  'Cliffs of Moher',
  'Guinness Storehouse',
  'Kilmainham Gaol',
  'Phoenix Park & Dublin Zoo',
  'Jameson Distillery',
  'Dublin Castle',
  'Temple Bar Experience'
];

const statusOptions = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];
const paymentStatusOptions = ['Not Paid', 'Deposit Paid', 'Fully Paid', 'Refunded'];

const pickupLocations = [
  'Temple Bar Hotel',
  'The Shelbourne Hotel',
  'The Westin Dublin',
  'The Marker Hotel',
  'Dublin Airport',
  'Custom Location'
];

export default function EditBooking() {
  const router = useRouter();
  const { id } = router.query;
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // In a real app, you would fetch this data based on the ID
  const [formData, setFormData] = useState({
    customer: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    time: '',
    participants: 1,
    status: 'Pending',
    price: 0,
    specialRequests: '',
    paymentStatus: 'Not Paid',
    guideNotes: '',
    pickupLocation: '',
    emergencyContact: ''
  });

  // Load booking data when component mounts or ID changes
  useEffect(() => {
    if (id && mockBookings[id as string]) {
      const booking = mockBookings[id as string];
      setFormData({
        customer: booking.customer,
        email: booking.email,
        phone: booking.phone,
        tour: booking.tour,
        date: booking.date,
        time: booking.time,
        participants: booking.participants,
        status: booking.status,
        price: booking.price,
        specialRequests: booking.specialRequests,
        paymentStatus: booking.paymentStatus,
        guideNotes: booking.guideNotes,
        pickupLocation: booking.pickupLocation,
        emergencyContact: booking.emergencyContact
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'participants' || name === 'price' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // In a real app, you would make an API call here to update the booking
      console.log('Updating booking:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      
      // Redirect back to the booking details page
      router.push(`/backoffice/bookings/${id}`);
    } catch (error) {
      console.error('Error updating booking:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (!id || !mockBookings[id as string]) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Not Found</h1>
          <p className="text-gray-600 mb-6">The requested booking could not be found.</p>
          <Link href="/backoffice" className="text-green-600 hover:text-green-800">
            &larr; Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Head>
        <title>Edit Booking {id} - We Show You Ireland</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Booking</h1>
            <p className="text-gray-600">Booking ID: {id}</p>
          </div>
          <div className="flex space-x-2">
            <Link 
              href={`/backoffice/bookings/${id}`}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </div>

        {showSuccess && (
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
            <p className="font-bold">Success!</p>
            <p>Booking has been updated successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                  Customer Name *
                </label>
                <input
                  type="text"
                  name="customer"
                  id="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="tour" className="block text-sm font-medium text-gray-700">
                  Tour *
                </label>
                <select
                  id="tour"
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  required
                >
                  <option value="">Select a tour</option>
                  {tourOptions.map((tour) => (
                    <option key={tour} value={tour}>
                      {tour}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
                  Pickup Location
                </label>
                <select
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                >
                  <option value="">Select a pickup location</option>
                  {pickupLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time *
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="participants" className="block text-sm font-medium text-gray-700">
                  Participants *
                </label>
                <input
                  type="number"
                  name="participants"
                  id="participants"
                  min="1"
                  value={formData.participants}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status *
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  required
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700">
                  Payment Status *
                </label>
                <select
                  id="paymentStatus"
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  required
                >
                  {paymentStatusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (€) *
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">€</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
                  Special Requests
                </label>
                <div className="mt-1">
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    value={formData.specialRequests}
                    onChange={handleChange}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Any special requirements or requests from the customer.</p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="guideNotes" className="block text-sm font-medium text-gray-700">
                  Guide Notes
                </label>
                <div className="mt-1">
                  <textarea
                    id="guideNotes"
                    name="guideNotes"
                    rows={3}
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    value={formData.guideNotes}
                    onChange={handleChange}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Internal notes for the tour guide.</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              onClick={() => router.push(`/backoffice/bookings/${id}`)}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
