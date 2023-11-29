import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SortingSearchItems = () => {
  return (
    <>
      <SortingContainer>
        <SortingButton>
          <input
            id="recommendation"
            type="radio"
            name="sorting"
            // checked={selectedOption === "recommendation"}
            // onChange={handleSortOptionChange}
          />
          <label className="custom-radio" htmlFor="recommendation">
            추천순
          </label>
          <input
            id="latest"
            type="radio"
            name="sorting"
            // checked={selectedOption === "latest"}
            // onChange={handleSortOptionChange}
          />
          <label className="custom-radio" htmlFor="latest">
            최신순
          </label>
          <input
            id="rating"
            type="radio"
            name="sorting"
            // checked={selectedOption === "rating"}
            // onChange={handleSortOptionChange}
          />
          <label className="custom-radio" htmlFor="rating">
            별점순
          </label>
        </SortingButton>
        <SearchInput>
          <input type="text" placeholder="리뷰 키워드 검색" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchInput>
      </SortingContainer>
    </>
  );
};

export default SortingSearchItems;

const SortingContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

//radio custom
const SortingButton = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  & input {
    appearance: none;
    &:checked + label {
      background-color: #14161a;
      border-color: #14161a;
      color: #f3f5f7;
      box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
    }
  }
  & label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0.75rem 1.5rem;
    border: solid 1px #ddd;
    font-size: 0.75rem;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    cursor: pointer;
  }
`;

const SearchInput = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  width: 200px;
  height: 55%;
  border: 1px solid #c5c7cb;
  cursor: pointer;
  & input {
    border: none;
    height: 100%;
  }
  & svg {
    position: absolute;
    left: 3%;
    top: 25%;
    height: 50%;
    color: #c5c7cb;
  }
`;
