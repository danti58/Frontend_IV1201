// adminApplicantsView.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { User } from '@/app/types/User';
import { Card, Container, Button, Title, Text, Input } from '@/app/styles/styles';

type SortKey = 'name' | 'surname'; // Add other keys as needed

type Props = {
  applicants: Array<User>;
};

// Styled components for this specific view
const ApplicantsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const ApplicantCard = styled(Card)`
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const ApplicantDetails = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
`;

const CompetencyText = styled.p`
  color: red;
`;

const SortButton = styled(Button)`
  margin-right: 1rem;
  max-width: 200px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ApplicantTitle = styled(Title)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  `;

  const SearchInput = styled(Input)`
  margin-bottom: 20px; // Adjust styling as necessary
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


  const sortedApplicants = [...applicants].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const [filteredApplicants, setFilteredApplicants] = useState(sortedApplicants);

  useEffect(() => {
    const results = applicants.filter(applicant =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.surname.toLowerCase().includes(searchTerm.toLowerCase()) || applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) || applicant.pnr.toLowerCase().includes(searchTerm.toLowerCase()) || applicant.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplicants(results);
  }, [searchTerm, applicants]);

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
          </ApplicantDetails>
        )}
      </ApplicantCard>
    );
  }

  const toggleApplicantDetails = (id: number) => {
    setExpandedApplicantId(expandedApplicantId === id ? null : id);
  };

  return (
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
  );
};

export default AdminApplicantsView;
