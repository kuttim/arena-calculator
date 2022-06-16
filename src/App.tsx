import { useState } from 'react';
import './App.css';
import { calculatePoints } from './util/points';

function App() {
  const [rating, setRating] = useState(0);
  const [teamSize, setTeamSize] = useState(2);
  const [points, setPoints] = useState(0);

  const teamSizes = [2, 3, 5];

  const getPointsPerWeek = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // @ts-ignore
    setPoints(calculatePoints(rating, teamSize));
  };
  return (
    <div className="container">
      <div className="calculator">
        <form onSubmit={getPointsPerWeek}>
          <label>
            Current rating
            <input
              type="number"
              value={rating || ''}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
          </label>
          <label>Team size</label>
          <select
            name="bracket"
            onChange={(e) => setTeamSize(parseInt(e.target.value))}
            value={teamSize}
          >
            {teamSizes.map((b) => (
              <option key={b} value={b}>
                {b}s
              </option>
            ))}
          </select>
          <button type="submit">Calculate points</button>
        </form>
        <p>Estimated points per week: {points}</p>
      </div>
    </div>
  );
}

export default App;
