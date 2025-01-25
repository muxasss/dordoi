import React from 'react'
import './About.css';
const About = () => {
  return (
    <div>
       <div className="about">
      <h2>О нас</h2>

      <div className="founder">
        <img
          className="founder-photo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2_%D0%90%D1%81%D0%BA%D0%B0%D1%80.jpg"  // Замените на реальное изображение
          alt="Аскар Салымбеков"
        />
        <div className="founder-info">
          <h3>Аскар Салымбеков — Основатель Ассоциации Дордой</h3>
          <p>
            Аскар Салымбеков — основатель и вдохновитель Ассоциации «Дордой». Его видение и стремление
            развивать экономику Кыргызстана через поддержку предпринимателей и создание новых возможностей
            стали основой успешной деятельности ассоциации.
          </p>
        </div>
      </div>

      <h3>Миссия Ассоциации</h3>
      <p>
        Ассоциация "Дордой" была основана с целью содействия развитию экономики Кыргызстана. Мы объединяем предпринимателей и учреждения различных секторов бизнеса, чтобы они могли работать в условиях взаимной поддержки и устойчивого роста.
      </p>
      <img
        className="mission-image"
        src="https://24.kg/files/media/203/203484.jpg"  // Замените на реальное изображение
        alt="Миссия Ассоциации"
      />
      <p>
        Мы стремимся к интеграции бизнеса, образования, спорта и медицины, чтобы создать сильную и конкурентоспособную экономику. Каждый проект и каждая инициатива Ассоциации направлены на развитие и улучшение качества жизни в регионе.
      </p>

      <h3>История Ассоциации</h3>
      <p>
        Ассоциация "Дордой" была основана в 1990 году. С тех пор мы активно развиваем бизнес в Кыргызстане, участвуя в международных проектах, поддерживая малый и средний бизнес, создавая новые рабочие места и способствуя улучшению качества жизни местных жителей.
      </p>
      <img
        className="history-image"
        src="https://cdn-1.aki.kg/st_runews/.storage/runews3/images/Aida/b749833ed49f24bc40996e9665fcd605.JPG"  // Замените на реальное изображение
        alt="История Ассоциации"
      />
      <p className='bottom'>
        Наши успехи подтверждаются многими наградами и признаниями в стране и за рубежом. В будущем мы планируем продолжать расширять нашу деятельность и интегрировать новые технологии для улучшения работы всех наших подразделений.
      </p>


     
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

export default About