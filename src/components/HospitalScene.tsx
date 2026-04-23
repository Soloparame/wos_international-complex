import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

export function HospitalScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1; // slow continuous rotation
    }
  });

  return (
    <>
      <color attach="background" args={['#ffffff']} />
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 20, 10]} intensity={1.5} penumbra={1} color="#ffffff" />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#0d9488" />

      <group ref={groupRef} position={[0, -2, 0]}>
        {/* Main Central Tower */}
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <Box args={[3, 10, 3]} position={[0, 4, 0]}>
            <meshPhysicalMaterial 
              color="#f8fafc" 
              metalness={0.1} 
              roughness={0.2} 
              envMapIntensity={1}
              clearcoat={1}
            />
          </Box>
          <Box args={[3.2, 0.5, 3.2]} position={[0, 8.8, 0]}>
            <meshStandardMaterial color="#0d9488" />
          </Box>
          {/* Helipad */}
          <Cylinder args={[1.5, 1.5, 0.2, 32]} position={[0, 9.2, 0]}>
            <meshStandardMaterial color="#e2e8f0" />
          </Cylinder>
          <Box args={[0.8, 0.1, 0.2]} position={[0, 9.31, 0]}>
            <meshStandardMaterial color="#14b8a6" />
          </Box>
          <Box args={[0.2, 0.1, 0.8]} position={[0, 9.31, 0]}>
            <meshStandardMaterial color="#14b8a6" />
          </Box>
          
          {/* Glass details on tower */}
          <Box args={[2.8, 8, 3.1]} position={[0, 4, 0]}>
            <meshPhysicalMaterial 
              color="#99f6e4" 
              transmission={0.9} 
              opacity={1} 
              metalness={0.1} 
              roughness={0} 
              ior={1.5} 
              thickness={0.5} 
            />
          </Box>
        </Float>

        {/* Side Wings */}
        <Box args={[8, 4, 2.5]} position={[-3, 1, 1]}>
          <meshPhysicalMaterial color="#f1f5f9" metalness={0.1} roughness={0.2} />
        </Box>
        <Box args={[6, 3, 2.5]} position={[3, 0.5, -2]}>
          <meshPhysicalMaterial color="#f1f5f9" metalness={0.1} roughness={0.2} />
        </Box>

        {/* Abstract floating medical crosses / data particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Float key={i} speed={2 + Math.random() * 2} rotationIntensity={1} floatIntensity={1}>
            <Box args={[0.2, 1, 0.2]} position={[(Math.random() - 0.5) * 15, Math.random() * 10, (Math.random() - 0.5) * 15]}>
              <meshStandardMaterial color="#14b8a6" />
            </Box>
            <Box args={[1, 0.2, 0.2]} position={[(Math.random() - 0.5) * 15, Math.random() * 10, (Math.random() - 0.5) * 15]}>
              <meshStandardMaterial color="#14b8a6" />
            </Box>
          </Float>
        ))}

        {/* Ground Base Grid/Plane effect */}
        <Cylinder args={[10, 10, 0.5, 64]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#e5e7eb" wireframe={true} />
        </Cylinder>
        <Cylinder args={[9.5, 9.5, 0.6, 64]} position={[0, -0.6, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Cylinder>
      </group>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={40} blur={2} far={10} color="#0f172a" />
      <Environment preset="city" />
    </>
  );
}
