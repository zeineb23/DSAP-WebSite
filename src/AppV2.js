import React from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n.js';

// Layout
import Footer from './components/layout/Footer';
// pages
import Home3 from './components/Home3';
import Aboutus_01 from './components/pages/Aboutus_01';
import Aboutus_02 from './components/pages/Aboutus_02';
import Services_01 from './components/pages/Services_01';
import Services_02 from './components/pages/Services_02';
import Our_expert from './components/pages/Our_expert';
import Team_detail from './components/pages/Team_detail';
import Faq from './components/pages/Faq';
import Contact_01 from './components/pages/Contact_01';
import Contact_02 from './components/pages/Contact_02';
import Error from './components/pages/Error';
import Element from './components/pages/Element';
import It_consultancy from './components/services/It_consultancy';
import Digital_services from './components/services/Digital_services';
import Advisory_services from './components/services/Advisory_services';
import Data_structuring from './components/services/Data_structuring';
import Experience_design from './components/services/Experience_design';
import Content_engineering from './components/services/Content_engineering';
import Project_style1 from './components/project/Project_style1';
import Project_style2 from './components/project/Project_style2';
import Single_style1 from './components/project/Single_style1';
import Single_style2 from './components/project/Single_style2';
import Single_style3 from './components/project/Single_style3';
import Blog from './components/blog/Blog';
import Blog_grid from './components/blog/Blog_grid';
import Blog_left_image from './components/blog/Blog_left_image';
import Blog_top_image from './components/blog/Blog_top_image';
import Single_blog from './components/blog/Single_blog';
import Shop from './components/shop/Shop';
import Product_details from './components/shop/Product_details';
import Cart from './components/shop/Cart';
import Checkout from './components/shop/Checkout';
import ScrollToTop from './components/layout/Gotop';


const appHistory = {
  basename: "https://151.80.152.181.nip.io"
};
const history = createBrowserHistory(appHistory);
function App() {
 
  return (
    <div className="page">
      <Router basename={"https://151.80.152.181.nip.io"} history={history}>  
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>   
            <Route exact path='/' component={ Home3 } /> 
            <Route path='https://151.80.152.181.nip.io/home3' component={ Home3 } />
            <Route path="https://151.80.152.181.nip.io/aboutus_01" component={Aboutus_01} />
            <Route path="https://151.80.152.181.nip.io/aboutus_02" component={Aboutus_02} />
            <Route path="https://151.80.152.181.nip.io/services_01" component={Services_01} />
            <Route path="https://151.80.152.181.nip.io/services_02" component={Services_02} />
            <Route path="https://151.80.152.181.nip.io/data_structuring" component={Data_structuring} />
            <Route path="https://151.80.152.181.nip.io/our_expert" component={Our_expert} />
            <Route path="https://151.80.152.181.nip.io/team_detail" component={Team_detail} />
            <Route path="https://151.80.152.181.nip.io/faq" component={Faq} />
            <Route path="https://151.80.152.181.nip.io/contact_01" component={Contact_01} />
            <Route path="https://151.80.152.181.nip.io/contact_02" component={Contact_02} />
            <Route path="https://151.80.152.181.nip.io/error" component={Error} />
            <Route path="https://151.80.152.181.nip.io/element" component={Element} />
            <Route path="https://151.80.152.181.nip.io/it_consultancy" component={It_consultancy} />
            <Route path="https://151.80.152.181.nip.io/digital_services" component={Digital_services} />
            <Route path="https://151.80.152.181.nip.io/advisory_services" component={Advisory_services} />
            <Route path="https://151.80.152.181.nip.io/experience_design" component={Experience_design} />
            <Route path="https://151.80.152.181.nip.io/content_engineering" component={Content_engineering} />
            <Route path="https://151.80.152.181.nip.io/project_style1" component={Project_style1} />
            <Route path="https://151.80.152.181.nip.io/project_style2" component={Project_style2} />
            <Route path="https://151.80.152.181.nip.io/single_style1" component={Single_style1} />
            <Route path="https://151.80.152.181.nip.io/single_style2" component={Single_style2} />
            <Route path="https://151.80.152.181.nip.io/single_style3" component={Single_style3} />
            <Route path="https://151.80.152.181.nip.io/blog" component={Blog} />
            <Route path="https://151.80.152.181.nip.io/blog_grid" component={Blog_grid} />
            <Route path="https://151.80.152.181.nip.io/blog_left_image" component={Blog_left_image} />
            <Route path="https://151.80.152.181.nip.io/blog_top_image" component={Blog_top_image} />
            <Route path="https://151.80.152.181.nip.io/single_blog" component={Single_blog} />
            <Route path="https://151.80.152.181.nip.io/shop" component={Shop} />
            <Route path="https://151.80.152.181.nip.io/product_details" component={Product_details} />
            <Route path="https://151.80.152.181.nip.io/cart" component={Cart} />
            <Route path="https://151.80.152.181.nip.io/checkout" component={Checkout} />
        <Footer />
    </Router>  
    </div> 
  );
 }

export default App;
