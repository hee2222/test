import {
  Float,
  PerspectiveCamera,
  useScroll,
  OrbitControls,
  Detailed,
} from '@react-three/drei';

import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  Suspense,
  Fragment,
} from 'react';
import * as THREE from 'three';
import { Euler, Group, Vector3, AdditiveBlending } from 'three';
import { usePlay } from '../contexts/Play';
import { fadeOnBeforeCompile } from '../utils/fadeMaterial';
import { Suni } from './Newsuni';
import { Background } from './Background';
import { C } from './C';
import { B } from './New-b';
import { Planets } from './Planets';
import { CustomPoints } from './point';
import { TextSection } from './TextSection';

const LINE_NB_POINTS = 1120;
const CURVE_DISTANCE = 60;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 10;

export const Experience = ({ onSectionClick }) => {
  const handleClick = (sectionKey) => {
    onSectionClick(sectionKey);
  };

  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 0, -1 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -8 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -9 * CURVE_DISTANCE),
      new THREE.Vector3(10, 0, -10 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -11 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -12 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -13 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -14 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -15 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -16 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -17 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -18 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -19 * CURVE_DISTANCE),
      new THREE.Vector3(10, 0, -20 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -21 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -22 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -23 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -24 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -25 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -26 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -27 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -28 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -29 * CURVE_DISTANCE),
      new THREE.Vector3(10, 0, -30 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -31 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -32 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -33 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -34 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -35 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -36 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -37 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -38 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -39 * CURVE_DISTANCE),
      new THREE.Vector3(10, 0, -40 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -41 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -42 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -43 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -44 * CURVE_DISTANCE),
      new THREE.Vector3(-10, 0, -45 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -46 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -47 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -48 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -49 * CURVE_DISTANCE),
      new THREE.Vector3(10, 0, -50 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -51 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -52 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -53 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -54 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -55 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -56 * CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.5);
  }, []);

  const textSections = useMemo(() => {
    const sections = [];
    const numSections = 54; // 원하는 섹션의 총 수

    for (let i = 1; i < numSections; i++) {
      const clickAble = i % 2 === 0; // 짝수 번째 섹션은 클릭 가능
      const cameraRailDist = i % 2 === 0 ? 2 : -2; // 짝수 번째 섹션은 1, 홀수 번째 섹션은 -1
      const position = new Vector3(
        curvePoints[i].x + (i % 2 === 0 ? 2 : -2), // 짝수 번째 섹션은 x 좌표에 2를 더하고, 홀수 번째 섹션은 2를 빼줍니다.
        curvePoints[i].y,
        curvePoints[i].z
      );

      sections.push({ clickAble, cameraRailDist, position });
    }

    return sections;
  }, null);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  // const positions = new Float32Array([-10, 0, 0, 10, 0, 0]);
  // const colors = new Float32Array([1, 0.5, 0.5, 1, 0.5, 0.5]);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE

      camera.current.fov = 30;
      camera.current.position.z = 5;
    } else {
      // PORTRAIT
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }

    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    lineMaterialRef.current.opacity = sceneOpacity.current;

    if (end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;
    // LOOK TO CLOSE TEXT SECTIONS
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });
    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: '#000035',
    colorB: '#36204A',
  });

  const planeInTl = useRef();
  const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#8A20EB',
      colorB: '#7474F2',
    });
    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#00F0FF',
      colorB: '#7474F2',
    });
    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#8A20EB',
      colorB: '#7474F2',
    });
    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#8A20EB',
      colorB: '#7474F2',
    });
    // tl.current.to(backgroundColors.current, {
    //   duration: 1,
    //   colorA: '#55ab8f',
    //   colorB: '#99edc3',
    // });

    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(airplane.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  return useMemo(
    () => (
      <>
        <directionalLight position={[0, 0, 1]} intensity={0.3} />
        {/* <OrbitControls /> */}

        <group ref={cameraGroup}>
          <Background backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 0, 5]}
              fov={30}
              near={1}
              far={2000}
              makeDefault
            />
          </group>
          <group ref={airplane}>
            <Float floatIntensity={1.5} speed={1.5} rotationIntensity={0.5}>
              <Suspense fallback={null}>
                <Suni
                  rotation-y={Math.PI}
                  rotation-x={-Math.PI / 3}
                  scale={[0.02, 0.02, 0.02]}
                  position-y={-0.1}
                  position-z={0.5}
                />
              </Suspense>
            </Float>
          </group>
        </group>

        {/* TEXT */}
        {textSections.map((textSection, index) => (
          <TextSection
            {...textSection}
            key={`T${index}`}
            sectionKey={index}
            clickAble={textSection.clickAble}
            onClick={handleClick}
          />
        ))}
        {/* LINE */}
        <group position-y={-2}>
          <mesh>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: LINE_NB_POINTS,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial
              color={'white'}
              ref={lineMaterialRef}
              transparent
              envMapIntensity={2}
              onBeforeCompile={fadeOnBeforeCompile}
            />
          </mesh>
        </group>

        {/* CLOUDS */}

        {[...Array(6)].map((cloud, index) => (
          <Fragment key={`cloud-${index}`}>
            <C
              sceneOpacity={sceneOpacity}
              scale={(8, 8, 8)}
              position-x={
                curvePoints[index + 20].x - (index % 2 === 0 ? 10 : -10)
              }
              position-y={curvePoints[index + 20].y + 5}
              position-z={curvePoints[index + 20].z - 5}
            />

            <C
              sceneOpacity={sceneOpacity}
              scale={(4, 4, 4)}
              position-x={-`${curvePoints[index + 20].x + 12}`}
              position-y={-`${curvePoints[index + 20].y + 10}`}
              position-z={curvePoints[index + 20].z - 30}
            />
            <C
              sceneOpacity={sceneOpacity}
              scale={(6, 6, 6)}
              position-x={
                curvePoints[index + 19].x - (index % 2 === 0 ? 20 : -20)
              }
              position-y={
                curvePoints[index + 19].y + (index % 2 === 0 ? 20 : -20)
              }
              position-z={curvePoints[index + 19].z - 50}
            />
          </Fragment>
        ))}

        {/* <B scale={[4, 4, 4]} position-y={-20} position-z={curvePoints[26].z} />
        <B scale={[4, 4, 4]} position-y={-20} position-z={curvePoints[27].z} /> */}
        <C
          sceneOpacity={sceneOpacity}
          scale={(100, 10, 100)}
          position-x={curvePoints[19].x}
          position-y={curvePoints[19].y}
          position-z={curvePoints[19].z - 40}
        />
        <C
          sceneOpacity={sceneOpacity}
          scale={(100, 10, 100)}
          position-x={curvePoints[25].x}
          position-y={curvePoints[25].y}
          position-z={curvePoints[25].z - 40}
        />
        <>
          {[...Array(29)].map((_, index) => (
            <Fragment key={`b-${index}`}>
              <B
                sceneOpacity={sceneOpacity}
                scale={[6, 1.5, 4]}
                position-x={index % 2 === 0 ? 6 : -6}
                position-y={-8}
                position-z={curvePoints[index + 26].z - 10}
              />
              <C
                sceneOpacity={sceneOpacity}
                scale={(5, 5, 5)}
                position-x={
                  curvePoints[index + 26].x + (index % 2 === 0 ? 2 : -2)
                }
                position-y={curvePoints[index + 26].y + 10}
                position-z={curvePoints[index + 26].z - 30}
              />
              <C
                sceneOpacity={sceneOpacity}
                scale={(8, 8, 8)}
                position-x={
                  -`${
                    curvePoints[index + 26].x + 20 * (index % 2 === 0 ? 1 : -1)
                  }`
                }
                position-y={curvePoints[index + 26].y + 5}
                position-z={curvePoints[index + 26].z - 60}
              />
            </Fragment>
          ))}
        </>

        <Planets position={[1, -1, -5]} />

        <CustomPoints numPoints={500} range={1700} />
      </>
    ),
    []
  );
};
