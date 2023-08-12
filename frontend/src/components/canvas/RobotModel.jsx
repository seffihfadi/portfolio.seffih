import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Robot } from "./Robot"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const RobotModel = () => {
  const orbitRef = useRef()
  useFrame((state) => {
    //state.camera.lookAt(20, -10, 0);
    const { x, y } = state.mouse
    if (!!orbitRef.current){
      orbitRef.current.setAzimuthalAngle(x*0.3)
      orbitRef.current.setPolarAngle(y*0.06 + Math.PI / 2)
    }
  })
  let posX = 0
  let posY = -15
  if (window.innerWidth > 768){
    posX = window.innerWidth / 100 + 3
    posY = -10
  }
  return (
    <>
      <ambientLight color='#fff' intensity={.5} />
      <Robot scale={0.1} position={[posX, posY, 0]} rotation={[0, -Math.PI / 5, 0]} />
      <PerspectiveCamera makeDefault position={[5, 5, 40]} />
      <OrbitControls ref={orbitRef} enableZoom={false} enablePan={false} /> 
      <pointLight args={['#fff', 1000, undefined, 2.1]} position={[10, 5, 20]}  /*castShadow */ />
      {/* <mesh rotation={[0, 0, 0]} position={[20, 0, -10]} receiveShadow>
        <planeGeometry args={[30, 40]} />
        <meshStandardMaterial />
      </mesh> */}
    </>
  )
}

export default RobotModel