import React from "react";
import Omnifood from "../../assets/work-images/OmniFood.png"
import FaceApp from '../../assets/work-images/FaceApp.png'
import SikalCommerce from '../../assets/work-images/SikalCommerce.png'
import Button from "../button/button.component";

const Works = ({workRef}) => {
    return (
        <div className={'work-wrapper dark'}>
            <div className={'work-container'} ref={workRef}>
                <div className={'work-list'}>
                    <figure className={'work-panel timer'}>
                        <div className={'work-panel-slider'} />
                        <div className={'work-panel-cover'} />
                        <div className={'work-panel-mask'} />
                        <img src={Omnifood} alt={''} />
                        <figcaption>
                            <h1>Omnifood is a food delivery website application template, for ordering food based on location.  </h1>
                            <Button classProps={`btn btn--ghost-small`} url={`https://omnifoods.herokuapp.com/`} target={`_blank`}>
                                Visit Website
                            </Button>
                        </figcaption>

                    </figure>
                    <figure className={'work-panel timer'}>
                        <div className={'work-panel-slider'} />
                        <div className={'work-panel-cover'} />
                        <div className={'work-panel-mask'}/>
                        <img src={SikalCommerce} alt={''} />
                        <figcaption>
                            <h1> SikalCommerce is an e-commerce app built on top of the React JS, it uses stripe for payment processing. </h1>
                            <Button classProps={`btn btn--ghost-small`} url={`https://crwnlive.herokuapp.com`} target={`_blank`} >
`                               Visit Website
                            </Button>
                        </figcaption>

                    </figure>
                    <figure className={'work-panel timer'}>
                        <div className={'work-panel-slider'} />
                        <div className={'work-panel-cover'} />
                        <div  className={'work-panel-mask'}/>
                        <img src={FaceApp} alt={''} sizes={100} />
                        <figcaption>
                            <h1>This is a Face recognition app, hosted on heroku, I developed it using ReactJS, Express.js   </h1>
                            <Button classProps={`btn btn--ghost-small`} url={`https://smartbraine.herokuapp.com/`} target={`_blank`}>
                                Visit Website
                            </Button>
                        </figcaption>

                    </figure>
                </div>
            </div>

        </div>
    )
};

export default Works;