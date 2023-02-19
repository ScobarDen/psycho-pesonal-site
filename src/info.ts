import aboutCardImage0 from './assets/img/aboutCard/semeynye-trudnosti.jpg';
import aboutCardImage1 from './assets/img/aboutCard/sloghnosti-v-otnosheniyah.jpg';
import aboutCardImage2 from './assets/img/aboutCard/razvitie-i-samoocenka.jpg';
import aboutCardImage3 from './assets/img/aboutCard/emotsionalnye-i-psyhologicheskie-problemy.jpg';
import aboutCardImage4 from './assets/img/aboutCard/professionalnoe-samoopredelenie.jpg';
import { WorkWith } from './components/ui/WorkWith';
import { IScrollContent, IWorkWithField } from './components/common/types';

export const workWithArray: IWorkWithField[] = [
  {
    index: 0,
    label: 'Семейные трудности',
    image: aboutCardImage0,
    listItems: [
      'конфликты в семье',
      'брак на грани развода',
      'психологическое восстановление после развода',
      'сложности в воспитании детей',
      'повторяющиеся негативные сценарии',
    ],
  },
  {
    index: 1,
    label: 'Сложности в отношениях',
    image: aboutCardImage1,
    listItems: [
      'проблемы в отношениях с родителями',
      'сложности в отношениях с партером, поиск партнера',
      'проблемы в отношениях с друзьями, коллегами',
      'трудности в коммуникациях с детьми',
    ],
  },
  {
    index: 2,
    label: 'Личностное развитие и самооценка',
    image: aboutCardImage2,
    listItems: [
      'возрастные кризисы',
      'ощущение потери смысла жизни',
      'отсутствие жизненных целей',
      'потеря желания, энтузиазма и радости',
      'страх осуждения, неодобрения в свой адрес',
      'критическое отношение к людям',
    ],
  },
  {
    index: 3,
    label: 'Эмоциональные проблемы',
    image: aboutCardImage3,
    listItems: [
      'отсутствие эмоций, безразличие',
      'апатия, депрессия, хроническая усталость',
      'страхи, тревоги, панические атаки',
      'перепады настроения, агрессия, подавленность',
      'психосоматика',
    ],
  },
  {
    index: 4,
    label: 'Профессиональное самоопределение',
    image: aboutCardImage4,
    listItems: [
      'сложности с пониманием своих талантов и способностей',
      'профессиональное выгорание',
      'осознание неправильного выбора профессии',
      'желание поменять сферу деятельности',
    ],
  },
];

export const aboutMeContent: IScrollContent[] = [
  {
    id: 'section1',
    content: 'С чем я работаю',
    component: WorkWith,
  },
  {
    id: 'section2',
    content: 'Обо мне',
    component: WorkWith,
  },
  {
    id: 'section3',
    content: 'Образование',
    component: WorkWith,
  },
];
