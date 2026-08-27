"use client"

import { Suspense, useRef, useState, type ComponentRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, OrbitControls, Stage, useGLTF } from "@react-three/drei"
import { RotateCcw } from "lucide-react"

const MODEL_PATH = "/assets/3d/vital-sphere-chamber.glb"
const DRACO_DECODER_PATH = "/draco/"

const SCENE_OPTIONS = [
  {
    id: "studio",
    label: "Studio",
    preset: "studio" as const,
    intensity: 0.5,
    stageIntensity: 0.55,
    backdrop: "from-slate-50 via-slate-100 to-slate-200",
    swatch: "bg-slate-100",
  },
  {
    id: "sunset",
    label: "Warm",
    preset: "sunset" as const,
    intensity: 0.6,
    stageIntensity: 0.6,
    backdrop: "from-amber-50 via-orange-100 to-amber-100",
    swatch: "bg-amber-200",
  },
  {
    id: "warehouse",
    label: "Industrial",
    preset: "warehouse" as const,
    intensity: 0.45,
    stageIntensity: 0.5,
    backdrop: "from-slate-300 via-slate-400 to-slate-500",
    swatch: "bg-slate-500",
  },
]

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
  const [sceneIndex, setSceneIndex] = useState(0)
  // Bumping this key forces a clean remount of the model + camera fit (Stage) without refetching the cached asset.
  const [resetKey, setResetKey] = useState(0)

  const scene = SCENE_OPTIONS[sceneIndex]

  const handleReset = () => {
    setResetKey((k) => k + 1)
    setAutoRotate(true)
  }

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${scene.backdrop} transition-colors duration-500`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3.4, 2, 4.6], fov: 35 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop={isActive ? "always" : "never"}
      >
        <Suspense fallback={<ViewerLoader />}>
          <Environment preset={scene.preset} environmentIntensity={scene.intensity} />
          <group key={`${resetKey}-${scene.id}`}>
            <Stage
              environment={false}
              shadows={{ type: "contact", opacity: 0.35, blur: 2.5 }}
              intensity={scene.stageIntensity}
              adjustCamera={1.25}
            >
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

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-foreground/80 px-3 py-1.5 shadow-md">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-background/70">Scene</span>
        <div role="group" aria-label="Choose 3D scene lighting" className="flex items-center gap-1.5">
          {SCENE_OPTIONS.map((option, index) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSceneIndex(index)}
              aria-label={`${option.label} scene`}
              aria-pressed={sceneIndex === index}
              title={option.label}
              className={`size-5 rounded-full ${option.swatch} transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                sceneIndex === index
                  ? "ring-2 ring-background ring-offset-2 ring-offset-foreground/80"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>

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
