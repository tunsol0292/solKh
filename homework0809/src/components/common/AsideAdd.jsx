import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const AddWrapper = styled.aside`
  width: 220px;
  height: 100vh;
  padding: 20px;
  background-color: #e3edf9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const AdImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  user-select: none;
  object-fit: cover;
`;

const AsideAdd = () => {
  const baseUrls = [
    "https://picsum.photos/seed/1/220/300",
    "https://picsum.photos/seed/2/220/300",
    "https://picsum.photos/seed/3/220/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % baseUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [baseUrls.length]);

  return (
    <AddWrapper>
      <AdImage
        src={baseUrls[currentIndex]}
        alt={`광고 이미지 ${currentIndex + 1}`}
      />
    </AddWrapper>
  );
};

export default AsideAdd;