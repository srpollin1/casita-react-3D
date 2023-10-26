/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scene.gltf --transform 
Files: scene.gltf [20.88KB] > scene-transformed.glb [587.7KB] (-2715%)
Author: thegriffindude (https://sketchfab.com/thegriffindude)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lees-house-9f742682d06c46d7bd40e1f94edeca0b
Title: Lee's House
*/

import { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Scene(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
  const bedrooms = useRef()
  const scroll = useScroll();
  const tl = useRef()

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=>{
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    
    tl.current
    //x, y, z
    .to(bedrooms.current.position, {z: 5}, 0)
    .to(bedrooms.current.position, {x: -3})
    .to(bedrooms.current.position, {z: 3})
    .to(bedrooms.current.position, {y: -2})
    .to(bedrooms.current.rotation, {y: 1})
    .to(bedrooms.current.position, {x: 1})
    .to(bedrooms.current.position, {z: 5})
    .to(bedrooms.current.rotation, {y: 1.6})
    .to(bedrooms.current.position, {x: -0.5})
    .to(bedrooms.current.position, {y: -0.5})
    .to(bedrooms.current.position, {z: 3})
    .to(bedrooms.current.rotation, {y: 0})
    .to(bedrooms.current.position, {z: 4})
    .to(bedrooms.current.position, {y: -2})
    .to(bedrooms.current.position, {x: 0.5})
    .to(bedrooms.current.position, {z: 7})


  },[])

  return (
    <group {...props} ref={bedrooms} dispose={null}>
      <mesh geometry={nodes.House_Material_0.geometry} material={materials.Material} position={[1, 0, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Lights_Lighting_0.geometry} material={materials.Lighting} position={[1, 0, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')
