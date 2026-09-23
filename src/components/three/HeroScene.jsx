import { Suspense, useMemo, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useReducedMotion } from "@/hooks/useReducedMotion"

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas")
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")))
  } catch {
    return false
  }
}

// A sparse node/edge lattice suggesting a neural network / computation graph.
function NeuralLattice({ reduced }) {
  const group = useRef(null)
  const points = useMemo(() => {
    const pts = []
    const layers = [6, 9, 9, 6]
    layers.forEach((count, layerIdx) => {
      const x = (layerIdx - (layers.length - 1) / 2) * 1.6
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const radius = 1.1 + (layerIdx % 2) * 0.15
        pts.push(new THREE.Vector3(x, Math.sin(angle) * radius, Math.cos(angle) * radius))
      }
    })
    return pts
  }, [])

  const lines = useMemo(() => {
    const segs = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.35 && Math.random() > 0.72) {
          segs.push(points[i], points[j])
        }
      }
    }
    return new Float32Array(segs.flatMap((p) => [p.x, p.y, p.z]))
  }, [points])

  const pointsPositions = useMemo(
    () => new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
    [points]
  )

  useFrame((state, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.14
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15
  })

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6b7280" transparent opacity={0.5} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointsPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#f4f4f5" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  )
}

export default function HeroScene() {
  const reduced = useReducedMotion()
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    setWebglOk(detectWebGL())
  }, [])

  if (!webglOk) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="h-56 w-56 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)" }}
        />
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="h-56 w-56 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.14), transparent 70%)" }}
          />
        </div>
      }
    >
      <Canvas
        dpr={[1, Math.min(window.devicePixelRatio, 1.75)]}
        camera={{ position: [0, 0, 7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.6} />
        <NeuralLattice reduced={reduced} />
      </Canvas>
    </Suspense>
  )
}
