import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './_app.scss';

// Components
import { Header, Sidebar } from './components';

// Screen Components
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);

  return (
    // <>
    //   <Header handleToggleSidebar={handleToggleSidebar} />
    //   <div className="app__container">
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    //     <Container fluid className="app__main">
    //       <HomeScreen />
    //     </Container>
    //   </div>

    // </>

    <LoginScreen />
  );
};

export default App;
