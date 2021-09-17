import useScrollCount from '@Hooks/useScrollCount';
import { krwConvertor } from '@Utils/string';
import React from 'react';

const FundingPrice = ({ item }) => {
  const kozel = item.achieved / item.goal / 1000;

  const { ref } = useScrollCount(item.goal, item.achieved, kozel, undefined, true);

  if (item.goal <= item.achieved) {
    // 성취 완료
    return (
      <div>
        <p>{krwConvertor(item.achieved)}!!</p>
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
