import MemoList from "./components/MemoList";
import MemoSerch from "./components/MemoSerch";
import MemoWrite from "./components/MemoWrite";
import { MemoProvider } from "./context/MemoContext";
import './App.css';
import './css/Memo.css';

const App = () => (
  <>
    <MemoProvider>
      <h1>나만의 작은 메모장</h1>
      <br />
      <MemoSerch/>
      <div className="memoWrapper">
          <MemoWrite />
          <MemoList />
      </div>
    </MemoProvider>
  </>
);

export default App;