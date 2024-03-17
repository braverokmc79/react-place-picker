import forestWaterfallImg from './assets/forest-waterfall.jpg';
import desertDunes from './assets/desert-dunes.jpg';
import majesticMountains from './assets/majestic-mountains.jpg';
import caribbeanBeachImg from './assets/caribbean-beach.jpg';
import ruinsImg from './assets/ruins.jpg';
import rainforestImg from './assets/rainforest.jpg';
import northernLightsImg from './assets/northern-lights.jpg';
import japaneseTempleImg from './assets/japanese-temple.jpg';
import greatBarrierReefImg from './assets/great-barrier-reef.jpg';
import parisianStreetsImg from './assets/parisian-streets.jpg';
import grandCanyonImg from './assets/grand-canyon.jpg';
import venetianCanalsImg from './assets/venetian-canals.jpg';
import tajMahalImg from './assets/taj-mahal.jpg';
import keralaBackwatersImg from './assets/kerala-backwaters.jpg';
import africanSavannaImg from './assets/african-savanna.jpg';
import victoriaFallsImg from './assets/victoria-falls.jpg';
import machuPicchuImg from './assets/machu-picchu.jpg';
import amazonRiverImg from './assets/amazon-river.jpg';

export const AVAILABLE_PLACES = [
  {
    id: 'p1',
    title: '폭포 숲',
    image: {
      src: forestWaterfallImg,
      alt: '푸르른 숲 속에 쏟아지는 폭포가 있는 고요한 숲.',
    },
    lat: 44.5588,
    lon: -80.344,
  },
  {
    id: 'p2',
    title: '사하라 사막 언덕',
    image: {
      src: desertDunes,
      alt: '사하라 사막의 지평선까지 뻗어 있는 황금빛 모래 언덕.',
    },
    lat: 25.0,
    lon: 0.0,
  },
  {
    id: 'p3',
    title: '히말라야 봉우리',
    image: {
      src: majesticMountains,
      alt: '눈 덮인 장엄한 산봉우리 뒤로 지는 태양.',
    },
    lat: 27.9881,
    lon: 86.925,
  },
  {
    id: 'p4',
    title: '카리브해 해변',
    image: {
      src: caribbeanBeachImg,
      alt: '카리브해 해변의 깨끗한 백사장과 청록색 바다.',
    },
    lat: 18.2208,
    lon: -66.5901,
  },
  {
    id: 'p5',
    title: '고대 그리스 유적',
    image: {
      src: ruinsImg,
      alt: '그리스의 하늘을 배경으로 우뚝 솟은 역사적인 유적입니다.',
    },
    lat: 37.9715,
    lon: 23.7257,
  },
  {
    id: 'p6',
    title: '아마존 열대우림 캐노피',
    image: {
      src: rainforestImg,
      alt: '생명이 가득한 열대우림의 무성한 캐노피입니다.',
    },
    lat: -3.4653,
    lon: -62.2159,
  },
  {
    id: 'p7',
    title: '북극광',
    image: {
      src: northernLightsImg,
      alt: '별이 빛나는 하늘에 북극광이 눈부시게 표시됩니다.',
    },
    lat: 64.9631,
    lon: -19.0208,
  },
  {
    id: 'p8',
    title: '일본 사원',
    image: {
      src: japaneseTempleImg,
      alt: '단풍으로 둘러싸인 고대 일본 사원.',
    },
    lat: 34.9949,
    lon: 135.785,
  },
  {
    id: 'p9',
    title: '그레이트 배리어 리프',
    image: {
      src: greatBarrierReefImg,
      alt: '그레이트 배리어 리프(Great Barrier Reef) 수중의 생기 넘치는 산호 지형.',
    },
    lat: -18.2871,
    lon: 147.6992,
  },
  {
    id: 'p10',
    title: '파리 거리',
    image: {
      src: parisianStreetsImg,
      alt: '역사적인 건물과 카페가 있는 파리의 매력적인 거리.',
    },
    lat: 48.8566,
    lon: 2.3522,
  },
  {
    id: 'p11',
    title: '그랜드 캐년',
    image: {
      src: grandCanyonImg,
      alt: '그랜드 캐년의 깊은 협곡과 능선의 광활한 전망.',
    },
    lat: 36.1069,
    lon: -112.1129,
  },
  {
    id: 'p12',
    title: '베네치아 운하',
    image: {
      src: venetianCanalsImg,
      alt: '해질녘에 곤돌라가 미끄러지듯 움직이는 베네치아 운하의 반짝이는 물.',
    },
    lat: 45.4408,
    lon: 12.3155,
  },
  {
    id: 'p13',
    title: '타지 마할',
    image: {
      src: tajMahalImg,
      alt: '일출 동안 주변 바다에 반사되는 상징적인 타지마할.',
    },
    lat: 27.1751,
    lon: 78.0421,
  },
  {
    id: 'p14',
    title: '케랄라 역류',
    image: {
      src: keralaBackwatersImg,
      alt: '케랄라 역류의 고요한 물과 무성한 녹지.',
    },
    lat: 9.4981,
    lon: 76.3388,
  },
  {
    id: 'p15',
    title: '아프리카 사바나',
    image: {
      src: africanSavannaImg,
      alt: '아프리카 사바나의 광활한 풍경을 자유롭게 돌아다니는 야생동물들.',
    },
    lat: -2.153,
    lon: 34.6857,
  },
  {
    id: 'p16',
    title: '빅토리아 폭포',
    image: {
      src: victoriaFallsImg,
      alt: '잠비아와 짐바브웨 사이의 자연의 경이로움인 빅토리아 폭포의 강력한 폭포입니다.',
    },
    lat: -17.9243,
    lon: 25.8572,
  },
  {
    id: 'p17',
    title: '마추 픽추',
    image: {
      src: machuPicchuImg,
      alt: '아침 햇살에 빛나는 잉카의 역사적인 마추픽추 성채.',
    },
    lat: -13.1631,
    lon: -72.545,
  },
  {
    id: 'p18',
    title: '아마존 강',
    image: {
      src: amazonRiverImg,
      alt: '울창한 열대 우림으로 둘러싸인 아마존 강의 물을 항해합니다.',
    },
    lat: -3.4653,
    lon: -58.38,
  },
];
