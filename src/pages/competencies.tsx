import React from 'react';
import CompetenciesPresenter from '../app/components/competencies/competenciesPresenter';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

// Import your LoginComponent here

/**
 * Page component for the competencies page.
 * 
 * @returns - Competencies presenter component
 */
export default function Competence() {
  /**
  * Get the user state from the Redux store to check if the user is logged in.
  */
  const userState = useSelector((state: any) => state.auth.userState);


  return (
    <div>
      {/* You can include a LoginComponent here or the content directly */
      userState.username ? <CompetenciesPresenter /> : <p>Please log in to access this page</p>  
      }
    </div>
  );
}


