import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export interface RegisterData {
  name: string;
  surname: string;
  pnr: string;
  email: string;
  password: string;
  role_id: string;
  username: string;
}

interface RegisterResponse {
  message: string;
  personId?: string;
}

export interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token?: string;
}


export interface CompetencyData {
  // Properties of the competency data 
  competencyName: string;
  
}

interface AddCompetencyResponse {
  message: string;
}

export const registerPerson = async (registerData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(`${BASE_URL}/register`, registerData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginPerson = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(`${BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Define the function to add competency
export const addCompetency = async (competencyData: CompetencyData): Promise<AddCompetencyResponse> => {
  try {
    const response: AxiosResponse<AddCompetencyResponse> = await axios.post(`${BASE_URL}/addCompetencyToPerson`, competencyData);
    return response.data;
  } catch (error) {
    console.error('Error adding competence:', error);
    throw error;
  }
};