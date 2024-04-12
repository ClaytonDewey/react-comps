import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      id: 'a78as',
      label: 'Can I use React on a project?',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat atque facilis inventore vel tempore?',
    },
    {
      id: '89as3',
      label: 'Can I use JavaScript on a project?',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat atque facilis inventore vel tempore?',
    },
    {
      id: '93jfu',
      label: 'Can I use CSS on a project?',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat atque facilis inventore vel tempore?',
    },
  ];

  return <Accordion items={items} />;
};
export default App;
