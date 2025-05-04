"use client";
import * as THREE from "three";
import { Canvas, useFrame} from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import { OrbitControls, Text, } from "@react-three/drei";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import SceneObjects from "./SceneObjects";

function LoadingMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.03;
  });
  return (
    <mesh ref={ref}>
      <Text scale={1} >Loading</Text> 
      <boxGeometry args={[2, 2, 2, 4, 4, 4]}/>
      <meshStandardMaterial color="orange" wireframe/>
    </mesh>
  );
}

function CameraController() {
  const controlsRef = useRef<OrbitControlsType>(null);
  const directionRef = useRef(1);

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls || !controls.autoRotate) return;

    const angle = controls.getAzimuthalAngle();
    const min = controls.minAzimuthAngle ?? -Infinity;
    const max = controls.maxAzimuthAngle ?? Infinity;

    if (angle <= min || angle >= max) {
      directionRef.current *= -1;
      controls.autoRotateSpeed =
        Math.abs(controls.autoRotateSpeed) * directionRef.current;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={1}
      enableDamping
      minDistance={2}
      maxDistance={11}
      minPolarAngle={Math.PI / 3.2}
      maxPolarAngle={Math.PI / 2.2}
      minAzimuthAngle={Math.PI / 2.5}
      maxAzimuthAngle={Math.PI}
    />
  );
}


export default function CanvasScene() {
  
  const gridMain = useMemo(
    () => new THREE.GridHelper(20, 20, 0xd0d0d0, 0x404284),
    []
  );
  const gridDivider = useMemo(() => {
    const helper = new THREE.GridHelper(20, 300, 0x454589, 0x505050);
    helper.position.y = -0.002;
    return helper;
  }, []);

  return (
    <>
      <Canvas
      shadows={false}
      gl={{ antialias: true }}
      camera={{ position: [0, 2.3, -9], fov: 42 }}
      
      onCreated={({ scene }) => {
        scene.background = new THREE.Color(0x222222);
      }}
      >

        <color attach="background" args={["#222222"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[3.8, 2.4, 2.7]} intensity={50} />
        <pointLight position={[2.5, 3.8, -4.2]} intensity={50} />
        <pointLight position={[-2.2, 1.1, 0.4]} intensity={10} />

        <primitive object={gridMain} />
        <primitive object={gridDivider} />

        <Suspense fallback={<LoadingMesh />}>
          <SceneObjects />
        </Suspense>

        {/* Controls with logic */}
        <CameraController />
      
      </Canvas>
    </>
  );
}
