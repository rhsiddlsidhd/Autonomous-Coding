import React, { useState } from "react";
import styled from "styled-components";

const PageNation = ({ currentPage, totalPages, handlePageChange, limit }) => {
  const [groupPage, setGroupPage] = useState(1);

  const firstGroupPageNumber = (groupPage - 1) * limit + 1;
  const lastGroupPageNumber = groupPage * limit;

  const isPreviousDisabled = groupPage === 1 && currentPage === 1;
  const isNextDisabled = lastGroupPageNumber >= totalPages;

  const handlePreviousClick = () => {
    if (currentPage > firstGroupPageNumber) {
      handlePageChange(currentPage - 1);
    } else {
      handlePageChange(firstGroupPageNumber - 1);
      setGroupPage(Math.max(groupPage - 1, 1));
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      handlePageChange(lastGroupPageNumber + 1);
      setGroupPage(groupPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (
      let page = firstGroupPageNumber;
      page <= lastGroupPageNumber && page <= totalPages;
      page++
    ) {
      buttons.push(
        <PageButton
          key={page}
          onClick={() => handlePageChange(page)}
          $active={page === currentPage}
        >
          {page}
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <NavigationWrapper>
      <PageButton onClick={handlePreviousClick} disabled={isPreviousDisabled}>
        이전
      </PageButton>
      {renderPageButtons()}
      <PageButton onClick={handleNextClick} disabled={isNextDisabled}>
        다음
      </PageButton>
    </NavigationWrapper>
  );
};

export default PageNation;

const NavigationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.$active ? "#007bff" : "#f6f6f6")};
  color: ${(props) => (props.$active ? "#fff" : "#14161a")};
  border: 1px solid #ced4da;
  border-radius: 5px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
