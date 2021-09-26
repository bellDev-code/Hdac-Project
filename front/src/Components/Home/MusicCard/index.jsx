import React, { useCallback, useContext } from 'react';
import { Wrapper, ImageWrapper, CardImage, TextWrapper, CardInfo, CardDay } from './styles';
import FundingPrice from '@Components/FundingPrice';
import { countDateByTimestamp } from '@Utils/date';
import { MusicContext } from '@Hooks/useMusicContext';
import { useHistory } from 'react-router';

const MusicCard = ({ item, animatedItem }) => {
  const history = useHistory();
  const { onSelected } = useContext(MusicContext);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      onSelected(item.id);
    },
    [onSelected],
  );

  const onClickToMarket = useCallback(() => {
    history.push('/marketplace');
  }, [history]);

  return (
    <Wrapper {...animatedItem} onClick={onClickToMarket}>
      <ImageWrapper onClick={onClick}>
        <CardImage src={item.url}></CardImage>
      </ImageWrapper>
      <TextWrapper>
        <CardInfo>
          {item.name} - {item.artist}
        </CardInfo>
        <FundingPrice item={item} />
        <CardDay>D-Day {countDateByTimestamp(item.exp)}</CardDay>
      </TextWrapper>
    </Wrapper>
  );
};

export default MusicCard;
