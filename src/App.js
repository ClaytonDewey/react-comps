import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './components/pages/AccordionPage';
import DropdownPage from './components/pages/DropdownPage';
import ButtonPage from './components/pages/ButtonPage';
import ModalPage from './components/pages/ModalPage';
import TablePage from './components/pages/TablePage';

const App = () => {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
      </div>
    </div>
  );
};
export default App;
