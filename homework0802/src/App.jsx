import MemoList from "./components/MemoList";
import MemoSerch from "./components/MemoSerch";
import MemoWrite from "./components/MemoWrite";
import { MemoProvider } from "./context/MemoContext";
import './App.css';
import './css/Memo.css';

const App = () => (
  <MemoProvider>
    <h1>📝 나만의 메모장</h1>
    <MemoSerch />
    <MemoWrite />
    <MemoList />
  </MemoProvider>
);

export default App;