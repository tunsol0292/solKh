import { useMemoContext } from "../context/MemoContext";

const MemoSerch = () => {
    const { setSearchText } = useMemoContext();

return (
    <div className="search-container">
        <input
            type="text"
            placeholder="메모장 검색해주세요. 🔍"
            onChange={(evt) => setSearchText(evt.target.value)}
            id="serchBar"
        />
    </div>
);
};

export default MemoSerch;