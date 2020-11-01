import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Login from './components/elements/Login';
import MapPage from './components/elements/MapPage';
import Search from './components/elements/Search';
import Explore from "./components/elements/Explore";
import ExploreRestaurant from "./components/elements/ExploreRestaurant";
import Itinerary from "./components/elements/Itinerary";


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);



  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route exact path="/login" component={Login} />
          {/* <Route path="/map-page" component={MapPage} layout={LayoutDefault} /> */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/explore" component={Explore}/>
          <Route exact path="/itinerary" component={Itinerary}/>
          <Route exact path="/explorerestaurants" component={ExploreRestaurant}/>
        </Switch>
      )} />
  );
}

export default App;