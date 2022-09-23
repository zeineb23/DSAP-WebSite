import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Success from "./success"
export default function ContactUs () {
  const form = useRef();
  const [name, setName] = useState('')
  const [num, setNum] = useState('')
  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')
  const [isShown, setShow] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ikremtp', 'template_eovl4om', form.current, 'lno5vJXVhn8-gkSL1')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setName('');
    setNum('');
    setMail('');
    setMsg('');
    setShow(true);
    setTimeout(function() {setShow(false)}, 2000);

  };

  return (
    <div>
 {/* row */}
                    <form id="ttm-quote-form" className="row ttm-quote-form clearfix" ref={form} onSubmit={sendEmail}>
                        <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                            <input name="name" type="text" className="form-control bg-white border" placeholder="Nom et prénom" required="required" value={name} onChange={event => setName(event.target.value)}/>
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                            <input name="phone" type="text" placeholder="Num téléphone" required="required" className="form-control bg-white border" value={num} onChange={event => setNum(event.target.value)}/>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <input name="address" type="text" placeholder="Adresse e-mail" required="required" className="form-control bg-white border" value={mail} onChange={event => setMail(event.target.value)}/>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                            <textarea name="message" rows={5} placeholder="Écrivez un message..." required="required" className="form-control bg-white border" value={msg} onChange={event => setMsg(event.target.value)}/>
                        </div>
                        </div>
                        <div style={{marginLeft:"1%", marginRight: "1%", width: "100%", height:"30px"}}>
                        { isShown ? <Success /> : null }
                        </div>
                        <div className="col-md-12">
                        <div className="text-center">
                            <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20" value>
                            Envoyer
                            </button>
                        </div>
                        </div>
                    </form>
                    {/* row end*/}

    </div>
  );
};
