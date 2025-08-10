import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Aside from "../components/common/Aside";
import { styled } from "@mui/material/styles";
import AsideAdd from "../components/common/AsideAdd";

const GridLayout = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 80px;
`;

const ContentLayout = styled("div")`
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  overflow: hidden;
`;

const MainContent = styled("main")`
  padding: 16px;
  background-color: #f5f5f5;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
`;

const MainPage = () => {
  return (
    <GridLayout>
      <Header />
      <ContentLayout>
        <Aside />
        <MainContent>
          <Outlet />
        </MainContent>
        <AsideAdd />
      </ContentLayout>
      <Footer />
    </GridLayout>
  );
};

export default MainPage;