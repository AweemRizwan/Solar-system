'use client';

import React from 'react';

export default function SaturnRings({ radius = 1.4, innerRadius = 1.2, segments = 64 }) {
  return (
    <mesh rotation-x={Math.PI / 2} position={[0, 0, 0]}>
      <ringGeometry args={[innerRadius, radius, segments]} />
      <meshBasicMaterial color="goldenrod" side={2} />
    </mesh>
  );
}