import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./common/Modal";

const Table = styled.table`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #3a5e98;
  color: #fff;
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #2b4a7a;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #d0d9f2;
  vertical-align: middle;
  color: #1f3c72;
`;

const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #e3edf9;
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #c94f4f;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  &:hover {
    color: #9e3b3b;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 8px 12px;
  margin: 16px auto;
  display: block;
  border: 1px solid #3a5e98;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

const GuestBookList = () => {
  const [guestBookData, setGuestBookData] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("guestBookData") || "[]");
    setGuestBookData(storedData);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const updatedData = guestBookData.filter((item) => item.id !== id);
      setGuestBookData(updatedData);
      localStorage.setItem("guestBookData", JSON.stringify(updatedData));
      alert("삭제됨!");
      if (selectedPost?.id === id) setSelectedPost(null);
    }
  };

  const handleSearchChange = (evt) => {
    setSearchBar(evt.target.value);
  };

  const filteredData = guestBookData.filter(({ title, content, writer }) => {
    const keyword = searchBar.toLowerCase();
    return (
      title.toLowerCase().includes(keyword) ||
      content.toLowerCase().includes(keyword) ||
      writer.toLowerCase().includes(keyword)
    );
  });

  const handleRowClick = (post) => {
    setSelectedPost(post);
  };

  const handleModalClose = () => {
    setSelectedPost(null);
  };

  const handleSave = (updatedPost) => {
    const updatedData = guestBookData.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setGuestBookData(updatedData);
    localStorage.setItem("guestBookData", JSON.stringify(updatedData));
    setSelectedPost(null);
    alert("수정 완료!");
  };

  return (
    <>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchBar}
        onChange={handleSearchChange}
        aria-label="검색"
      />
      <Table>
        <Thead>
          <Tr>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>삭제</Th>
          </Tr>
        </Thead>
        <tbody>
          {filteredData.length === 0 ? (
            <Tr>
              <Td colSpan={4} style={{ textAlign: "center", color: "#1f3c72" }}>
                방명록 데이터가 없습니다.
              </Td>
            </Tr>
          ) : (
            filteredData.map(({ id, title, content, writer }) => (
              <Tr
                key={id}
                onClick={() => handleRowClick({ id, title, content, writer })}
              >
                <Td>{title}</Td>
                <Td>{writer}</Td>
                <Td>
                  <DeleteButton
                    onClick={(evt) => {
                      evt.stopPropagation();
                      handleDelete(id);
                    }}
                    aria-label="삭제"
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </Td>
              </Tr>
            ))
          )}
        </tbody>
      </Table>

      {selectedPost && (
        <Modal post={selectedPost} onClose={handleModalClose} onSave={handleSave} />
      )}
    </>
  );
};

export default GuestBookList;