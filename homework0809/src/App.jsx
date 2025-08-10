import { Routes, Route } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import GuestBookInsertPage from "./pages/GuestBookInsertPage";
import GuestBookListPage from "./pages/GuestBookListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<GuestBookListPage />} />
        <Route path="guest/book/list" element={<GuestBookListPage />} />
        <Route path="guest/book/insert" element={<GuestBookInsertPage />} />
      </Route>
    </Routes>
  );
}

export default App;