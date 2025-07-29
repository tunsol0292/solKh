import styled from 'styled-components';

const Layout = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 40px;
    justify-content: center;
    background-color: #f0f8ff;
    padding: 20px 0;
    border-bottom: 2px solid #ccc;

    a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
        color: #007acc;
    }
}
`;

const Nav = () => {
    return (
    <Layout>
        <a href="#">공지사항</a>
        <a href="#">게시물</a>
        <a href="#">갤러리</a>
        <a href="#">마이페이지</a>
    </Layout>
  );
};

export default Nav;
