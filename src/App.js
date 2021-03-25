import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/Gallery';
import ContactPage from './components/ContactPage';
import PackageListPage from './components/PackageList';
import PackageDetailsPage from './components/packages/PackageDetailsPage';
import PageNotFound from './components/PageNotFound';
import ScrollToTop from "react-scroll-to-top";
import Whatsapp from './components/Whatsapp';
import FormSuccess from './components/FormSuccess';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/gallery' component={GalleryPage} />
          <Route exact path='/package-list' component={PackageListPage} />
          <Route path='/package-list/:slug' component={PackageDetailsPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/form-submission-successful/' component={FormSuccess} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <ScrollToTop aria-label="Scroll to top" smooth color="#f25c54" />
        <Whatsapp/>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
