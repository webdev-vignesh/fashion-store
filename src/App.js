import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './Routes/Layout';
import AllRoute from './Routes/Route';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route component={AllRoute} />
        </Layout>
      </Router>
    </>
  );
}

export default App;

