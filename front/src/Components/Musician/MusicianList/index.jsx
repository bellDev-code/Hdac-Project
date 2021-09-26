import React from 'react';
import {
  Container,
  StyledCarousel,
  Wrapper,
  MusicWrapper,
  ImageWrapper,
  MusicianImg,
  TextWrapper,
  MusicianName,
  OneWrapper,
  MusicianPosition,
  MusicianTitle,
  TwoWrapper,
  MusicianInterview,
} from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Musician01 from '@Assets/Img/Artist/aespa.jpg';
import Musician02 from '@Assets/Img/Artist/bts.jpg';
import Musician03 from '@Assets/Img/Artist/redvelvet.jpg';
import Musician04 from '@Assets/Img/Artist/tae.jpg';

const musicianData = [
  {
    id: 0,
    url: `${Musician01}`,
    name: '에스파',
    title: 'Next-Level',
    position: '아이돌, 가수',
    interview:
      '콘셉트를 처음 들었을 때 어떻게 전개되고, 우리의 음악과 퍼포먼스를 통해 전할 수 있을지 매우 흥미롭고 설레었어요. 이전과 전혀 다른 신선한 콘셉트를 함께 할 수 있어 매우 신나요. 아티스트로서 독창적인 창작물을 선보일 수 있는 좋은 기회라고 생각해요. 새로운 싱글 ‘넥스트 레벨’은 파워풀한 보컬과 버라이어티한 곡 진행이 돋보이는 힙합 댄스 트랙이에요. 가사에는 에스파와 각자의 아바타인 ‘아이(ae)’가 연결을 방해하고 세상을 혼란에 빠트린 블랙 맘마를 찾기 위해 광야(Kwangya)로 떠나는 여정을 담고 있어요.',
  },
  {
    id: 1,
    url: `${Musician02}`,
    name: '방탄소년단',
    title: 'Butter',
    position: '아이돌, 가수',
    interview:
      '우리가 힙합 크루로 시작했는데 방 PD님은 사회에 필요한 얘기를 하는 친구들이 필요하다고 생각하셨다. 우린 실제 그런 것을 구현할 수 있는 래퍼였고, 퍼포먼스 실력을 갖춘 멤버들도 있었다. 방탄소년단의 큰 키워드에서 보면 성공 비결은 "진심+실력"이라고 생각한다. 진심은 대중의 눈에 다 보인다. 하지만 사람들은 SNS로 소통을 많이 했다는 것에만 주목한다. 더 중요한 건 우린 가수이니 음악과 퍼포먼스의 퀄리티가 무조건 좋아야 한다는 점이다. 그걸 갖춘 상태에서 우리가 말하고 싶은 진심과 메시지, 우리가 꾸준히 한 소통 빈도수가 합쳐졌고, 그 모든 걸 방 PD님이 선구안을 갖고 밀어줬다. 자유를 줬고 우리도 플레이어로서 "하이 리스크"(High Risk)를 잘 짊어지면서 "하이 리턴"(High Return)을 했다. 회사와 우리의 공이 반반으로, 기획사와 아티스트가 비즈니스 파트너로 협업 관계를 맺어가는 측면에서 바람직한 모델이라고 생각한다.',
  },
  {
    id: 2,
    url: `${Musician03}`,
    name: '레드벨벳',
    title: 'QUEENDOM',
    position: '아이돌, 가수',
    interview:
      '이번 앨범에는 중독성 강한 훅과 멤버들의 경쾌한 보컬이 돋보이는 청량한 분위기의 타이틀 곡 "Queendom"을 비롯해 "Pose"(포즈) "Knock On Wood"(노크 온 우드) "Better Be"(베터 비) "Pushin" N Pullin"(푸싱 앤 풀링) "다시, 여름 (Hello, Sunset)" 등 다채로운 매력의 총 6곡이 수록되어 있다. 이에 레드벨벳은 "오랜만의 컴백이라 행복하면서도 설레고, 데뷔 때처럼 떨리기도 한다"라며 "이번 앨범은 멤버들의 성숙해진 보컬과 레드벨벳만이 가진 다양한 색깔을 느낄 수 있다. 6곡 전부 설레는 마음을 담아 열심히 준비했으니 무더운 여름에 편안하게 즐겨 주시고, 많은 분들께 좋은 에너지가 전해졌으면 좋겠다"라는 소감을 밝혔다.',
  },
  {
    id: 3,
    url: `${Musician04}`,
    name: '태연',
    title: 'WEEKEND',
    position: '가수',
    interview:
      '오랜만에 밝은 신곡으로 인사드려서 너무 기쁘다. "Weekend"가 밝은 곡이다 보니 저도 웃으면서 작업할 수 있었고, 앞으로도 많이 웃으며 좋은 기운 드리고 싶어요. 특별히 높은 고음이나 애드리브는 없습니다. 어느 한 부분만 특징으로 잡지 않고, 전체적으로 자연스러운 흐름을 가진 곡입니다. 여러분들이 편안하게 들으실 수 있도록 최대한 무심하고 여유롭게 부르려고 노력했습니다.',
  },
];

const MusicianList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <StyledCarousel {...settings}>
        {musicianData.map((item, index) => {
          return (
            <Wrapper key={index}>
              <MusicWrapper>
                <ImageWrapper>
                  <MusicianImg src={item.url}></MusicianImg>
                </ImageWrapper>
                <TextWrapper>
                  <OneWrapper>
                    <MusicianName>{item.name}</MusicianName>
                    <MusicianPosition>{item.position}</MusicianPosition>
                    <MusicianTitle>{item.title}</MusicianTitle>
                  </OneWrapper>
                  <TwoWrapper>
                    <MusicianInterview>{item.interview}</MusicianInterview>
                  </TwoWrapper>
                </TextWrapper>
              </MusicWrapper>
            </Wrapper>
          );
        })}
      </StyledCarousel>
    </Container>
  );
};

export default MusicianList;
