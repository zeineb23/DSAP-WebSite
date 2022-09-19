import React, { Component, Suspense }from 'react'
import { Menu } from './menu';
import Mobilemenu from './Mobile_menu';
import { withTranslation } from 'react-i18next';

export class header extends Component {
    state = {
        show: false,
      }    
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {  
        const { t } = this.props;

        return (
                <header id="masthead" className="header ttm-header-style-01">
                {/* ttm-topbar-wrapper */}
                
                {/* ttm-topbar-wrapper end */}
                {/* ttm-header-wrap */}
                <div className="ttm-header-wrap">
                <div id="navbar" className="ttm-stickable-header clearfix">
                    <div className="site-header-menu">
                        <div className="container-xl">
                            {/* site-branding */}
                            <div className="site-branding">
                            <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="Altech" rel="home">
                                <img id="logo-img" className="img-fluid" alt="logo" src="images/logo.png" />
                            </a>
                            </div>
                            {/* site-branding end*/}
                            {/*site-navigation */}
                            <div className="site-navigation">
                                <div className="ttm-right-header">
                                    <ul className="ttm-header-icons">
                                        <li className="ttm-header-search-link ttm-bgcolor-skincolor ttm-textcolor-white">
                                        <a onClick={this.toggle}> {this.state.show ? <i className="ti-close" /> : <i className="ti-search" />}</a>
                                        {this.state.show && <div className="ttm-search-overlay">
                                            <form className="ttm-site-searchform">
                                                <div className="w-search-form-h">
                                                    <div className="w-search-form-row">
                                                        <div className="w-search-input">
                                                            <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                            <button type="submit">
                                                                <i className="ti ti-search" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>}
                                        </li>
                                    </ul>
                                </div>
                                <Menu />
                                <div className="mobilemenu"><Mobilemenu/></div>
                            </div>
                            {/*site-navigation end*/}
                        </div>
                    </div>
                </div>
                </div>
                {/* ttm-header-wrap end*/}
            </header>               
        )
    }
}

const MyComponent = withTranslation()(header);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Header() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
