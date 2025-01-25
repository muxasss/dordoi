import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);  // Показываем сообщение после отправки формы
  };

  return (
    <div className="contact">
    <div className="contact-info">
      <h2>Контакты</h2>
      <p>Мы всегда рады получить от вас сообщение! Свяжитесь с нами любым удобным для вас способом.</p>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Адрес</h3>
          <p>115 ул. Ибраимова Бишкек, Кыргызстан</p>
        </div>
        <div className="contact-item">
          <h3>Телефон</h3>
          <p>+996 (312)-69-05-90</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href='https://www.dordois@mail.ru/'>dordois@mail.ru</a></p>
        </div>
      </div>

      {/* Встроенная карта с вашей локацией */}
      <div className="map">
        <h3>Наша локация:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.9590254141517!2d74.6166125!3d42.885864500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ecaab2e6c7%3A0x580f8c96ef9e9d26!2zMTE1INGD0LsuINCY0LHRgNCw0LjQvNC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAyMQ!5e1!3m2!1sru!2skg!4v1737789940039!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>

    {/* Форма обратной связи */}
    <div className="contact-form">
      <h3 className='sms'>Оставьте сообщение</h3>
      {formSubmitted ? (
        <p className="thank-you-message">Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit" className="submit-btn">Отправить</button>
        </form>
      )}
    </div>
    <footer>
            <div className='links'>
            <div className='all-b'>
            <img className='dordoi-logo' src='dordoi-association-logo.png' />
            <br></br>
            <a>address: 115 Ibraimova, Bishkek</a>
            <br></br>
            <a>tel:+996312690590</a>
            <br></br>
            <a href='https://www.dordois@gmail.com/'>email: dordois@gmail.com</a>
            </div>

        <div className='all-a'>
            <h1>Useful links</h1>
            <a href='https://www.instagram.com/dordoi__association/'>Dordoi Association</a>
            <br></br>
            <a href='https://www.instagram.com/dordoi_plaza/'>Dordoi Plaza</a>
            <br></br>
            <a href='https://cinematica.kg/'>Cinematica</a>
            <br></br>   
            <a href='https://edu.gov.kg/'>MES KR</a>
            </div>
            <div className='all-a1'>
                <h1>Contacts</h1>
                <a href='https://salymbekov.com/en/mezhdunarodnyj-fakultet-mediciny/'>International Faculty of Medicine</a>
                <br></br>
                <a href='https://salymbekov.com/en/mezhdunarodnyj-kolledzh-it-i-biznesa/'>International College of IT and Business</a>
                <br></br>
                <a href='https://salymbekov.com/en/o-biznes-shkole-salymbekova/'>Salymbekov Business School</a>
            </div >
            <div className='all-a2'>

            <h1>Our hospitals</h1>
            <a href='https://www.instagram.com/lasmed.kg/'>Lasmed</a>
            <br></br>
            <a href='https://www.instagram.com/doc_university_kg/'>DOC university hospital</a>
            </div>
            </div>
        
        </footer>
  </div>
  );
}

export default Contacts;
