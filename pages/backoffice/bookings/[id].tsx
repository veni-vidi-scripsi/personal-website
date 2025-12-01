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

export default function BookingDetails() {
  const router = useRouter();
  const { id } = router.query;
  
  // In a real app, you would fetch this data based on the ID
  const booking = mockBookings[id as string] || null;

  if (!booking) {
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
        <title>Booking {booking.id} - We Show You Ireland</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Booking Details</h1>
            <p className="text-gray-600">Booking ID: {booking.id}</p>
          </div>
          <Link 
            href="/backoffice"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {booking.tour}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {new Date(booking.date).toLocaleDateString('en-IE', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} at {booking.time}
            </p>
          </div>
          
          <div className="border-t border-gray-200
           px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Status
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {booking.status}
              </span>
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Customer
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {booking.customer}
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Contact
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex flex-col">
                <a href={`mailto:${booking.email}`} className="text-green-600 hover:text-green-800">
                  {booking.email}
                </a>
                <a href={`tel:${booking.phone.replace(/\s+/g, '')}`} className="text-green-600 hover:text-green-800 mt-1">
                  {booking.phone}
                </a>
              </div>
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Tour Details
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Tour</p>
                  <p>{booking.tour}</p>
                </div>
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p>
                    {new Date(booking.date).toLocaleDateString('en-IE', { 
                      weekday: 'short', 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                    <br />
                    {booking.time}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Participants</p>
                  <p>{booking.participants} {booking.participants === 1 ? 'person' : 'people'}</p>
                </div>
                <div>
                  <p className="font-medium">Price</p>
                  <p>€{booking.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="font-medium">Payment Status</p>
                  <p>{booking.paymentStatus}</p>
                </div>
                <div>
                  <p className="font-medium">Pickup Location</p>
                  <p>{booking.pickupLocation}</p>
                </div>
              </div>
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Special Requests
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {booking.specialRequests || 'None'}
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Emergency Contact
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {booking.emergencyContact}
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Guide Notes
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {booking.guideNotes || 'No special notes'}
            </dd>

            <dt className="text-sm font-medium text-gray-500 mt-4 sm:mt-0">
              Booking History
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">
                      Booking created
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="text-gray-500">
                      {new Date(booking.createdAt).toLocaleString('en-IE', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </li>
                {booking.updatedAt !== booking.createdAt && (
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        Booking updated
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="text-gray-500">
                        {new Date(booking.updatedAt).toLocaleString('en-IE', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </li>
                )}
              </ul>
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end space-x-3">
            <Link
              href={`/backoffice/bookings/edit/${id}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Edit Booking
            </Link>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
