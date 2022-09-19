import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Aboutus_01 extends Component {
    render() {
        var slick_slider = {
          dots: false,
          arrow: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,

          responsive: [{

            breakpoint: 1199,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">Nos services</h1>
                            </div>{/* /.page-title-captions */}
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}

                
                {/* services-section */}
                <section className="ttm-row history-section bg-img3 ttm-bgcolor-grey ttm-bg ttm-bgimage-yes clearfix">
                  <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                  <div className="container-xl">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        {/* section title */}
                        <div className="section-title with-desc text-center clearfix">
                          <div className="title-header">
                            <h5>Nos Services</h5>
                            <h2 className="title">Ce que <span>D-SAP</span> offre</h2>
                          </div>
                        </div>{/* section title end */}
                      </div>
                    </div>
                    <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider}>
                      <div className="ttm-box-col-wrapper">
                        <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */} 
                          <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */} 
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box">
                              <div className="featured-icon">{/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-business-and-finance" />{/*  ttm-icon */} 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-history-box-border" />{/* ttm-history-box-border  */} 
                          <div className="ttm-history-box-details ttm-bgcolor-white">
                            <div className="ttm-historybox-title"><h5>IT Consultancy</h5></div>{/* historybox-title  */} 
                            <div className="ttm-historybox-description">{/* description  */} 
                              Expertise in IT consultancy for the IT companies, for their different working areas Web-app related.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ttm-box-col-wrapper">
                        <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */} 
                          <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */} 
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box">
                              <div className="featured-icon">{/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-computer" />{/*  ttm-icon */} 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-history-box-border" />{/* ttm-history-box-border  */} 
                          <div className="ttm-history-box-details ttm-bgcolor-white">
                            <div className="ttm-historybox-title"><h5>IT Management</h5></div>{/* historybox-title  */} 
                            <div className="ttm-historybox-description">{/* description  */} 
                              We provide all kind of IT management services of in the according to on their organization prioritie.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ttm-box-col-wrapper">
                        <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */} 
                          <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */} 
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box">
                              <div className="featured-icon">{/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-history-box-border" />{/* ttm-history-box-border  */} 
                          <div className="ttm-history-box-details ttm-bgcolor-white">
                            <div className="ttm-historybox-title"><h5>Product Design</h5></div>{/* historybox-title  */} 
                            <div className="ttm-historybox-description">{/* description  */} 
                              Our firm is expert to create an efficient for user interface that makes design user interaction lively.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ttm-box-col-wrapper">
                        <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */} 
                          <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */} 
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box">
                              <div className="featured-icon">{/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-global-1" />{/*  ttm-icon */} 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-history-box-border" />{/* ttm-history-box-border  */} 
                          <div className="ttm-history-box-details ttm-bgcolor-white">
                            <div className="ttm-historybox-title"><h5>Cloud Services</h5></div>{/* historybox-title  */} 
                            <div className="ttm-historybox-description">{/* description  */} 
                              We develop, migrate and work on web applications to ensure that they run on capably on clouds.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ttm-box-col-wrapper">
                        <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */} 
                          <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */} 
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box">
                              <div className="featured-icon">{/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-business-and-finance" />{/*  ttm-icon */} 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-history-box-border" />{/* ttm-history-box-border  */} 
                          <div className="ttm-history-box-details ttm-bgcolor-white">
                            <div className="ttm-historybox-title"><h5>IT Consultancy</h5></div>{/* historybox-title  */} 
                            <div className="ttm-historybox-description">{/* description  */} 
                              Expertise in IT consultancy for the IT companies, for their different working areas Web-app related.
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </section>
                {/* services section end*/}

                {/* our-partner-section */}
                <section className="ttm-row our-client-section res-991-p-0 ttm-bgcolor-white clearfix">
                    {/* section title */}
                        <div className="section-title with-desc text-center clearfix">
                          <div className="title-header">
                            <h2 className="title">Nos clients</h2>
                          </div>
                        </div>{/* section title end */}
                    <div className="container-xl">
                    <div className="row">
                    <div className="col-12 text-center">
                        <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5}>
                        <div className="ttm-box-col-wrapper">
                            <div className="client-box ttm-box-view-boxed-logo">
                                <div className="client">
                                    <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                                        <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ttm-box-col-wrapper">
                            <div className="client-box ttm-box-view-boxed-logo">
                                <div className="client">
                                    <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                                        <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ttm-box-col-wrapper">
                            <div className="client-box ttm-box-view-boxed-logo">
                                <div className="client">
                                    <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                                        <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ttm-box-col-wrapper">
                            <div className="client-box ttm-box-view-boxed-logo">
                                <div className="client">
                                    <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                                        <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ttm-box-col-wrapper">
                            <div className="client-box ttm-box-view-boxed-logo">
                                <div className="client">
                                    <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                                        <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                    </div>
                </div>
                </section>
                {/* our-partner-section end */}

                {/* plateforme-section */}
                <section className="ttm-row only-testimonial-section clearfix ttm-bgcolor-grey">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title with-desc text-center clearfix">
                                <div className="title-header">
                                    <h5>Projets récents</h5>
                                    <h2 className="title">Voir notre <span>Plateforme</span></h2>
                                </div>
                            </div>{/* section title end */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-6">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper">
                                <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-eleven" alt="single-img-eleven" />
                            </div>{/* ttm_single_image-wrapper end */}
                            <div className="ttm-play-icon-btn ttm-play-icon-btn-center">
                                <div className="ttm-play-icon-animation"> 
                                    <a id="playbutton">
                                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                                            <i className="ti ti-control-play" />
                                        </div>
                                    </a>
                                    <div id="videobox">
                                        <i id="close-btn" className="fa fa-times"></i>
                                        <div id="video-wrapper">
                                            <iframe width="500" height="500" src="https://www.youtube.com/embed/7e90gBu4pas" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 res-991-mt-30">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20" value>
                            Voir plus
                            </button>
                            </div>

                        </div>
                        {/* row end*/}
                    </div>
                </section>
                {/* plateforme-section end */}
                
            </div>
            )
    }
}


export default Aboutus_01;