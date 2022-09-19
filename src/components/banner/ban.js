import React, {useState} from 'react';
import './../../i18n.js';
import { useTranslation } from 'react-i18next';
import Home1_banner from "./Home1_banner";
import Header  from '../layout/Header';
import Home3_mainpage from '../Home3_mainpage';


const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'fr', text: "French" }
  ]     
export const Ban = (props) => { // It is a hook imported from 'react-i18next'
 const { t } = useTranslation(); 
  
 const [lang, setLang] = useState('');

 // This function put query that helps to 
 // change the language
 const handleChange = e => { 
     setLang(e.target.value);
     let loc = "http://localhost:3000/";
     window.location.replace(loc + "?lng=" + e.target.value);
     console.log("new : "+e.target.value);
     console.log(t);
 } 
  return (
    <div className="page">
      <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
    <Header data={t}/>
    <Home1_banner data={t}/>
    <Home3_mainpage data={t}/>
          
    

    </div> 
  );
 }

export default Ban;
