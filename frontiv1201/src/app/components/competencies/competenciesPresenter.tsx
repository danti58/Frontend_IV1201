import React from 'react';
import { useSelector } from 'react-redux';

import { addCompetency, CompetencyData } from '@/app/api';
import CompetenciesView from './competenciesView';

/**
 * Presenter component for the competencies page, handles the add competency logic and passes the data to the view component.
 * 
 * @returns - Competencies view component
 */
function CompetenciesPresenter() {

/**
 * Fetches the user state from the Redux store
 */
const userState = useSelector((state: any) => state.auth.userState);

/**
 * State to store the competency data from the form inputs.
 */
 const [competencyData, setCompetencyData] = React.useState<CompetencyData>({
  requestedUsername: userState.username,  
  competencyName: '', 
  yearsOfExperience: 0,
    
    
 
  });
  /**
   * State to store the error message when adding a competency fails.
   */
  const [error, setError] = React.useState<string | null>(null);

 
/**
 * State to store the success message after adding a competency to the database.
 */
const [successMessage, setSuccessMessage] = React.useState<string>('');
  

  /**
   * Sends a success message when the competency is added to the database.
   * 
   * @param response - Response from the API call after successful add competency
   */
  function onAddCompetencySuccess(response: any) {
    // print response json:
    setSuccessMessage('Competency successfully added!');
    console.log('Add competence success:', response);
  }

  /**
   * Shows a error message when the add competency fails and logs the error to the console.
   * 
   * @param error - Error message
   */
    function onAddCompetencyFail(error: any) {
        console.error('Add competence failed:', error);
        if (error.request.status === 0) {
            setError('Server is down');
        }
        else if (error.request.status === 500) {
            setError('Cannot connect to database');
        }
        else if (error.request.status === 400) {
            setError('RequestedUsername, competencyName, and yearsOfExperienceare required');
        }
        else {
            setError('Add competence failed');
        }
    }




  /**
   * Handles the add competency data from the API call
   * 
   * @param event - Form submission event
   */
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










    return <CompetenciesView competencyData={competencyData} setCompetencyData={setCompetencyData} handleChange={handleChange}
        successMessage={successMessage} setSuccessMessage={setSuccessMessage} error={error} />;
};

export default CompetenciesPresenter;