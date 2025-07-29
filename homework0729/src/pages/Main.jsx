import Counter from "../components/Counter";
import Counter_Minus10 from "../components/Counter_Minus10";
import Counter_Plus10 from "../components/Counter_Plus10";
import CounterMinus from "../components/CounterMinus";
import styled from 'styled-components';

const Layout = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #e6f2ff;
    min-height: 400px;
`;

const Main = () => {
    return (
    <Layout>
        <Counter />
        <CounterMinus />
        <Counter_Minus10/>
        <Counter_Plus10/>
    </Layout>
    );
};

export default Main;
