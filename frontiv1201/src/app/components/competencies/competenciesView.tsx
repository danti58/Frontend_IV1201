import React from 'react';
import { CompetencyData, LoginData } from '@/app/api';

interface Props {
  competencyData: CompetencyData;
  setCompetencyData: (competencyData: CompetencyData) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
}


const CompetenciesView: React.FC<Props> = ({ competencyData, setCompetencyData, handleChange }) => (

  <div>
     {successMessage && <p>{successMessage}</p>}
    <label>
      Username: {competencyData.Username} {/* Display the username from loginData */}
    </label>

    <form onSubmit={handleChange}>
      <label>
        Competency name:
        <input
          className="bg-white text-black"
          type="text"
          value={competencyData.competencyName}
          onChange={(e) => setCompetencyData({ ...competencyData, competencyName: e.target.value })}
        />
      </label>
<br></br>
      <label>
        Years of experience:
        <input
          className="bg-white text-black"
          type="text"
          value={competencyData.yearsOfExperience}
          onChange={(e) => setCompetencyData({ ...competencyData, yearsOfExperience: parseInt(e.target.value) })}
        />
      </label>
<br></br>
      <button
        style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px' }}
        type="submit"
      >
        ADD
      </button>
    </form>
  </div>
);

export default CompetenciesView;