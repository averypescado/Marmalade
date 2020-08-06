/* global Mixcloud */
import React, {useState, useEffect} from 'react';
import Header from './Header';
import FeaturedMix from './FeaturedMix';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

function App() {
  const [widget, setWidget] = useState([]);
  useEffect(() => {
    async function mountAudio() {
      const widgets = Mixcloud.PlayerWidget(document.getElementById('iframe'));
      await setWidget(widgets);
      console.log(widgets);
    }
    mountAudio();
  }, []);

  return (
    <Router>
      <div className='flex-l justify-end'>
        <FeaturedMix />
        <div className='w-50-l relative z-1'>
          <Header />
          <div>
            <button onClick={widget}>Play/PAuse</button>
          </div>
          <Switch>
            <Route path='/archive'>
              <Archive />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <iframe
        title='frame'
        id='iframe'
        width='100%'
        height='60'
        src='https://api.mixcloud.com/spartacus/party-time/embed-html/'
        allow='autoplay'
        frameBorder='0'
        className='db fixed bottom-0 z-5'
      />
    </Router>
  );
}

export default App;
