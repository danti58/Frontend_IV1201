import React from 'react';
import { useSelector } from 'react-redux';

import { addCompetency, CompetencyData } from '@/app/api';
import CompetenciesView from './competenciesView';

function CompetenciesPresenter() {


const userState = useSelector((state: any) => state.auth.userState);

 const [competencyData, setCompetencyData] = React.useState<CompetencyData>({
  requestedUsername: userState.username,  
  competencyName: '', 
  yearsOfExperience: 0,
    
    
 
  });



 

const [successMessage, setSuccessMessage] = React.useState<string>('');
  


  function onAddCompetencySuccess(response: any) {
    // print response json:
    setSuccessMessage('Competency successfully added!');
    console.log('Add competence success:', response);
  }

    function onAddCompetencyFail(error: any) {
        console.error('Add competence failed:', error);
    }



  
  // Inside  component
  const handleChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await addCompetency(competencyData, userState.token);
      onAddCompetencySuccess(response);
    } catch (error) {
      onAddCompetencyFail(error);
    }
  };










  return <CompetenciesView competencyData={competencyData} setCompetencyData={setCompetencyData}  handleChange={handleChange} 
  successMessage={successMessage} setSuccessMessage={setSuccessMessage}  />;
};

export default CompetenciesPresenter;