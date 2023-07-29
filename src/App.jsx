import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import './App.css';
import SuperHero from './component/SuperHero';
import RQSuperHero from './component/RQSuperHero';
import Home from './component/Home';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHero />} />
          <Route path="/rq-super-heroes" element={<RQSuperHero />} />
        </Routes>
      </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false } position='bottom-right' />
    </QueryClientProvider>
    
  );
}

export default App;
