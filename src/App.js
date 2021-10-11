import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './_app.scss';

// Components
import { Header, Sidebar } from './components';

// Screen Components
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import WatchScreen from './screens/WatchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import SubscriptionScreen from './screens/SubscriptionScreen/SubscriptionScreen';
import ChannelScreen from './screens/ChannelScreen/ChannelScreen';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push('/auth');
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth" exact>
        <LoginScreen />
      </Route>

      <Route path="/search/:query" exact>
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path="/watch/:id" exact>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route path="/feed/subscriptions" exact>
        <Layout>
          <SubscriptionScreen />
        </Layout>
      </Route>

      <Route path="/channel/:channelId" exact>
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
