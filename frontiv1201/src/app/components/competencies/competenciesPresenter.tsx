import React from 'react';
import { useSelector } from 'react-redux';

import { addCompetency, CompetencyData, loginPerson, LoginData } from '@/app/api';
import CompetenciesView from './competenciesView';

function CompetenciesPresenter() {


const userState = useSelector((state: any) => state.auth.userState);

 const [competencyData, setCompetencyData] = React.useState<CompetencyData>({
  username: userState.username,  
  competencyName: '', 
    yearsOfExperience: '',
    
    
    
  });



   const [loginData, setLoginData] = React.useState<LoginData>({
    username: '', 
    password: '',
  });

  function onAddCompetencySuccess(response: any) {
    // print response json:
    console.log('Add competence success:', response);
  }

    function onAddCompetencyFail(error: any) {
        console.error('Add competence failed:', error);
    }

      function onLoginSuccess(response: any) {
    // print response json:
    console.log('Login success:', response);
  }

    function onLoginFail(error: any) {
        console.error('Login failed:', error);
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







  return <CompetenciesView competencyData={competencyData} setCompetencyData={setCompetencyData} setLoginData={setLoginData}  loginData={loginData} handleChange={handleChange}  />;
};

export default CompetenciesPresenter;