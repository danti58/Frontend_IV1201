import React from 'react';
import { CompetencyData } from '@/app/api';

interface Props {
  competencyData: CompetencyData; 
  setCompetencyData: (competencyData:CompetencyData ) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void; 
}

const CompetenciesView: React.FC<Props> = ({ competencyData, setCompetencyData, handleChange }) => (

  <div>
    {/* Wrap inputs with a form tag and use onSubmit event */}
    <form onSubmit={handleChange}>
      <label>
        Competency name:
        <input
          className="bg-white text-black"
          type="text"
          value={competencyData.competencyName}
          onChange={(e) => setCompetencyData({ ...competencyData, name: e.target.value })}
        />
      </label>
    
      <button
        style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px'}}
        type="submit" // Change to type submit for form submission
      >
        ADD
      </button>
    </form>
  </div>
);



export default CompetenciesView;