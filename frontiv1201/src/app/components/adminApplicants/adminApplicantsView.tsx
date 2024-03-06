// adminApplicantsView.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { User } from '@/app/types/User';
import { Card, Container, Button, Title, Text, Input } from '@/app/styles/styles';

type SortKey = 'name' | 'surname'; // Add other keys as needed

type Props = {
  applicants: Array<User>;
};

// Updated styles for ApplicantsContainer to center contents
const ApplicantsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;

// Adjusting ApplicantCard to ensure consistency in width and margin
const ApplicantCard = styled(Card)`
  cursor: pointer;
  width: 90%; // Adjust width as needed
  margin: 1rem 0;

  &:hover {
    background-color: #f3f3f3;
  }
`;

// Sorting and Search Bar Container for alignment
const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px; // Adjust the space between controls
  width: 100%;
  padding: 1rem;
`;

// Adjusting SortButton for visible margins and consistent sizing
const SortButton = styled(Button)`
  flex-grow: 1;
  margin: 0.5rem;
`;

// Adjusting the width of SearchInput to not take up entire width
const SearchInput = styled(Input)`
  flex-grow: 2;
  max-width: 400px; // Adjust max-width as needed for design consistency
  margin: 0.5rem;
`;

const ApplicantDetails = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
`;

const CompetencyText = styled.p`
  color: red;
`;



const ApplicantTitle = styled(Title)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  `;

/**
  * Admin applicants view component
  * 
  * @param {Array<User>} applicants - Array of applicants
  * @returns - Admin applicants view component
 */

const AdminApplicantsView: React.FC<Props> = ({ applicants }) => {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedApplicantId, setExpandedApplicantId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApplicants, setFilteredApplicants] = useState<User[]>([]);

  useEffect(() => {
    // First, filter the applicants based on the search term
    const filtered = applicants.filter(applicant =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.pnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Then, sort the filtered applicants
    const sorted = filtered.sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredApplicants(sorted);
  }, [applicants, searchTerm, sortKey, sortOrder]);

  const handleSortChange = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  function renderCompetencies(competencies: any) {
    let result = competencies.competency_name + ' ' + Math.round(competencies.years_of_experience) + ' years';
    return <CompetencyText>{result}</CompetencyText>;
  }
  function renderAvailability(availability: any) {
    let result = (availability.fromDate as Date).toISOString() + ' - ' + (availability.toDate as Date).toISOString();
    return <CompetencyText>{result}</CompetencyText>;
  }

  function mapApplicants(applicant: User) {
    return (
      <ApplicantCard key={applicant.person_id} onClick={() => toggleApplicantDetails(applicant.person_id)}>
        <ApplicantTitle>{applicant.name} {applicant.surname}</ApplicantTitle>
        {expandedApplicantId === applicant.person_id && (
          <ApplicantDetails>
            <Text>Email: {applicant.email}</Text>
            <Text>PNR: {applicant.pnr}</Text>
            <Text>Username: {applicant.username}</Text>
            {applicant.competencies ? (
              <Text>Competencies: {applicant.competencies.map(renderCompetencies)}</Text>
            ) : (
              <Text>No competencies</Text>
            )}
            {applicant.availability ? (
              <Text>Availability: {applicant.availability.map(renderAvailability)}</Text>
            ) : (
              <Text>No availability</Text>
            )}
          </ApplicantDetails>
        )}
      </ApplicantCard>
    );
  }

  const toggleApplicantDetails = (id: number) => {
    setExpandedApplicantId(expandedApplicantId === id ? null : id);
  };

  return (<>
    <ApplicantsContainer>
      <SortButton onClick={() => handleSortChange('name')}>Sort by first name</SortButton>
      <SortButton onClick={() => handleSortChange('surname')}>Sort by surname</SortButton>
      <SearchInput
        type="text"
        placeholder="Search applicants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredApplicants.map(mapApplicants)}
    </ApplicantsContainer>
    </>
  );
};

export default AdminApplicantsView;
