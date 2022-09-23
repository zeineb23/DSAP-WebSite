import React, { Component, Suspense } from 'react';
import Slider from 'react-slick';
import FadeIn from 'react-fade-in';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withTranslation } from 'react-i18next';
import ContactUs from './pages/contact'


export class home3_mainpage extends Component {
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
      
            breakpoint: 680,
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
        const { t } = this.props;

        return (       
          <div className="site-main"> 
            {/* aboutus-section */}
                <section className="ttm-row aboutus-section clearfix" style={{background : "#f2f4f5"}}>
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        {/* section title */}
                        <div className="section-title with-desc clearfix">
                            <div className="title-header">
                            <h2 className="title">{t('QuiSommes')}<span>{t('Nous')}</span>?</h2>
                            </div>
                            <div className="title-desc" style={{textAlign: "justify"}}>
                            <p>{t('IntroDSAP')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative res-991-mt-30">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center">
                            <img  src="https://via.placeholder.com/533X708/444444.png" title="single-img-seven" alt="single-img-seven" height="400px"/>
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>
                {/* aboutus-section end*/}
            {/* services section */}
            <section className="ttm-row tab-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h5 style={{fontSize: 24}}>{t('Expertise')}</h5>
                        <h2 className="title">{t('ServicesTit')}</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                    <Tabs defaultIndex={2} onSelect={index => console.log(index)}>{/* tabs */}
                      <TabList className="tabs">
                        <Tab className="tab" title="Hi-Tech"><span><i className="flaticon flaticon-report" />{t('Service1Tit')}</span></Tab>
                        <Tab className="tab" title="Media"><span><i className="flaticon flaticon-computer" /> {t('Service2Tit')}</span></Tab>
                        <Tab className="tab" title="Industrial"><span><i className="flaticon flaticon-system" />{t('Service3Tit')}</span></Tab>
                        <Tab className="tab" title="Banking"><span><i className="flaticon flaticon-interaction" />{t('Service4Tit')}</span></Tab>
                        <Tab className="tab" title="Medical"><span><i className="flaticon flaticon-analysis" />{t('Service5Tit')}</span></Tab>
                      </TabList>
                      <div className="box-shadow content-tab">
                        <FadeIn>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">{t('Service1Tit')}</h3>
                                    <p style={{textAlign: "justify"}}>{t('Service1')}</p>                                    
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="grey-border text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="text-left res-991-mt-30">
                                    <h3 className="title fs-30">{t('Service2Tit')}</h3>
                                    <p style={{textAlign: "justify"}}>{t('Service2')}</p>
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner active">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">{t('Service3Tit')}</h3>
                                    <p style={{textAlign: "justify"}}>{t('Service3')}</p>
                                    
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="grey-border text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="text-left res-991-mt-30">
                                    <h3 className="title fs-30">{t('Service4Tit')}</h3>
                                    <p style={{textAlign: "justify"}}>{t('Service4')}</p>
                                    
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">{t('Service5Tit')}</h3>
                                    <p style={{textAlign: "justify"}}>{t('Service5')}</p>                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        </FadeIn>
                      </div>
                    </Tabs>  {/* tabs end*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* services section end */}
            

            {/* why us section */}
            {/* history-section */}
            {/* history-section end*/}
            {/* why us section end*/}

            {/* zero-padding-section */}
            <section className="ttm-row zero-padding-section mt_80 res-991-mt-0 clearfix">
              <div className="container-xl">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    {/* col-bg-img-one */}
                    <div className="col-bg-img-one ttm-bg ttm-col-bgimage-yes ttm-left-span res-991-h-auto">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-bg-layer-inner" />
                      </div>
                    </div>
                    {/* Responsive View image */}
                    <img src="images/why-dsap.jpg" className="ttm-equal-height-image img-fluid" alt="col-bgimage-1" />
                  </div>
                  <div className="col-lg-6 z-9">
                    <div className="ttm-bgcolor-skincolor ttm-textcolor-white position-relative ttm-right-span">
                      <div className="spacing-1">
                        {/* section title */}
                        <div className="section-title with-desc clearfix">
                          <div className="title-header">
                            <h2 className="title">{t('WhyUs')}?</h2>
                          </div>
                        </div>
                        {/* section title end */}
                        <div className="row mt-40">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                              <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-process" />
                                </div>
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                  <h5>{t('Why1Tit')}</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                  <p style={{textAlign: "justify"}}>{t('Why1')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                          <div className="sep-line mt-4 mb-4" />
                        </div>
                        {/* separator */}
                        <div className="row">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                              <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-system" />
                                </div>
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                  <h5>{t('Why2Tit')}</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                  <p style={{textAlign: "justify"}}>{t('Why2')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                          <div className="sep-line mt-4 mb-4" />
                        </div>
                        {/* separator */}
                        <div className="row">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                              <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-data" />
                                </div>
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                  <h5>{t('Why3Tit')}</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                  <p style={{textAlign: "justify"}}>{t('Why3')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* zero-padding-section end */}
            
            <br/><br/><br/>
            {/* team-section */}
            <section className="ttm-row team-member-section clearfix"hidden>
              <div className="container-xl">
                <div className="row align-items-center mb-5">
                  <div className="col-lg-5 res-991-text-center">
                    <div className="section-title style2 mb-0 clearfix">
                      <div className="title-header mb-0">
                        
                        <h2 className="title">{t('WhyUs')} <span>{t('join')}</span>?</h2>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3} autoplay={false}>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="testt" src="images/man.png" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jennifer Garcia</a></h5>
                        </div>
                        <p className="category" >IT Service Officer</p>{/* category */}
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="images/man.png" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liam</a></h5>
                        </div>
                        <p className="category">Web Designer</p>{/* category */}
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="images/man.png" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
                        </div>
                        <p className="category">Project Manager</p>{/* category */}
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
                        </div>
                        <p className="category">Consultant Officer</p>{/* category */}
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
                        </div>
                        <p className="category">Consultant Officer</p>{/* category */}
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
            {/* team-section end*/}
            {/* contact-section*/}
                <section className="ttm-row contact-section clearfix" id="contact">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-8 offset-lg-2">
                        {/* section-title */}
                        <div className="section-title with-desc text-center clearfix">
                            <div className="title-header">
                            <h2 className="title">{t('ConnectTit')}</h2>
                            </div>
                        </div>{/* section-title end */}
                        </div>
                    </div>
                    {/* row end */}
                    {/* row */}
                    <ContactUs/>
                    {/* row end*/}
                    </div>
                </section>
          </div>
        )
    }
}

const MyComponent = withTranslation()(home3_mainpage);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Home3_mainpage() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
