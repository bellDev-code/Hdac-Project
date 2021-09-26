import React, { createContext, useCallback, useState } from 'react';
import AlbumImage01 from '@Assets/Img/MusicList/music03.jpg';
import AlbumImage02 from '@Assets/Img/MusicList/aespa-album.jpg';
import AlbumImage03 from '@Assets/Img/MusicList/butter.jpg';
import AlbumImage04 from '@Assets/Img/MusicList/qeendom.jpg';
import AlbumImage05 from '@Assets/Img/MusicList/sinho.jpg';
import AlbumImage06 from '@Assets/Img/MusicList/weekend.jpg';

const CardData = [
  {
    id: 0,
    url: `${AlbumImage06}`,
    name: 'WEEKEND',
    artist: '태연',
    achieved: 3000,
    goal: 8000000,
    exp: 1634282000000,
  },
  {
    id: 1,
    url: `${AlbumImage01}`,
    name: 'THE ALBUM',
    artist: '블랙핑크(BlackPink)',
    achieved: 7000,
    goal: 9000000,
    exp: 1632282000000,
  },
  {
    id: 2,
    url: `${AlbumImage03}`,
    name: 'BUTTER',
    artist: '방탄소년단(BTS)',
    achieved: 10000000,
    goal: 10000000,
    exp: 1636222000000,
  },
  {
    id: 3,
    url: `${AlbumImage04}`,
    name: 'QUEENDOM',
    artist: '레드벨벳(RED VELVET)',
    achieved: 3000,
    goal: 8000000,
    exp: 1635282000000,
  },
  {
    id: 4,
    url: `${AlbumImage02}`,
    name: 'NEXT LEVEL',
    artist: 'Aespa(에스파)',
    achieved: 7000,
    goal: 9000000,
    exp: 1638282000000,
  },
  {
    id: 5,
    url: `${AlbumImage05}`,
    name: '신호등',
    artist: '이무진',
    achieved: 10000000,
    goal: 10000000,
    exp: 1635282000000,
  },
];

export const MusicContext = createContext(undefined);

export const MusicContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const onSelected = useCallback(
    (id) => {
      console.log(id);
      setSelected(id);
    },
    [setSelected],
  );

  return (
    <MusicContext.Provider
      value={{
        fundingList: CardData,
        selected: selected,
        onSelected: onSelected,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

{
  /* <MusicContextProvider>
  <MarketBanner />
  <MusicList />
</MusicContextProvider>; */
}

/**
 * 
 * MusicList
 * 
 * const context = useContext(MusicContext)
 * const {value} = useContext(MusicContext)

 */
