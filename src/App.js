import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './components/pages/AccordionPage';
import DropdownPage from './components/pages/DropdownPage';

const App = () => {
  return (
    <div>
      <Link to='/accordion'>Go to accordion</Link>
      <Link to='/dropdown'>Go to dropdown</Link>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};
export default App;
