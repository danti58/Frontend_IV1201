// adminApplicantsPage.tsx
import React from 'react';
import AdminApplicantsPresenter from '@/app/components/adminApplicants/adminApplicantsPresenter';
import { useSelector } from 'react-redux';

/**
 * Page component for the admin applicants page.
 * 
 * @returns - Admin applicants presenter component
 */
const AdminApplicants = () => {
    /**
     * Get the user state from the Redux store to check if the user is logged in.
     */
  const userState = useSelector((state: any) => state.auth.userState);
  return (
  userState.username ? <AdminApplicantsPresenter />: <p>Please log in to access this page</p> 
  );
};

export default AdminApplicants;
