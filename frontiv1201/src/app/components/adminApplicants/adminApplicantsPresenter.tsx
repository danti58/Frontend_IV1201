// adminApplicantsPresenter.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminApplicantsView from './adminApplicantsView';
import { getApplicants } from '@/app/api';

/**
 * Presenter component for the admin applicants page, 
 * fetches applicants from the API and passes them to the view component.
 * 
 * @returns - Admin aplicants view component
 */
function AdminApplicantsPresenter() {
  const userState = useSelector((state: any) => state.auth.userState);
  const [applicants, setApplicants] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (userState.role_id === 1) {
      setIsAuthorized(true);
      fetchApplicants();
    }
  }, [userState]);

  /**
   * Handles the error when fetching applicants from the API.
   * 
   * @param error
   */
    function onAddApplicantsError(error: any) {
        console.error('Failed to fetch applicants', error);
        if (error.request.status === 0) {
            setError('Server is down');
        }
        else if (error.request.status === 500) {
            setError('Cannot connect to database');
        }
        else {
            setError('Failed to fetch applicants');
        }
    }
  /**
   * Fetches applicants from the API  and sets the state with the response data.
   */
  const fetchApplicants = async () => {
    try {
      console.log('fetching applicants using token: ' + userState.token)
      const response = await getApplicants(userState.token);
      setApplicants(response);
    } catch (error) {
        onAddApplicantsError(error);
    }
  };

  if (!isAuthorized) {
    return <div>Unauthorized</div>;
  }

    return <AdminApplicantsView applicants={applicants} error={error} />;
};

export default AdminApplicantsPresenter;
