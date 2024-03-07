// adminApplicantsView.tsx
import { User } from '@/app/types/User';
import React, { useState } from 'react';
// Define a type for the keys of User that can be used for sorting
type SortKey = 'name' | 'surname'; // Add other keys as needed

type Props = {
  applicants: Array<User>;
  error: string | null;
};

/**
 * View component for the admin applicants page, displays the applicants and handles the sorting logic.
 * 
 * @param applicants - The applicants to display
 * @returns - Admin applicants view component
 */
function AdminApplicantsView({ applicants, error }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedApplicantId, setExpandedApplicantId] = useState<number | null>(null);


  /**
   * Sorts the applicants based on the current sort key and order.
   */
  const sortedApplicants = [...applicants].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    
    // Assuming the values are string for simplicity, adjust as necessary for other types
    if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  /**
   * Handles the sort change event and updates the sort key and order.
   * 
   * @param key - Requested sort key
   */
  const handleSortChange = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  /**
   * Displays the competencies of the applicant.
   * 
   * @param competencies - Retrived competencies from the API
   * @returns - The competencies of the applicant
   */
  function renderCompetencies(competencies: any) {
    console.log(competencies);
    let result = '';
    result += competencies.competency_name;
    result += ' ';
    result += Math.round(competencies.years_of_experience) + ' years';
    return <p style={{ color: 'red' }}>{result}</p>;
  }

  /**
   * Displays the applicants and their details.
   * 
   * @param applicant - The applicant to display
   * @returns - The applicant details
   */
  function mapApplicants(applicant: User) {
    return (
      <div key={applicant.person_id}>
        <div onClick={() => toggleApplicantDetails(applicant.person_id)}>
          <p>{applicant.name} {applicant.surname}</p>
        </div>
        {expandedApplicantId === applicant.person_id && (
          <div style={{ border: '1px solid red', padding: '1rem' }}>
            {/* Expanded applicant details */}
            <p>Email: {applicant.email}</p>
            <p>PNR: {applicant.pnr}</p>
            <p>Username: {applicant.username}</p>
            {/* if competencies are not null */}
            {applicant.competencies ? (
              <p>Competencies: {applicant.competencies.map(renderCompetencies)}</p>
            ) : (
              <p>No competencies</p>
            )}
            {/* Include other details you want to show */}
          </div>
        )}
      </div>
    );
  }

  /**
   * Toggles the expanded state of the applicant details.
   * 
   * @param id - The ID of the applicant to toggle the details for
   */
  const toggleApplicantDetails = (id: number) => {
    if (expandedApplicantId === id) {
      // If clicking on the same applicant, collapse it
      setExpandedApplicantId(null);
    } else {
      // Expand the clicked applicant
      setExpandedApplicantId(id);
    }
  };

  return (
      <div>
        <button onClick={() => handleSortChange('name')} >[Sort by first name] </button>
        <button onClick={() => handleSortChange('surname')}>[Sort by surname]</button>
       
        {sortedApplicants.map(mapApplicants)}
        {error && <p>{error}</p>}
    </div>
  );
};

export default AdminApplicantsView;