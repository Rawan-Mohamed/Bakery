import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from '../App/App.module.css'
import ContactForm from '../ContactForm/ContactForm';
import HeroSection from '../HeroSection/HeroSection';
import Testymonial from '../Testymonial/Testymonial';
import About from '../About/About';
import Work from '../Work/Work';


function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
      .then(response => {
        setMeals(response.data.meals);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <Work />
      <About />
      <div className="App">
        <div className="container">
          <h2 className={`text-center${Style.colText}`}>RECIPES</h2>
          <div className="row">
            {meals.slice(0, 3).map(meal => (
              <div key={meal.idMeal} className='col-md-4 text-center align-items-center my-3 '>
                {meal.strMeal}
                <img src={meal.strMealThumb} className="card-img-top rounded-4" alt={meal.strMeal} />
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Ipsam porro deserunt natus vitae rerum itaque,
                  ex soluta facilis rem</p>
              </div>

            ))}

          </div>
          <div className='text-center pb-5'>
              <button className={`btn text-center ${Style.btn}`}>CONTACT US</button>

              </div>
          {/* <button className='btn text-center btn-danger' type="submit">Submit</button> */}

        </div>


      </div>
      <Testymonial/>
      <ContactForm/>
   

    </>

  );
}

export default App;