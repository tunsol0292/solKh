    import { createContext, useContext, useEffect, useState } from "react";

    const MemoContext = createContext();

    export const MemoProvider = ({ children }) => {
    const [memos, setMemos] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("memos");
        if (data) {
        setMemos(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("memos", JSON.stringify(memos));
    }, [memos]);

    const addMemo = (memo) => {
        setMemos((prev) => [memo, ...prev]); // 최신 순으로 정렬
    };

    const filteredMemos = memos.filter(
        (memo) =>
        memo.title.toLowerCase().includes(searchText.toLowerCase()) ||
        memo.content.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <MemoContext.Provider value={{ memos: filteredMemos, addMemo, setSearchText }}>
        {children}
        </MemoContext.Provider>
    );
    };

    export const useMemoContext = () => useContext(MemoContext);