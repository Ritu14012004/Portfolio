import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo =(props)=> {
  const { nodes, materials } = useGLTF('models/react.glb')
  return (
    <Float {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[450, 100, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[5, 5, 5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/react.glb')
export default ReactLogo;