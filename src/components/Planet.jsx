'use client';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const Planet = ({ name, distance, size, speed, color }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.sin(t) * distance;
    ref.current.position.z = Math.cos(t) * distance;
  });

  return (
    <mesh ref={ref} onClick={() => console.log(`${name} clicked`)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
      <Html distanceFactor={10} position={[0, size + 0.5, 0]}>
        <div style={{ color: 'white', fontSize: '0.8rem' }}>{name}</div>
      </Html>
      {name === 'Saturn' && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size + 0.2, size + 0.6, 64]} />
          <meshBasicMaterial color="goldenrod" side={2} />
        </mesh>
      )}
    </mesh>
  );
};

export default Planet;
