'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Spaceship({ path = '/models/spaceship.glb', orbitRadius = 12, speed = 0.5, scale = 0.4 }) {
  const ref = useRef();
  const { scene } = useGLTF(path);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * orbitRadius;
      ref.current.position.z = Math.cos(t) * orbitRadius;
      ref.current.rotation.y = t + Math.PI / 2;
    }
  });

  return <primitive ref={ref} object={scene.clone()} scale={[scale, scale, scale]} />;
}