import styled from "@emotion/styled";
import { useState } from "react";

const StarPoint = [1, 2, 3, 4, 5];

const StarRating = (): JSX.Element => {
  const [rating, setRating] = useState(3);

  const Wrapper = styled.div`
    display: flex;
  `;

  const TempStar = styled.div`
    width: 50px;
    height: 50px;
    background-color:red
    background-image: url(${(props: { active: boolean }) =>
      props.active
        ? "/src/assets/icon/icon_staron.png"
        : "/src/assets/icon/icon_staroff.png"});
    background-position: center;
    background-repeat: no-repeat;
  `;
  const ResultScore = styled.div`
    font-weight: bold;
  `;

  const onClickStar = (num: number): void => {
    setRating(num);
  };

  return (
    <>
      <Wrapper>
        {StarPoint.map((num) => {
          return (
            <>
              <TempStar
                key={num}
                active={num <= rating}
                onClick={() => onClickStar(num)}
              />
            </>
          );
        })}
      </Wrapper>
      <ResultScore>{rating}점</ResultScore>
    </>
  );
};
export default StarRating;
