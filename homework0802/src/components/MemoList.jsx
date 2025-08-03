import { useMemoContext } from "../context/MemoContext";
import MemoItem from "./MemoItem";

const MemoList = () => {
    const { memos } = useMemoContext();

    return (
        <div id="memoListContainer">
            {memos.length === 0 && <p>저장된 메모가 없습니다.</p>}
            {memos.map((memo, index) => (
                <MemoItem key={index} memo={memo} />
            ))}
        </div>
    );
};

export default MemoList;