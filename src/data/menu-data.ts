// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
    title: string;
    link: string;
  }[];
}

const menu_data: IMenuDataType[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'ABOUT US',
    link: '/about',
  },
  {
    id: 3,
    title: 'CALCULATOR',
    link: '/calculator',
  },
  {
    id: 4,
    title: 'Simulator',
    link: '/simulator',
  },
  {
    id: 5,
    title: 'Relic Optimizer',
    link: '/relic-optimizer',
  },
]

export default menu_data;