import { styled } from "styled-components";
import { FootSizeUl, ScopeUl } from "./FilterUlContainer";

const FilterItems = () => {
  return (
    <>
      <FilterContainer>
        <ScopeUl />
        <FootSizeUl />
      </FilterContainer>
    </>
  );
};

export default FilterItems;

const FilterContainer = styled.div`
  border-top: 1px solid #edf1f6;
  border-bottom: 1px solid #edf1f6;
  display: flex;
  width: 100%;
  height: 3rem;
`;
