import React, { Component } from 'react'
import Style from '../Work/Work.module.css'
import imgOne from '../../images/Rectangle 268.png'
import imgTwo from '../../images/Rectangle 269.png'
import imgThree from '../../images/Rectangle 270.png'
import imgFour from '../../images/Rectangle 271.png'
import pic from '../../images/Free_Vector___Bakery_background_in_flat_style-removebg-preview.png'
export default class Work extends Component {
    render() {
        return (
            <>

                <div className='row'>
                    <div className='col-md-4  p-0 '>
                        <img src={pic} alt="" className='w-100 p-0 h-100' />
                    </div>
                    <div className='leftSide col-md-8 p-0'>

                        <section className={` ${Style.about}`}>
                            <div className={` ${Style.howWork}`}>
                                HOW WE <br /> WORK
                            </div>
                            <div className="row">
                                <div className="col-md-3 p-0">
                                    <img src={imgOne} alt="image1" className={`img-fluid ${Style.img}`} />
                                </div>
                                <div className="col-md-3 ">
                                    <img src={imgTwo} alt="image2" className={`img-fluid ${Style.img}`} />
                                </div>
                                <div className="col-md-3 ">
                                    <img src={imgThree} alt="image3" className={`img-fluid ${Style.img}`} />
                                </div>
                                <div className="col-md-3 ">
                                    <img src={imgFour} alt="image4" className={`img-fluid ${Style.img}`} />
                                </div>
                            </div>
                            <div className='text-center pb-5'>
                                <button className={`btn text-center ${Style.btn}`}>CONTACT US </button>

                            </div>
                        </section>

                    </div>


                </div>
            

            </>
        )
    }
}
