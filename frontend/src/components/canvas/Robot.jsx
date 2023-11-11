import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./robot.glb')
  const cast = false
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow={cast} geometry={nodes.Object_2.geometry} material={materials.lambert5SG} />
        <mesh castShadow={cast} geometry={nodes.Object_3.geometry} material={materials.lambert5SG} />
        <mesh castShadow={cast} geometry={nodes.Object_4.geometry} material={materials.lambert5SG} />
        <mesh castShadow={cast} geometry={nodes.Object_5.geometry} material={materials.lambert5SG} />
        <mesh castShadow={cast} geometry={nodes.Object_6.geometry} material={materials.lambert5SG} />
        <mesh castShadow={cast} geometry={nodes.Object_7.geometry} material={materials.lambert5SG} />
      </group>
    </group>
  )
}

useGLTF.preload('./robot.glb')
