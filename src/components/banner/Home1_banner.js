import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "../../banner.css";

export class CarouselPage extends Component {
    constructor(props){
        super(props);
         this.state = {
            lang : 'en',
        }
    }

      handleChange = e => { 
        this.setState({lang : e.target.value});
        let loc = "https://151.80.152.181.nip.io/"; 
        window.location.replace(loc + "?lng=" + e.target.value);
        console.log("new : "+e.target.value);
        
    }
      
    render() {
        const { t } = this.props;
        return (
            <>
            <MDBContainer fluid>
            <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            id="Home_banner"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="images/slider1.jpeg" alt="First slide" style={{opacity : 0.5}}/>
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner1">
                            <MDBAnimation className="slideInUp" count={1} delay="1s" >
                                <h2 className="ttm-textcolor-darkgrey flipInY"><strong className="ttm-textcolor-skincolor">{t('Slider1TitP1')} </strong>{t('Slider1TitP2')}</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="1.5s" >
                            <p className="text">{t('Slider1Txt')}</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                                       
                            </MDBAnimation>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner2">
                            <MDBAnimation className="slideInUp" count={1} delay="4s" >
                                <h2 className="ttm-textcolor-darkgrey">{t("Slider2TitP1")}<strong className="ttm-textcolor-skincolor">  - Della Toffola</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="4.5s" >
                                <p className="text">{t("Slider2Txt")}</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                
                          </MDBAnimation>
                        </div>
                      </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="images/slider3.jpg" alt="Third slide" style={{opacity : 0.5}}/>
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner2">
                            <MDBAnimation className="slideInUp" count={1} delay="7s" >
                                <h2 className="ttm-textcolor-darkgrey">{t('Slider3TitP1')}<strong className="ttm-textcolor-skincolor">{t('Slider3TitP2')}</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="7.5s" >
                                <p className="text">{t('Slider3Txt')} </p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="8s" >
                                
                          </MDBAnimation>
                        </div>
                      </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBContainer>
            </>
        );
    }
}

const MyComponent = withTranslation()(CarouselPage);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Home1_banner() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
