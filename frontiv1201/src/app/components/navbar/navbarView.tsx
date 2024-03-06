// navbarView.tsx

import { UserState } from '@/app/redux/types';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@/app/styles/styles';
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #6c757d;
  color: white;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 1rem;
  }
`;

type NavbarViewProps = {
  loginDisplay: string | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
};

const NavbarView: React.FC<NavbarViewProps> = ({ loginDisplay, onLoginClick, onLogoutClick }) => {
  const { role_id } = useSelector((state: any) => state.auth.userState as UserState);
  const isAdmin = role_id === 1;

  return (
    <>
      <NavBar>
        <Logo>Logo here</Logo>
        <NavLink href="/">Home</NavLink>
        {role_id !== 0 && (
          <>
            <NavLink href={isAdmin ? "/adminApplicants" : "/competencies"}>
              {isAdmin ? "See Applicants" : "Competencies"}
            </NavLink>
            {!isAdmin && <NavLink href="/availability">Availability</NavLink>}
          </>
        )}
        <LoginInfo>
          {loginDisplay ? (
            <>
              <span>Logged in as {loginDisplay}</span>
              <Button onClick={onLogoutClick}>Logout</Button>
            </>
          ) : (
            <Button onClick={onLoginClick}>Login</Button>
          )}
        </LoginInfo>
      </NavBar>
    </>
  );
};

export default NavbarView;
