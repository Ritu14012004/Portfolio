import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.15, delta);

    if (!isMobile) {
      const limitedY = Math.max(-0.1, Math.min(0.1, -state.pointer.y / 6)); 
      easing.dampE(group.current.rotation, [limitedY, state.pointer.x / 10, 0], 0.25, delta);
    }
  });

  return <group ref={group} scale={1.3}>{children}</group>;
};

export default HeroCamera;
