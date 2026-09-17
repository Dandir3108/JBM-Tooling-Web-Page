"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function EngineeringScene({ variant = "tooling" }: { variant?: "tooling" | "robot" | "mesh" }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.15, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x9fdcff, 0.9));
    const blue = new THREE.PointLight(0x08d9ff, 15, 12);
    blue.position.set(-3, 2, 3);
    scene.add(blue);
    const orange = new THREE.PointLight(0xff7a1a, 9, 10);
    orange.position.set(4, -1, 2);
    scene.add(orange);

    const group = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({
      color: 0x5b6978,
      metalness: 0.86,
      roughness: 0.24,
      emissive: 0x06131c,
    });
    const blueWire = new THREE.MeshStandardMaterial({
      color: 0x08d9ff,
      emissive: 0x06313a,
      metalness: 0.6,
      roughness: 0.18,
      wireframe: variant === "mesh",
    });
    const ember = new THREE.MeshStandardMaterial({
      color: 0xff7a1a,
      emissive: 0x3a1600,
      metalness: 0.5,
      roughness: 0.2,
    });

    if (variant === "robot") {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.1, 0.42, 48), metal);
      base.position.y = -1.25;
      group.add(base);
      const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.3, 0.55), metal);
      arm1.position.set(-0.55, 0, 0);
      arm1.rotation.z = -0.48;
      group.add(arm1);
      const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 2.05, 0.48), metal);
      arm2.position.set(0.75, 0.85, 0);
      arm2.rotation.z = 0.72;
      group.add(arm2);
      const torch = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.62, 32), ember);
      torch.position.set(1.72, 0.2, 0);
      torch.rotation.z = -0.65;
      group.add(torch);
    } else if (variant === "mesh") {
      const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 3), blueWire);
      mesh.rotation.x = 0.3;
      group.add(mesh);
      const core = new THREE.Mesh(new THREE.TorusKnotGeometry(0.86, 0.08, 140, 16), ember);
      group.add(core);
    } else {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.34, 1.8), metal);
      lower.position.y = -0.75;
      group.add(lower);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.32, 1.42), metal);
      upper.position.y = 0.55;
      group.add(upper);
      const cavity = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.08, 24, 90), blueWire);
      cavity.rotation.x = Math.PI / 2;
      cavity.position.y = -0.22;
      group.add(cavity);
      const pins = [-0.9, 0.9].map((x) => {
        const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.25, 24), ember);
        pin.position.set(x, -0.1, 0.74);
        return pin;
      });
      pins.forEach((pin) => group.add(pin));
    }

    const grid = new THREE.GridHelper(8, 18, 0x08d9ff, 0x1a3444);
    grid.position.y = -1.55;
    scene.add(grid);
    scene.add(group);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.006;
      group.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [variant]);

  return <div ref={mountRef} className="h-full min-h-[22rem] w-full" />;
}
