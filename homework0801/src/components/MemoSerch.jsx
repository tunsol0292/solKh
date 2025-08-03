import { useMemoContext } from "../context/MemoContext";

const MemoSerch = () => {
    const { setSearchText } = useMemoContext();

return (
    <div className="search-container">
        <input
            type="text"
            placeholder="제목 또는 내용을 검색하세요. (키워드 검색)"
            onChange={(evt) => setSearchText(evt.target.value)}
            id="serchBar"
        />
    </div>
);
};

export default MemoSerch;