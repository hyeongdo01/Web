import Menu from './components/Menu';

function App() {
  const menus = [
    {
      id: 'e1',
      title: '알촌',
      price: 5000,
    },
    { id: 'e2', title: '본찌', price: 9000 },
    {
      id: 'e3',
      title: '밥은화',
      price: 6000,
    },
    {
      id: 'e4',
      title: '율천회관',
      price: 11000,
    },
    { id: 'e5', title: '최가네', price: 9000 },
    { id: 'e6', title: '생순', price: 9000 },
    { id: 'e7', title: '찌개지존', price: 8000 },
    { id: 'e8', title: '일미', price: 8500 },
    { id: 'e9', title: '담은샤브칼국수', price: 12000 },
    { id: 'e10', title: '백령도칼국수', price: 7500 },
  ];

  return (
    <div>
      <h2>메뉴선택</h2>
      <Menu items={menus} />
    </div>
  );
}

export default App;
