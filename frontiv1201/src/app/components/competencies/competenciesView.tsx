// CompetenciesView.tsx

import React from 'react';
import { CompetencyData } from '@/app/api';
import styled from 'styled-components';
import { Container, Button, Input, Card, Title, Text } from '@/app/styles/styles';

// Styled components for this view
const CompetenciesCard = styled(Card)`
  max-width: 500px;
  margin: 2rem auto;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 5px;
`;

const SuccessMessage = styled(Text)`
  color: #4CAF50; // Success message color, adjust as needed
`;

const FormButton = styled(Button)`
  background-color: #4CAF50; // Button background color, adjust as needed
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
`;
const Select = styled.select`
  padding: 10px 20px;
  margin-top: 10px;
`;

interface Props {
  competencyData: CompetencyData;
  setCompetencyData: (competencyData: CompetencyData) => void;
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  setSuccessMessage: (successMessage: string) => void;
}

const CompetenciesView: React.FC<Props> = ({
  competencyData,
  setCompetencyData,
  handleChange,
  successMessage,
}) => (
  <CompetenciesCard>
    {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    <Form onSubmit={handleChange}>
      <FormField>
        <Label>Competency name:</Label>
        <Select
          value={competencyData.competencyName}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCompetencyData({ ...competencyData, competencyName: e.target.value })}
        >
          <option value="ticket sales">Ticket sales</option>
          <option value="lotteries">Lotteries</option>
          <option value="roller coaster operation">Roller coaster operation</option>
        </Select>
      </FormField>
      <FormField>
        <Label>Years of experience:</Label>
        <Input
          type="number"
          value={competencyData.yearsOfExperience}
          onChange={(e) => setCompetencyData({
            ...competencyData,
            yearsOfExperience: parseInt(e.target.value) || 0,
          })}
        />
      </FormField>
      <FormButton type="submit">ADD</FormButton>
    </Form>
  </CompetenciesCard>
);

export default CompetenciesView;
