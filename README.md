# IV1201 Design of Global Applications 

Welcome to the frontend repository of our project! This repository contains the codebase for the frontend components of our web-based recruitment tool designed for an amusement park. 






## Background
The amusement park is recruiting staff for the coming season and aims to attract 15,000 applications during a two-week period. With an existing shaky recruitment application and significant maintenance costs, consultants have been hired to fix bugs. However, introducing new functionality into this system is challenging. Thus, we've been tasked to build a new, robust, scalable, and well-documented system.

## The Recruitment System
The system distinguishes between two types of users: applicants and recruiters. Applicants can register and apply for positions, while recruiters manage applications. The system is divided into two parts: registration of job applications and administration of applications.

### Registration of Applications
Applicants register using a web browser and provide personal information, a competency profile, and availability.

#### Current Functionality
- Applicants must register before submitting an application.
- Registered users can submit a job application, including personal information, competency profile, and availability.

#### Future Functionality
- The online application form will be available in multiple languages.

### Administration of Job Applications
Recruiters can manage job applications using a web browser.

#### Current Functionality
- Recruiters can sort applications and mark them as accepted, rejected, or unhandled. The web app has been tested successfully in 4 browsers; Safari, Firefox, Chrome and Edge.

#### Future Functionality
- A mobile app for recruiters to handle applications.
- The system itself can select job applications of interest based on configurable decision-making components.

## Existing Database Model
The current system has an undocumented database. Existing data must be transferred to the new system using provided SQL scripts.

## Use Cases
Use cases detail desired functionality, including creating an account, login, applying for a position, listing all applications, and showing application details.


## Project Overview
Our frontend architecture is built using **Next.js, React, and TypeScript**. It's designed to provide a user-friendly interface with seamless navigation and interaction. The key features of our frontend include:

- **User Authentication:** Login and registration functionality to authenticate users.
- **Competency Management:** Capability to add and view competencies.
- **Job Application:** Ability for users to apply for job positions.
- **UX/UI Design:** User-friendly design ensuring a smooth user experience.

## Getting Started
To get started with development, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using:
   git clone https://github.com/danti58/Frontend_IV1201/


3. **Install Dependencies:** Navigate into the cloned repository directory and install dependencies using:
npm install


3. **Run the Development Server:** Start the development server using:
npm run dev



4. **Start Coding:** You're all set to start coding! Make your changes, add new features, or fix bugs.

## Folder Structure
The folder structure of our frontend repository is organized as follows:

- **`/pages`:** Contains Next.js page components.
- **`/components`:** Houses reusable React components.
- **`/styles`:** Stores styling files (e.g., CSS or SCSS) for components.
- **`/public`:** Public assets such as images or fonts.

Feel free to explore and modify these directories as needed.

## Contributing
We welcome contributions from everyone! If you'd like to contribute to the frontend development, please follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Make your changes, ensuring code quality and adherence to coding standards.
3. Test your changes thoroughly.
4. Submit a pull request, describing your changes in detail.

