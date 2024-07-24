import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sidebar = ({ trips, addTrip, deleteTrip }) => {
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: Date.now(),
      name: tripName,
      startDate,
      endDate,
      difficulty,
      notes
    };
    addTrip(newTrip);
    // Reset form
    setTripName('');
    setStartDate('');
    setEndDate('');
    setDifficulty('');
    setNotes('');
  };

  return (
    <aside className="w-1/3 p-4 bg-secondary">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Trip Name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <Select value={difficulty} onValueChange={setDifficulty} required>
          <SelectTrigger>
            <SelectValue placeholder="Difficulty Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button type="submit">Save Trip</Button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Saved Trips</h3>
        <ul className="space-y-2">
          {trips.map((trip) => (
            <li key={trip.id} className="flex justify-between items-center">
              <span>{trip.name}</span>
              <Button variant="destructive" onClick={() => deleteTrip(trip.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;