// styles.ts
import styled, { css } from 'styled-components';

export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  background: '#343a40', // a soft background color
};

export const fonts = {
  base: '16px',
  fontPrimary: '"Helvetica Neue", Arial, sans-serif',
};

// General flex center snippet
export const CenteredFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Button with rounded corners and hover effect
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px; // rounded corners
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.primary};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; // smooth transition for hover effect
  
  &:hover {
    background-color: ${colors.dark};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // subtle shadow on hover
  }

  &:focus {
    outline: none;
  }
`;

// Input with rounded corners
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 30px; // rounded corners
  border: 2px solid ${colors.secondary};
  margin: 5px 0; // spacing
  transition: border-color 0.3s ease; // smooth transition for focus

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

// Card component for a sleek modern look
export const Card = styled.div`
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px; // rounded corners
  padding: 20px;
  margin: 10px 0;
  transition: box-shadow 0.3s ease; // smooth transition for hover effect

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const GlobalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.background};
    font-size: ${fonts.base};
    font-family: ${fonts.fontPrimary};
    min-height: 100vh;
    `;

// Container with max width and padding
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

// Modern-looking header
export const Header = styled.header`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 10px 20px;
  border-radius: 15px 15px 0 0; // only top corners rounded
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Typography
export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.dark};
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${colors.secondary};
  line-height: 1.6;
`;

