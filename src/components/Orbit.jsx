'use client';

import React from 'react';
import * as THREE from 'three';

export default function Orbit({ radius }) {
  const segments = 64;
  const orbitGeometry = new THREE.RingGeometry(radius - 0.01, radius + 0.01, segments);
  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide });
  return (
    <mesh rotation-x={Math.PI / 2} geometry={orbitGeometry} material={orbitMaterial} />
  );
}