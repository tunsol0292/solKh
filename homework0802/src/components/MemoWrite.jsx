import React, { useState } from 'react';
import { useMemoContext } from '../context/MemoContext';

const MemoWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { addMemo } = useMemoContext();

    const handleSubmit = (evt) => {
        evt.preventDefault(); // evt 막기
        if (!title || !content) return;

        const newMemo = {
            title,
            content,
        };
        addMemo(newMemo);
        setTitle("");
        setContent("");
    };

    return (
        <>
            <form onSubmit={handleSubmit} id='memoWriteForm'>
                <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="제목을 입력하세요." id='memoWriteTitle' />
                <br />
                <textarea value={content} onChange={(evt) => setContent(evt.target.value)} placeholder="내용을 입력하세요." id='memoWriteContent' />
                <br />
                <button type="submit" id='memoWriteBtn'>저장</button>
                <br />
            </form>
        </>
    );
};

export default MemoWrite;