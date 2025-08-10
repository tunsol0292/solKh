import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledHeader = styled.header`
    background-color: #3a5e98;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
`;

const StyledTitle = styled(Typography)`
    color: #e1e9f4;
`;

const Header = () => {
    return (
        <StyledHeader>
        <StyledTitle variant="h3">📖 방명록</StyledTitle>
        </StyledHeader>
    );
};

export default Header;