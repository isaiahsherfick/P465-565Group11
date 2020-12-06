import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
//import ProtectedRoute from "./utils/ProtectedRoute";
import {ProtectedRoute} from "./utils/ProtectedRoute";

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
import ExploreHotel from "./components/elements/exploreHotels";
import ExploreAttraction from "./components/elements/exploreAttractions";
import ExploreFlight from "./components/elements/exploreFlights";
import Payment from "./components/elements/payment";
import CommentItinerary from "./components/elements/commentItinerary";
import PopularPlaces from "./components/elements/popularPlaces";
import Reviews from "./components/elements/Reviews.js";
import ViewReviews from './components/elements/ViewReviews';
import CurrencyConversion from './components/elements/CurrencyConversion';


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
          <Route exact path="/restaurants" component={ExploreRestaurant}/>
          <Route exact path="/hotels" component={ExploreHotel}/>
          <Route exact path="/attractions" component={ExploreAttraction}/>
          <Route exact path="/flights" component={ExploreFlight}/>
          <Route exact path="/book" component={Payment}/>
          <Route exact path="/comment" component={CommentItinerary}/>
          <Route exact path="/popular" component={PopularPlaces}/>
          <Route exact path="/reviews" component={Reviews}/>
          <Route exact path="/viewreviews" component={ViewReviews}/>
          <Route exact path="/conversion" component={CurrencyConversion}/>

        </Switch>
      )} />
  );
}

export default App;
