import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #3179ba;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px;
  border-radius: 3px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

interface AddItemButtonProps {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  text-align: left;
  color: ${(props) => (props.dark ? "#000" : "#848484")};
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 3px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background 85ms ease-in;

  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.button`
  text-align: center;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background-color: #5aac44;
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
