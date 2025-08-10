import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import InstagramIcon from '@mui/icons-material/Instagram';

const AsideWrapper = styled.aside`
  width: 220px;
  padding: 20px;
  background-color: #e3edf9;
  border-right: 2px solid #2b4a7a;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  font-weight: bold;
  font-size: 16px;
  color: #1f3c72;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: #3a5e98;
    color: #f0f4ff;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  font-weight: bold;
  font-size: 16px;
  color: #1f3c72;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: #3a5e98;
    color: #f0f4ff;
  }
`;

const Aside = () => {
  return (
    <AsideWrapper>
      <MenuLink to="/guest/book/insert">
        <span role="img" aria-label="write">✍️</span>
        방명록 작성
      </MenuLink>
      <MenuLink to="/guest/book/list">
        <span role="img" aria-label="list">📋</span>
        방명록 목록
      </MenuLink>
      <ExternalLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="small" />
        인스타그램
      </ExternalLink>
    </AsideWrapper>
  );
};

export default Aside;