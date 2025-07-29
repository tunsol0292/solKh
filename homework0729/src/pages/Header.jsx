import styled from 'styled-components';

const Layout = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: linear-gradient(90deg, #4a90e2, #357ABD);
    color: white;
    padding: 10px 20px;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid #2a65b8;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Header = () => {
    return (
        <Layout>
        <div>로고</div>
        <div>프로필</div>
        <div>로그인 정보</div>
        </Layout>
    );
};

export default Header;
