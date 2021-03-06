import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    // padding-top: 80px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HeroSlide = styled.div`
    
`

const HeroSlider = styled.div`
    
`

const HeroImage = styled.img`
    
`

const HeroContent = styled.div`
    
`

const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {/*<h1>Herooo!</h1>*/}
                {slides.map((slide, index) =>  {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path}
                                            css={`max-width: 160px`}
                                            primary="true" >
                                        {slide.label}
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;