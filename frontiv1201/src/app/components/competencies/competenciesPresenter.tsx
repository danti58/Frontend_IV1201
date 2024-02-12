import React from 'react';

import { addCompetency, CompetencyData } from '@/app/api';
import CompetenciesView from './competenciesView';

function CompetenciesPresenter() {

 const [competencyData, setCompetencyData] = React.useState<CompetencyData>({
    competencyName: ''
    
  });

  function onAddCompetencySuccess(response: any) {
    // print response json:
    console.log('Add competence success:', response);
  }

    function onAddCompetencyFail(error: any) {
        console.error('Add competence failed:', error);
    }


  
  // Inside LoginPresenter component
  const handleChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await addCompetency(competencyData);
      onAddCompetencySuccess(response);
    } catch (error) {
      onAddCompetencyFail(error);
    }
  };


  return <CompetenciesView competencyData={competencyData} setCompetencyData={setCompetencyData} handleChange={handleChange} />;
};

export default CompetenciesPresenter;