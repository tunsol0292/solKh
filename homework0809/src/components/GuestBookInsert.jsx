import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 90%;
  max-width: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2b4a7a;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #3a5e98;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b4a7a;
  }
`;

const generateId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

const GuestBookInsert = () => {
  const [vo, setVo] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const navi = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setVo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("guestBookData") || "[]");
    const newEntry = {
      id: generateId(), // 무작위 아이디 생성!!
      ...vo,
    };
    const updatedData = [...storedData, newEntry];

    localStorage.setItem("guestBookData", JSON.stringify(updatedData));
    setVo({ title: "", content: "", writer: "" });
    alert('등록 완료됐습니다.');
    navi("/guest/book/list");
  };

  return (
    <>
      <br />
      <Form onSubmit={handleSubmit}>
        <Label>제목</Label>
        <Input
          id="title"
          name="title"
          value={vo.title}
          onChange={handleChange}
        />

        <Label>내용</Label>
        <TextArea
          id="content"
          name="content"
          rows={5}
          value={vo.content}
          onChange={handleChange}
        />

        <Label>작성자</Label>
        <Input
          id="writer"
          name="writer"
          value={vo.writer}
          onChange={handleChange}
        />

        <Button type="submit">등록</Button>
      </Form>
    </>
  );
};

export default GuestBookInsert;