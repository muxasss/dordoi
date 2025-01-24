import React from 'react'
import './Navfooter.css';

const Navfooter = () => {
  return (
    <div>
        <footer>
            <div className='links'>
            <div>
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

export default Navfooter