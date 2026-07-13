"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeDOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const orbRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 3;

    // Create gradient sphere
    const geometry = new THREE.IcosahedronGeometry(1.5, 32);

    // Create shader material for gradient effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 mouse;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vec3 color1 = vec3(0.2, 0.4, 1.0);
          vec3 color2 = vec3(0.8, 0.2, 1.0);
          vec3 color3 = vec3(0.2, 0.8, 1.0);
          
          float mix1 = sin(vPosition.x * 3.0 + time * 0.5) * 0.5 + 0.5;
          float mix2 = cos(vPosition.y * 3.0 + time * 0.3) * 0.5 + 0.5;
          
          vec3 finalColor = mix(color1, color2, mix1);
          finalColor = mix(finalColor, color3, mix2);
          
          float fresnel = dot(normalize(vNormal), normalize(vec3(0.0, 0.0, 1.0)));
          fresnel = pow(1.0 - abs(fresnel), 2.0);
          
          gl_FragColor = vec4(finalColor * (0.8 + fresnel * 0.5), 0.9);
        }
      `,
      wireframe: false,
    });

    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x4488ff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    orbRef.current = orb;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (orbRef.current) {
        orbRef.current.rotation.x += 0.003;
        orbRef.current.rotation.y += 0.005;

        // Mouse interaction
        orbRef.current.rotation.x += mouseY * 0.01;
        orbRef.current.rotation.y += mouseX * 0.01;

        // Update shader time
        if (orbRef.current.material instanceof THREE.ShaderMaterial) {
          orbRef.current.material.uniforms.time.value += 0.01;
          orbRef.current.material.uniforms.mouse.value.set(mouseX, mouseY);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0"
      style={{
        background: "radial-gradient(circle, rgba(30,30,50,0.5) 0%, rgba(10,10,20,0.9) 100%)",
      }}
    />
  );
}
