// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
// export default App;

import 'normalize.css';
import './styles/base.css';
import './styles/border.css';

import Guide from './containers/Guide';
import Login from './containers/Login';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Guide />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;