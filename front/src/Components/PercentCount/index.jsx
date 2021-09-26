import React from 'react';
import styled from '@emotion/styled';
import useScrollCount from '@Hooks/useScrollCount';

const GoalText = styled.p`
  margin: 0;
  & > span {
    padding: 3px;
    color: #ff0000;
    font-weight: 600;
  }
`;

const PercentCount = ({ item }) => {
  const { ref } = useScrollCount(item.goal, 0, undefined, true);

  return (
    <GoalText>
      <div ref={ref} />
    </GoalText>
  );
};

export default PercentCount;
