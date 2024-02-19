import React from 'react';
import { CompetencyData, LoginData } from '@/app/api';

<<<<<<< HEAD

interface Props {
  competencyData: CompetencyData;
  loginData: LoginData;
  setCompetencyData: (competencyData: CompetencyData) => void;
  setLoginData: (loginData: LoginData) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  fetchUsername: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CompetenciesView: React.FC<Props> = ({ competencyData, setCompetencyData, loginData, setLoginData, handleChange, fetchUsername }) => (
  <div>

    <form onSubmit={fetchUsername}>
     <label>
        Username:  {loginData.username}
      </label>
      </form>
<br></br>
=======
interface Props {
  competencyData: CompetencyData;
  loginData: LoginData; // Added loginData prop
  setCompetencyData: (competencyData: CompetencyData) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CompetenciesView: React.FC<Props> = ({ competencyData, loginData, setCompetencyData, handleChange }) => (
  <div>
    <label>
      Username: {loginData} {/* Display the username from loginData */}
    </label>

>>>>>>> main
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
<<<<<<< HEAD
      <br></br>
=======

>>>>>>> main
      <label>
        Years of experience:
        <input
          className="bg-white text-black"
          type="text"
          value={competencyData.yearsOfExperience}
          onChange={(e) => setCompetencyData({ ...competencyData, yearsOfExperience: e.target.value })}
        />
      </label>
<<<<<<< HEAD
<br></br>
=======

>>>>>>> main
      <button
        style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px' }}
        type="submit"
      >
<<<<<<< HEAD
        
=======
>>>>>>> main
        ADD
      </button>
    </form>
  </div>
);

export default CompetenciesView;