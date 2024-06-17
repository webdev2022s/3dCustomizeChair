import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";

// import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import Chair from "./Chair";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Experience() {
  //   const gltf = useLoader(GLTFLoader, "/chair.gltf");
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.5}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage
        adjustCamera={2}
        environment={"city"}
        intensity={0.6}
        shadows={false}
      >
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          {/* <mesh>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh> */}

          <Suspense fallback={null}>
            {/* <primitive object={gltf.scene} /> */}
            <Chair />
          </Suspense>
        </Float>
      </Stage>
      <mesh position={[0, -0.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1200}
          mixBlur={1}
          mixStrength={40}
          depthScale={1.2}
          minDepthThreshold={-10}
          maxDepthThreshold={-1.4}
          color="#1f2937"
          metalness={0.6}
          roughness={1}
        />
      </mesh>
    </PresentationControls>
  );
}
// convert to gltf npx gltfjsx public/chair.gltf
