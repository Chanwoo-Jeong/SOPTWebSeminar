import styled, { css } from "styled-components";

const ResetBtnWrapper = styled.button`
  margin: 0 1rem;
  padding: 1rem;

  border: none;
  border-radius: 0.5rem;

  background-color: #13e51a;
  box-shadow: 0 0.8rem 0 #529e55;

  color: white;
  font-size: 3rem;

  :hover {
    cursor: pointer;
    margin-top: 0.5rem;
    box-shadow: 0 0.5rem 0 #529e55;
  }
`;

/** 헤더에 들어가는 큰 버튼 **/
const BigButton = ({ children, ...props }) => {
  return <ResetBtnWrapper {...props}>{children}</ResetBtnWrapper>;
};

const DifficultyBtnWrapper = styled.button`
  width: 10rem;
  height: 5rem;

  margin: 1rem;
  border: none;
  border-radius: 0.5rem;

  background-color: #13e51a;
  box-shadow: 0 0.8rem 0 #529e55;

  color: white;
  font-size: 2rem;

  cursor: pointer;

  ${(props) =>
    props.difficulty === props.currentDifficulty &&
    css`
      cursor: pointer;
      margin-top: 1.4rem;
      box-shadow: 0 0.4rem 0 #529e55;
    `};
`;

/** 난이도 변경 버튼 **/
const DifficultyButton = ({ children, ...props }) => {
  return <DifficultyBtnWrapper {...props}>{children}</DifficultyBtnWrapper>;
};

export { BigButton, DifficultyButton };
