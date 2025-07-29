import styled from 'styled-components';

const Layout = styled.footer`
    display: grid;
    place-items: center;
    background: linear-gradient(90deg, #357ABD, #4a90e2);
    color: white;
    padding: 20px;
    border-top: 2px solid #2a65b8;
    font-weight: 600;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
`;

const Footer = () => {
    return (
    <Layout>
        <div>문의: tunsol0292@gmail.com | 개인정보처리방침 | 이용약관</div>
    </Layout>
    );
};

export default Footer;
