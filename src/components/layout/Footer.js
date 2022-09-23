import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
export class footer extends Component {
    render() {
        const { t } = this.props;
        return (
            <footer className="footer widget-footer clearfix">
            {this.props.children}               
                <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
                <div className="container-xl">
                    <div className="row copyright align-items-center res-767-text-center">
                    <div className="col-sm-1">
                        <img src="images/favicon.png" height="50px"/>
                    </div>
                    <div className="col-md-4">
                        <div>
                            D-SAP {t('DefDSAP')}
                        </div>
                    </div>
                    <div className="col-md-4" style={{"padding-left": "20px", "margin-top": "50px"}}>
                    <label >{t('Footer2')}</label>
                    <form id="subscribe-form" className="newsletter-form" style={{"margin-top": "0px"}} method="post" action="#" data-mailchimp="true">                            
                            <div className="mailchimp-inputbox clearfix" id="subscribe-content" >     
                                <i className="fa fa-envelope" />
                                <input type="email" name="email" placeholder={t('Mail')} required />
                                <input type="submit" value="" />
                            </div>
                            <div id="subscribe-msg" />
                            </form>
                    </div>
                    <div className="col-sm-1">
                    </div>
                    <div className="col-md-2">
                        <div className="ttm-social-links-wrapper list-inline">
                         {t('Follow')}
                                <ul className="social-icons">
                                    <li><a className=" tooltip-top" data-tooltip="Facebook"><i className="fab fa-facebook-f" /></ a>
                                    </li>
                                    <li><a className=" tooltip-top" data-tooltip=" aedin"><i className="fab fa-linkedin-in" /></ a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
                <div style={{color: "white", background: "#302f2c"}}>
                <center><span>Copyright © 2020&nbsp; D-SAP </span></center>
                </div>
            </footer>
        )
    }
}

const MyComponent = withTranslation()(footer);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Footer() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
