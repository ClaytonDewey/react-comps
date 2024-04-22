import Table from '../Table';

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-400', score: 5 },
    { name: 'Apple', color: 'bg-red-600', score: 3 },
    { name: 'Banana', color: 'bg-yellow-300', score: 1 },
    { name: 'Lime', color: 'bg-green-600', score: 4 },
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      header: () => <th className='bg-red-500 px-2'>Score</th>,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return <Table data={data} config={config} keyFn={keyFn} />;
};
export default TablePage;
