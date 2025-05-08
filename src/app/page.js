'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import Planet from '../components/Planet';
import Orbit from '../components/Orbit';
import Spaceship from '../components/Spaceship';

const planets = [
  { name: 'Mercury', distance: 5, size: 0.5, speed: 1.6, color: 'gray' },
  { name: 'Venus', distance: 7, size: 0.8, speed: 1.2, color: 'orange' },
  { name: 'Earth', distance: 9, size: 1, speed: 1, color: 'blue' },
  { name: 'Mars', distance: 11, size: 0.7, speed: 0.8, color: 'red' },
  { name: 'Jupiter', distance: 14, size: 1.2, speed: 0.6, color: 'tan' },
  { name: 'Saturn', distance: 17, size: 1.1, speed: 0.4, color: 'goldenrod' },
  { name: 'Uranus', distance: 20, size: 0.9, speed: 0.3, color: 'lightblue' },
  { name: 'Neptune', distance: 23, size: 0.8, speed: 0.2, color: 'darkblue' },
];

export default function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 60], fov: 65 }} style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={3} />
      <OrbitControls />
      <Stars />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="yellow" />
        <Html position={[0, 3, 0]} center>
          <div style={{ color: 'white', fontWeight: 'bold' }}>Sun</div>
        </Html>
      </mesh>

      {/* Animated Spaceship orbiting the solar system */}
      <Spaceship orbitRadius={25} speed={0.7} height={2} />

      {/* Planets & Orbits */}
      {planets.map((planet, idx) => (
        <React.Fragment key={idx}>
          <Orbit radius={planet.distance} />
          <Planet {...planet} />
        </React.Fragment>
      ))}
    </Canvas>
  );
}