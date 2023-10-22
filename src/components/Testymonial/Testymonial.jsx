import React, { Component } from 'react'
import star from '../../images/ant-design_star-filled.svg'
import Style from '../Testymonial/Testymonial.module.css'

export default class Testymonial extends Component {
    render() {
        return (
            <>
                <div className={`${Style.testymonial}`}>
                    <div className="container">
                        <div className={` ${Style.heading}`}>
                            <h2>TESTYMONIAL</h2>
                            <div className=''>
                                <div className={`pt-5 justify-content-between ${Style.testymonialContent}`}>
                                    {/* 1 */}
                                    <div className={`${Style.box}`}>
                                        <div className={`${Style.group}`}>
                                            <div className={`${Style.overlapGroup}`}>
                                                <img className={`${Style.img}`} alt="Group" src={star} />
                                                <p className={`${Style.loremIpsum}`}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                                    scrambled
                                                </p>
                                                <div className={`${Style.textWrapper}`}>Kathryn Murphy</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div className={`col-md-4 ${Style.box}`}>
                                        <div className={`${Style.group}`}>
                                            <div className={`${Style.overlapGroup}`}>
                                                <div className={`${Style.starGroup}`}>
                                                <img className={`${Style.img}`} alt="Group" src={star} />
                                                </div>
                                                <p className={`${Style.loremIpsum}`}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                                    scrambled
                                                </p>
                                                <div className={`${Style.textWrapper}`}>Kathryn Murphy</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div className={`col-md-4 ${Style.box}`}>
                                        <div className={`${Style.group}`}>
                                            <div className={`${Style.overlapGroup}`}>
                                                <img className={`${Style.img}`} alt="Group" src={star} />
                                                <p className={`${Style.loremIpsum}`}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                                    scrambled
                                                </p>
                                                <div className={`${Style.textWrapper}`}>Kathryn Murphy</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 4 */}
                                    <div className={`col-md-4 ${Style.box}`}>
                                        <div className={`${Style.group}`}>
                                            <div className={`${Style.overlapGroup}`}>
                                                <img className={`${Style.img}`} alt="Group" src={star} />
                                                <p className={`${Style.loremIpsum}`}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                                    scrambled
                                                </p>
                                                <div className={`${Style.textWrapper}`}>Kathryn Murphy</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </>
        )
    }
}
