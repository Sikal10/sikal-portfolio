import React from "react";

const About = ({lineRef, aboutRef}) => {
    return (
        <div className={'view about dark'}>
            <div className={'header-container about'} ref={aboutRef}>
                <div className={'header-title-wrap'}>
                    <div className={'cover'} />
                    <h1 className={'header-bog-first'}>About</h1>
                    <h1 className={'header big last'}>Me</h1>
                </div>
                <div ref={lineRef} className={'header-info-wrap'}>
                    <div className={'header-content-body about-one'}>
                        <div className={'line-left'} />
                        <p className={'header body about-one'}>Hi, I'm Abiola, a<strong> Full-Stack Web Developer</strong>.
                            I use an artistic approach to solve problems <strong>Efficiently</strong>, Professionally connected
                            with the web development industry and information technology for quite some years.
                            Effectiveness in the industry<strong> today</strong> requires an acute parity
                            between<strong> development</strong>
                            and <strong> artistic tastes</strong>.</p>
                    </div>
                    <div className="header-content-body gap about-two">
                        <div className="line-left"/>
                        <p className="header body gap about-two">I'm Interested in the
                            entire <strong>Frontend</strong> and <strong>Backend </strong>
                            spectrum and working on ambitious projects with positive people. I admire simple content structure, clean
                            design models, and
                            <strong> responsive</strong> interactions. I enjoy coding from scratch and enjoy bringing concepts and
                            designs to life in the
                            <strong> browser</strong>.</p></div>

                    <div className={'header-content-body gap about-two'}>
                        <div className={'line-left'} />
                        <p className="header body gap about-two">I enjoy transforming ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.</p>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default About;