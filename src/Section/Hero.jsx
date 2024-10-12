import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../Constans/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Button from "../components/Button.jsx"
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'

function Hero() {
   
    const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className={`w-full mx-auto flex flex-col ${isMobile ? 'mt-16' : 'sm:mt-36 mt-20'} c-space gap-3`}>
                <p className={`text-white text-center font-generalsans ${isMobile ? 'text-2xl' : 'sm:text-3xl text-xl'} font-medium`}>
                    Hi, I am Ritu <span className='waving-hand'>👋</span>
                </p>
                <p className={`hero_tag text-gray_gradient text-center ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Full Stack Web Developer
                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <perspectiveCamera makeDefault position={[0, 0, 13]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={[1, -10, -15]}
                                rotation={[0, -3.2, 0]}
                                scale={isMobile ? [0.07, 0.07, 0.07] : [0.09, 0.09, 0.09]}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition}  />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} scale={sizes.ringScale} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero;
