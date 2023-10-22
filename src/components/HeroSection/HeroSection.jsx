import React, { Component } from 'react'
import pic from '../../images/Place Your Image Here (Double Click to Edit)_.png'
import picTwo from '../../images/Free_Vector___Bakery_background_in_flat_style-removebg-preview.png'
import Style from '../HeroSection/HeroSection.module.css'
import logo from '../../images/logo.png'

export default class HeroSection extends Component {
  render() {
    return (
      <>
        <div className=''>
          <div className='row'>
            <div className={`col-md-8 p-0  ${Style.leftSide}`}>
              <div className='m-auto col-sm-2'>
                <img className={`${Style.logo}`}
                  alt="Place your logo here"
                  src={logo}/> 
                  <span className={`${Style.logoText}`}>Peachy Pup Bakery</span>
              </div>
  
              <div className={`${Style.label}`}>
                <div className={`${Style.tastyPastries}`}>TASTY PASTRIES</div>
              </div>
              <section>
                <div className='col-md-3'>
                  <div className={` m-auto  ${Style.image}`}>
                    <img className={`p-10 ${Style.rectangle}`}
                      alt="Rectangle"
                      src={pic} />

                  </div>
                </div>
              </section>
              <div className='text-center pb-5'>
              <button className={`btn text-center ${Style.btn}`}>SEE MORE</button>

              </div>

            </div>
            <div className='col-md-4 p-0 '>
              <img src={picTwo} alt="" className='w-100 p-0 h-100' />

            </div>


          </div>
        </div>



      </>
    )
  }
}
