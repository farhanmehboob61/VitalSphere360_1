"use client"

import { Suspense, useRef, useState, type ComponentRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, OrbitControls, Stage, useGLTF } from "@react-three/drei"
import { RotateCcw } from "lucide-react"

const MODEL_PATH = "/assets/3d/vital-sphere-chamber.glb"
const DRACO_DECODER_PATH = "/draco/"

function ChamberModel(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF(MODEL_PATH, DRACO_DECODER_PATH)
  return <primitive object={scene} {...props} />
}

function ViewerLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 whitespace-nowrap text-xs font-medium text-slate-500">
        <span className="size-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-500" />
        Loading 3D model…
      </div>
    </Html>
  )
}

interface ProductModelViewerProps {
  /** Whether the viewer is currently in the viewport. Controls the render loop to avoid wasted GPU/CPU cycles. */
  isActive: boolean
}

export default function ProductModelViewer({ isActive }: ProductModelViewerProps) {
  const controlsRef = useRef<ComponentRef<typeof OrbitControls>>(null)
  const [autoRotate, setAutoRotate] = useState(true)
  // Bumping this key forces a clean remount of the model + camera fit (Stage) without refetching the cached asset.
  const [resetKey, setResetKey] = useState(0)

  const handleReset = () => {
    setResetKey((k) => k + 1)
    setAutoRotate(true)
  }

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3.4, 2, 4.6], fov: 35 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop={isActive ? "always" : "never"}
      >
        <Suspense fallback={<ViewerLoader />}>
          <Environment preset="studio" />
          <group key={resetKey}>
            <Stage environment={false} shadows={{ type: "contact", opacity: 0.35, blur: 2.5 }} intensity={0.65} adjustCamera={1.25}>
              <ChamberModel />
            </Stage>
          </group>
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enablePan={false}
          minDistance={2.5}
          maxDistance={9}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI / 2 + 0.15}
          autoRotate={autoRotate}
          autoRotateSpeed={0.6}
          onStart={() => setAutoRotate(false)}
        />
      </Canvas>

      <button
        type="button"
        onClick={handleReset}
        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background shadow-md transition-colors hover:bg-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Reset 3D model view"
      >
        <RotateCcw className="size-3.5" aria-hidden="true" />
        Reset View
      </button>
    </div>
  )
}
