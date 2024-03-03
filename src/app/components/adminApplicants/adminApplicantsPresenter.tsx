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

  useEffect(() => {
    if (userState.role_id === 1) {
      setIsAuthorized(true);
      fetchApplicants();
    }
  }, [userState]);

  /**
   * Fetches applicants from the API  and sets the state with the response data.
   */
  const fetchApplicants = async () => {
    try {
      console.log('fetching applicants using token: ' + userState.token)
      const response = await getApplicants(userState.token);
      setApplicants(response);
    } catch (error) {
      console.error('Failed to fetch applicants', error);
    }
  };

  if (!isAuthorized) {
    return <div>Unauthorized</div>;
  }

  return <AdminApplicantsView applicants={applicants} />;
};

export default AdminApplicantsPresenter;
