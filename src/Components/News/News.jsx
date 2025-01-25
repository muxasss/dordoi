import React from 'react'
import './News.css';
const News = () => {
  return (
    <div>
        <div className="news-and-events">
      <h2>Новости и События Ассоциации</h2>

      {/* Новости Ассоциации */}
      <div className="news-item">
        <h3>Открытие нового торгового центра в Бишкеке</h3>
        <p className="date">12 Января 2025 года</p>
        <p>
          Ассоциация Дордой гордится запуском нового торгового центра в Бишкеке, который откроет новые возможности для торговли и создания рабочих мест. Мы продолжаем развивать нашу сеть и вкладываться в развитие экономики Кыргызстана.
        </p>
        <img
          src="https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f97602713c996a45cd657c7bc5d/orig" // Замените на реальное изображение
          alt="Открытие торгового центра"
        />
      </div>

      <div className="news-item">
        <h3>Спортивное событие: Чемпионат по футболу</h3>
        <p className="date">5 Января 2025 года</p>
        <p>
          Наш футбольный клуб Дордой снова победил в национальном чемпионате. Мы гордимся достижениями наших спортсменов и продолжаем поддерживать развитие футбола в Кыргызстане.
        </p>
        <img
          src="https://sport.kg/uploads/posts/2019-10/1569910231_69608691_2423190701051059_4824849063553794048_n.jpg" // Замените на реальное изображение
          alt="Чемпионат по футболу"
        />
      </div>

      <div className="news-item">
        <h3>Образовательный семинар по предпринимательству</h3>
        <p className="date">20 Декабря 2024 года</p>
        <p>
          Бизнес-школа Дордой организовала семинар для начинающих предпринимателей. Ведущие эксперты в области бизнеса поделились стратегиями и опытом с участниками.
        </p>
        <img
          src="https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg" // Замените на реальное изображение
          alt="Образовательный семинар"
        />
      </div>

      {/* Календарь событий */}


     
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
  )
}

export default News