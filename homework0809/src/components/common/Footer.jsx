import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const FooterContainer = styled(Box)`
    background-color: #2b4a7a;
    color: #e1e9f4;
    padding: 10px;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
        <Typography variant="body2">
            <pre>이용약관 | 서비스 | 운영정책 | 개인정보처리방침</pre>
            © 2025 내가 만든 명록 All rights reserved.
        </Typography>
        </FooterContainer>
    );
};

export default Footer;