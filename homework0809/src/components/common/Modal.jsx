import styled from "@emotion/styled";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #0000007f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 600px;
  max-width: 95%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.h2`
  margin-bottom: 16px;
  color: #3a5e98;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2b4a7a;
  display: block;
  margin-top: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
`;

const WriterInput = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #e7e7e7;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;

  & > button {
    margin-left: 8px;
  }
`;


const Button = styled.button`
  padding: 8px 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: white;
  background-color: #3a5e98;

  &:hover {
    background-color: #2b4a7a;
  }
`;

const Modal = ({ post, onClose, onSave }) => {
  const [editData, setEditData] = useState(post);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editData);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(evt) => evt.stopPropagation()}>
        <ModalHeader>게시물 상세 및 수정</ModalHeader>

        <Label>제목</Label>
        <Input
          id="title"
          name="title"
          value={editData.title}
          onChange={handleChange}
        />

        <Label>내용</Label>
        <TextArea
          id="content"
          name="content"
          rows={8}
          value={editData.content}
          onChange={handleChange}
        />

        <Label>작성자</Label>
        <WriterInput
          id="writer"
          name="writer"
          value={editData.writer}
          onChange={handleChange}
          readOnly
        />

        <ButtonGroup>
          <Button bg="#c94f4f" hoverBg="#9e3b3b" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleSave}>저장</Button>
        </ButtonGroup>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
