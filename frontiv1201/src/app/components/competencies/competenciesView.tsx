import React from 'react';
import { CompetencyData, LoginData } from '@/app/api';

interface Props {
  competencyData: CompetencyData;
  setCompetencyData: (competencyData: CompetencyData) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  setSuccessMessage: (successMessage: string) => void;
  error: string | null;
}

/**
 * Competencies view component
 * 
 * @param param0  - The props of the component
 * @returns - Competencies view component
 */
const CompetenciesView: React.FC<Props> = ({ competencyData, setCompetencyData, handleChange, successMessage, error }) => (

  <div>
     {successMessage && <p>{successMessage}</p>}
     {error && <p>{error}</p>}
    <label>
      Username: {competencyData.requestedUsername} {/* Display the username from loginData */}
    </label>
    <form onSubmit={handleChange}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Competency name:</label>
        <select
          className="bg-white text-black"
          value={competencyData.competencyName}
          onChange={(e) =>
            setCompetencyData({ ...competencyData, competencyName: e.target.value })
          }
          style={{ padding: '8px', borderRadius: '4px', width: '100%' }}
        >
          <option value="ticket sales">Ticket sales</option>
          <option value="lotteries">Lotteries</option>
          <option value="roller coaster operation">Roller coaster operation</option>
        </select>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Years of experience:</label>
        <input
          className="bg-white text-black"
          type="number"
          value={competencyData.yearsOfExperience}
          onChange={(e) =>
            setCompetencyData({
              ...competencyData,
              yearsOfExperience: parseInt(e.target.value) || 0,
            })
          }
          style={{ padding: '8px', borderRadius: '4px', width: '100%' }}
        />
      </div>
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        type="submit"
      >
        ADD
      </button>
    </form>
  </div>
);

export default CompetenciesView;