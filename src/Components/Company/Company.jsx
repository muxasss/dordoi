import React, { useState, useRef } from 'react';
import './Company.css';

const Company = () => {
  // Состояние для контроля отображения текста после отправки формы
  const [applicationSent, setApplicationSent] = useState(false);

  // Реф для формы
  const formRef = useRef(null);

  // Функция для прокрутки страницы к форме
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicationSent(true); // Показываем сообщение о том, что заявка отправлена
  };

  return (
    <div>
      <div className="careers">
        <h2>Карьерные возможности в Ассоциации Дордой</h2>
        <p>Присоединяйтесь к нашей команде и помогайте развивать экономику Кыргызстана!</p>

        {/* Список открытых вакансий */}
        <div className="vacancies">
          <h3>Открытые вакансии</h3>

          <div className="vacancy-item">
            <h4>Менеджер по продажам</h4>
            <p>Обязанности: управление процессом продаж, поиск новых клиентов, ведение переговоров.</p>
            <p>Требования: опыт в продажах от 2 лет, уверенное знание офисных программ, коммуникабельность.</p>
            <button className="apply-btn" onClick={scrollToForm}>Подать заявку</button>
          </div>

          <div className="vacancy-item">
            <h4>Маркетолог</h4>
            <p>Обязанности: разработка маркетинговых стратегий, управление рекламными кампаниями, анализ рынка.</p>
            <p>Требования: опыт в маркетинге от 3 лет, креативность, способность работать в команде.</p>
            <button className="apply-btn" onClick={scrollToForm}>Подать заявку</button>
          </div>

          <div className="vacancy-item">
            <h4>Специалист по IT поддержке</h4>
            <p>Обязанности: настройка оборудования, решение технических проблем, обслуживание программного обеспечения.</p>
            <p>Требования: опыт работы с компьютерной техникой и ПО, знание английского языка будет плюсом.</p>
            <button className="apply-btn" onClick={scrollToForm}>Подать заявку</button>
          </div>
        </div>

        {/* Стажировки */}
        <div className="internships">
          <h3>Стажировки</h3>
          <p>Мы также предлагаем стажировки для студентов и молодых специалистов, которые хотят развиваться в области бизнеса, экономики и технологий.</p>
          <button className="apply-btn" onClick={scrollToForm}>Записаться на стажировку</button>
        </div>

        {/* Форма для подачи заявки */}
        <div className="application-form" ref={formRef}>
          <h3>Оставьте заявку на вакансию</h3>
          {applicationSent ? (
            <p className="application-thank-you">Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Ваше имя" required />
              <input type="email" placeholder="Ваш email" required />
              <textarea placeholder="Ваши комментарии" required></textarea>
              <button type="submit" className="submit-btn">Отправить заявку</button>
            </form>
          )}
        </div>
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

export default Company;
