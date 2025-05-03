"use client";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import { Group, AnimationMixer, Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SceneObjects() {
  const texture = useTexture("/models/backed_texture.webp");
  const rootGroup = useRef<Group>(new Group());
  const mixers = useRef<AnimationMixer[]>([]);

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const baseModels = useGLTF("/models/base-static.gltf");
  const door = useGLTF("/models/door.gltf");
  const ac = useGLTF("/models/ac.gltf");
  const shelves = useGLTF("/models/shelves.gltf");
  const workstation = useGLTF("/models/workstation.gltf");
  const window = useGLTF("/models/window.gltf");
  const projector = useGLTF("/models/projector.gltf");
  const bigRobot = useGLTF("/models/bigRobot.gltf");
  const miniRobot = useGLTF("/models/miniRobot.gltf");
  const miniRobotFly = useGLTF("/models/miniRobotFly.gltf");
  const fan = useGLTF("/models/fan.gltf");
  const particle = useGLTF("/models/particle.gltf");

  // Reuse logic to clone and setup models
  const createModelInstance = (
    model: THREE.Group,
    position: [number, number, number],
    rotation: [number, number, number],
    scale = 0.2,
    animateClip?: THREE.AnimationClip,
    timeScale = 1
  ) => {
    const clone = model.clone();
    clone.position.set(...position);
    clone.rotation.set(...rotation);
    clone.scale.set(scale, scale, scale);

    clone.traverse((child: any) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.frustumCulled = true;
      }
    });

    if (animateClip) {
      const mixer = new AnimationMixer(clone);
      const action = mixer.clipAction(animateClip);
      action.setEffectiveTimeScale(timeScale);
      action.play();
      mixers.current.push(mixer);
    }

    rootGroup.current.add(clone);
  };

  // Initial scene build
  useEffect(() => {
    const R = Math.PI / 2;

    // static objects
    createModelInstance(bigRobot.scene, [0, 0, 0], [0, R, 0]);
    createModelInstance(baseModels.scene, [0, 0, 0], [0, R, 0]);
    createModelInstance(door.scene, [0, 0, 0], [0, R, 0]);
    createModelInstance(ac.scene, [0, 0, 0], [0, R, 0]);
    createModelInstance(door.scene, [0.88, 1.967, -5.95], [0, 0, 0]);
    createModelInstance(ac.scene, [0.88, 0, -4.977], [0, 0, 0]);
      // Shelves
    ([[0, 0, 0], [0, 0, -1.34], [0, 0, -2.61], [0, 0, -3.78], [0, 0, -4.977], [0, 0, -6.14]] as [number, number, number][]).forEach(pos => createModelInstance(shelves.scene, pos, [0, R, 0]));
    // workstations
    ([[0, 0, 0], [0, 0, -1.7], [0, 0, -3.475], [0, 0, -5.42]] as [number, number, number][]).forEach(pos => createModelInstance(workstation.scene, pos, [0, R, 0]) );
    // Windows
    const windows1 = [[0, 0, 0], [0, -0.335, 0], [0, -0.796, 0], [0, -1.148, 0], [-0.54, -0.174, 0], [-0.54, -0.528, 0], [-0.54, -0.99, 0], [-0.54, -1.326, 0],];
    windows1.forEach(pos => createModelInstance(window.scene, pos as any, [0, R, 0]));
    const windows2 = [ [0.88, 0, -1.161], [0.88, -0.33, -1.161], [0.88, -0.136, -1.695], [0.88, -0.478, -1.695], [0.88, 0.029, -2.81], [0.88, -0.303, -2.81], [0.88, -0.14, -3.363], [0.88, -0.475, -3.363], [0.88, 0.05, -4.465], [0.88, -0.303, -4.465], [0.88, -0.135, -5.005], [0.88, -0.48, -5.005], ];
    windows2.forEach(pos => createModelInstance(window.scene, pos as any, [0, 0, 0]));
    // Projectors
    const nRow = 8, nCol = 3, xSpace = 2, zSpace = 0.9;
    for (let row = 0; row < nRow; row++) {
      for (let col = 0; col < nCol; col++) {createModelInstance(projector.scene, [col * xSpace, 0, -row * zSpace], [0, R, 0]);}
    }
    // Mini robots
    createModelInstance(miniRobot.scene, [0, 0, 0], [0, R, 0], 0.2);
    createModelInstance(miniRobot.scene, [0.458, -1.146, 6.596], [0.346, -1.931, 0.456],);
    createModelInstance(miniRobot.scene, [-2.89, -1.485, 1.389], [0, 2.771, 0], 0.2, miniRobot.animations[0]);
    createModelInstance(miniRobot.scene, [0.85, -1.248, 2.273], [0, -1.931, 0], 0.2);

    // Mini robot fly
    const flyAnim = miniRobotFly.animations;
    createModelInstance(miniRobotFly.scene, [0, 0, 0], [0, R, 0], 0.2, flyAnim[0], 1.3);
    createModelInstance(miniRobotFly.scene, [0.231, -0.466, -4.078], [0, 1.271, 0], 0.2, flyAnim[1]);
    createModelInstance(miniRobotFly.scene, [-2.043, 1.111, 2.987], [0, 3.042, 0], 0.2, flyAnim[1], 0.7);
    createModelInstance(miniRobotFly.scene, [-1.39, 1.979, -2.983], [0.239, 1.361, 0.3], 0.2, flyAnim[1], -1);

    // Fan
    createModelInstance(fan.scene, [0, 0, 0], [0, R, 0], 0.2, fan.animations[0], 2);

    // Particles 
    createModelInstance(particle.scene, [-0.7, -0.175, 1.2], [0, R, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [-0.5, -0.1, -5.9], [0, -0.5, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [0.381, 0.054, -3.09], [0, -0.5, 0], 0.2, particle.animations[0], 0.8);
    createModelInstance(particle.scene, [-0.486, 0.218, 4.869], [0, R, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [-0.374, 0.198, -2.18], [0, -0.5, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [-2.141, 1.379, 2.338], [0, R, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [-2.054, 1.358, -4.741], [0, -0.5, 0], 0.3, particle.animations[0], 1);
    createModelInstance(particle.scene, [-1.219, 1.156, 0.81], [0, -0.5, 0], 0.2, particle.animations[0], 0.8);

    // Boxes
    const boxGeo = new BoxGeometry(0.15, 0.15, 0.15);
    const boxMat = new MeshBasicMaterial({ color: "#888888" });
    const box = new Mesh(boxGeo, boxMat);
    box.position.set(-3.11, 0.57, 3.3);
    const box2 = box.clone(); box2.position.set(-3.11, 0.61, 2.1); box2.scale.set(0.9, 1.5, 0.7);
    const box3 = box.clone(); box3.position.set(-3.11, 0.61, -1.8); box3.scale.set(0.3, 1.5, 0.7); box3.rotation.y = -Math.PI / 8;
    const box4 = box.clone(); box4.position.set(-3.11, 0.57, -3); box4.scale.set(1.3, 1, 0.4);
    rootGroup.current.add(box, box2, box3, box4);

    // Grid helpers
    const grid1 = new THREE.GridHelper(20, 20, 0xd0d0d0, 0x404284);
    const grid2 = new THREE.GridHelper(20, 300, 0x454589, 0x505050);
    grid2.position.y = -0.002;
    rootGroup.current.add(grid1, grid2);

  }, [texture]);

  useFrame((_, delta) => mixers.current.forEach(m => m.update(delta)));

  return <primitive object={rootGroup.current} />;
}
