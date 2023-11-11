import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Robot } from "./Robot"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
// import { useFrame } from 'react-three-fiber';
// import { useRef, useState } from 'react';
// import { OrbitControls } from 'drei';

const RobotModel = ({active = false}) => {
  const orbitRef = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    console.log('state', active)
    // Check if the mouse is over the robot model
    if (active && !!orbitRef.current) {
      orbitRef.current.setAzimuthalAngle(x * 0.3);
      orbitRef.current.setPolarAngle(y * 0.06 + Math.PI / 2);
    }
  });

  let posX = 0;
  let posY = -15;
  if (window.innerWidth > 768) {
    posX = window.innerWidth / 100 + 3;
    posY = -10;
  }

  return (
    <>
      <ambientLight color='#fff' intensity={0.5} />
      <Robot scale={0.1} position={[posX, posY, 0]} rotation={[0, -Math.PI / 5, 0]} />
      <PerspectiveCamera makeDefault position={[5, 5, 40]} />
      <OrbitControls
        ref={orbitRef}
        enableZoom={false}
        enablePan={false}
      />
      <pointLight args={['#fff', 1000, undefined, 2.1]} position={[10, 5, 20]} />
    </>
  );
};

export default RobotModel;
