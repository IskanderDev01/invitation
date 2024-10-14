import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import photo5 from '../../../../shared/assets/photo5.png';

const RotatingPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const rotationDirection = useRef(1); // 1 для вращения в одну сторону, -1 для другой

    // Анимация поворота
    useFrame(() => {
        if (meshRef.current) {
            // Угол поворота
            const angle = meshRef.current.rotation.y * (180 / Math.PI);
            if (angle >= 25) {
                rotationDirection.current = -1; // Меняем направление вращения
            } else if (angle <= -25) {
                rotationDirection.current = 1; // Меняем направление вращения
            }
            meshRef.current.rotation.y += 0.005 * rotationDirection.current; // Уменьшено на 0.005 для медленного вращения
        }
    });

    return (
        <Plane ref={meshRef} args={[10, 10]} position={[0, 0, 0]}>
            <meshStandardMaterial
                attach="material"
                map={new THREE.TextureLoader().load(photo5)}
                side={THREE.DoubleSide} // Двусторонний материал
            />
        </Plane>
    );
};

export const The_Wedding = () => {
    return (
        <div
            style={{
                height: '100vh',
                position: 'relative',
                backgroundColor: '#fffbfb',
            }}
        >
            <Canvas>
                <ambientLight intensity={5} />{' '}
                {/* Уменьшена интенсивность света */}
                <pointLight position={[10, 10, 10]} />
                <RotatingPlane />
            </Canvas>
        </div>
    );
};
