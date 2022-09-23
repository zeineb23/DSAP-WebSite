import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

export class menu extends Component {
    render() {
        const { t } = this.props;

        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/'}>D-SAP</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/data_structuring'}>{t('Services')}</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/single_style2'}>{t('Realisations')}</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/blog_grid'}>{t('Actualite')}</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/faq'}>FAQs</a></li>
                    <li className="menu-hasdropdown"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    
            )
    }
}

const MyComponent = withTranslation()(menu);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Menu() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
