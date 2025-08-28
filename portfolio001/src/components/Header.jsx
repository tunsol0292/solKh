import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const HeaderStyled = styled("header")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  zIndex: 1000,
}));

const NavStyled = styled("nav")(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  padding: "1rem 0",
  a: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    transition: "color 0.3s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <Link to="/">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;