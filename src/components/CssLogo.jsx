
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const CssLogo =(props) => {
  const { nodes, materials } = useGLTF('models/css_logo_3d_model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.578]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.5,-10,-10]} rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
            <group position={[0.5,-10,-10]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials['Material.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.003']}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials['Material.005']}
              position={[0.5,-10,-10]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials['Material.001']}
              position={[0.5,-10,-10]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/css_logo_3d_model.glb')
export default CssLogo