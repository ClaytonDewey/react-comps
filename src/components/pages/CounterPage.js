import Button from '../Button';
import useCounter from '../../hooks/use-counter';

const CounterPage = ({ initialCount }) => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
export default CounterPage;
