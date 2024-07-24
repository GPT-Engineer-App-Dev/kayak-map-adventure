import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MapArea from '../components/MapArea';
import Footer from '../components/Footer';

const Index = () => {
  const [trips, setTrips] = useState([]);

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  const deleteTrip = (tripId) => {
    setTrips(trips.filter(trip => trip.id !== tripId));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex">
        <Sidebar trips={trips} addTrip={addTrip} deleteTrip={deleteTrip} />
        <MapArea />
      </main>
      <Footer />
    </div>
  );
};

export default Index;