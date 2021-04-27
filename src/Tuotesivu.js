import "./styles/tuotesivu.css";
import $ from 'jquery';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Redirect, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';


const kirjatyyppi = [
  'Kovakantinen',
  'Pokkari',
  'E-Kirja'
];


export default function Tuotesivu({url, tuote, addToCart}) {

  //const [product, setProductdata] = useState([]);
  // // hae valitun tuotteen tiedot
  // useEffect(async() => {
  //     if (tuote !== null ) {
  //         let address = url + 'products/getproductdata.php/' + tuote?.id;

  //         try {
  //             const response = await fetch(address);
  //             const json = await response.json();
  //             if (response.ok) {
  //                 setProductdata(json);
  //             } else {
  //                 alert(json.error);
  //             }
  //         } catch (error) {
  //             alert(error);
  //         }
  //     }
      
  // }, [tuote])

  if (tuote === null) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className="tuotesivu_content col-md-12">
        <div className="row">
            {/* picture alku */}
            <div className="picture col-md-6 col-sm-12" >
              <img src={url + 'img/img_' + tuote.id + '.png'} style={{width: 300}}/>
            </div>
            {/* picture stoppi */}
            {/* about_book_content */}
            <div className="about_book_content col-md-6">
              <div className="book_name col-md-12 col-sm-12  text-center">
                <h3>{tuote.name}</h3>
                <p>{tuote.author}</p>
              </div>
              {/* funfacts alku */}
              <div className="funfacts col-md-12 text-center">
                Kovakantinen
                <div className="hinta text-center">
                  {tuote.price}
                </div>
                <hr></hr>
                {/* add_to_cart alku */}
                <div className="add_to_cart row col-12">
                  {/* <input placeholder="1" min="1" name="tekstikenttä" type="number" className="form-control col-lg-4 col-md-3 col-sm-3" id="kpl_maara" /> */}
                    <button type="button" className="btn btn-secondary ml-4 col-5" onClick={e => addToCart(tuote)}>
                      Lisää ostoskoriin
                    </button>
                </div>
                {/* add_to_cart_stoppi */}
                <div className="available m-3">
                  Saatavilla: 3 kpl
                </div>
                {/* booktype alku */}
                <div className="booktype dropdown m-4 text-center">
                  <Dropdown options={kirjatyyppi}
                    placeholder="Valitse kirjan tyyppi" />
                </div>
                {/* booktype stoppi */}
              </div> 
              {/* funfacts stoppi */}
            </div>
            {/* about_book_content stoppi */}
            
        </div>
        {/* rowi stoppi */}
        {/* tuotekuvaus alku */}
        <div className="my-3 tuotekuvaus">
          <div className="m-3">
          <h3>Tuotekuvaus</h3>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        {/* tuotekuvaus stoppi */}
        {/* review alku */}
        <div className="review">
          <h3>Arvostelut</h3>
            <form>
            <div className="row m-3">
              <div className="col-12">
                <textarea id="subject" name="subject" placeholder="Kirjoita arvostelu.."></textarea>
              </div>
            </div>
            <div className="row ml-3">
              <input className="btn-secondary mr-3" type="submit" value="Submit" />
            </div>
          </form>
        </div> 
        {/* review stoppi */}
      </div>
    </div> 
    // tuotesivu_content stoppi
  );
}
