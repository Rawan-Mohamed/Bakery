import React, { Component } from 'react'
import pic from '../../images/Rectangle 275.png'
import Style from '../About/About.module.css'
export default class About extends Component {
  render() {
    return (
      <>
        <section>
          <div className=''>
            <div className="row">
              <div className='col-sm-12'>
                <div className='pb-4'>
                  <div className="row ">
                    <div className={`col-md-8  ${Style.text}`}>
                      <div className={`${Style.aboutUs}`}>
                        ABOUT
                        <br />
                        US
                      </div>
                      <p className={` ${Style.loremIpsum}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </p>
                      {/* <button className='btn btn-danger w-25 border-2'> Content us </button> */}
                      <div className='text-center pb-5'>
              <button className={`btn text-center ${Style.btn}`}>CONTACT US</button>

              </div>

                    </div>
                    <div className='col-md-4 p-0 '>
                      <div className={`w-auto m-auto ${Style.image}`}>
                        <img className={` ${Style.rectangle}`}
                          alt="Rectangle"
                          src={pic} />

                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




      </>
    )
  }
}
