import useScrollCount from '@Hooks/useScrollCount';
import { krwConvertor } from '@Utils/string';
import React from 'react';
import styled from '@emotion/styled';

const GoalText = styled.p`
  & > span {
    padding: 3px;
    color: #ff0000;
    font-weight: 600;
  }
`;

const FundingPrice = ({ item }) => {
  const price = item.achieved / item.goal / 1000;

  const { ref } = useScrollCount(item.goal, item.achieved, price, undefined, true);

  if (item.goal <= item.achieved) {
    // 성취 완료
    return (
      <div>
        <GoalText>
          {krwConvertor(item.achieved)}
          <span>완료</span>
        </GoalText>
      </div>
    );
  }
  return (
    <div>
      <p ref={ref} />
    </div>
  );
};

export default FundingPrice;
