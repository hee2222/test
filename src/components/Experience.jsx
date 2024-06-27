import {
  Float,
  PerspectiveCamera,
  useScroll,
  OrbitControls,
  Sparkles,
  Text,
  Image,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  Suspense,
  useState,
} from 'react';
import * as THREE from 'three';
import { Group, Vector3 } from 'three';
import { usePlay } from '../contexts/Play';
import { fadeOnBeforeCompileFlat } from '../utils/fadeMaterial';
import { Model } from './SK_Actions';
import { Background } from './Background';
import { Points } from './point';
import { TextSection } from './TextSection';
import { Speed } from './Speed';
import { Su1 } from './Su1';
import { Su2 } from './Su2';
import { Su3 } from './Su3';
import { Su4 } from './Su4';
import { Su5 } from './Su5';
import { Su6 } from './Su6';
import { Su7 } from './Su7';
import { Su8 } from './Su8';

const LINE_NB_POINTS = 1120;
const CURVE_DISTANCE = 40;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 20;

export const Experience = ({
  onSectionClick,
  scrollBtn,
  onTargetIndexUpdate,
  sectionClose,
}) => {
  const handleClick = (sectionKey) => {
    onSectionClick(sectionKey + 1);
    setSelectedSection(sectionKey + 1);
    setTextView(true);
  };

  const buttonLabels = useMemo(
    () => [
      '전략/조직설계',
      '재무/회계',
      '마케팅',
      'HR',
      '구매/SCM',
      'IP',
      '법무',
      'Competency',
    ],
    []
  );
  const [selectedSection, setSelectedSection] = useState(null);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    let timer;
    if (sectionClose !== null) {
      // 3초 후에 슬라이더를 표시합니다.
      timer = setTimeout(() => {
        setTextView(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [sectionClose]);

  const curvePoints = useMemo(
    () => [
      new Vector3(0, 0, 0),
      new Vector3(0, 0, -1 * CURVE_DISTANCE),
      new Vector3(0, 0, -2 * CURVE_DISTANCE),
      new Vector3(0, 0, -3 * CURVE_DISTANCE),
      new Vector3(50, 0, -4 * CURVE_DISTANCE),
      new Vector3(0, 0, -5 * CURVE_DISTANCE),
      new Vector3(-50, 0, -6 * CURVE_DISTANCE),
      new Vector3(0, 0, -7 * CURVE_DISTANCE),
      new Vector3(0, 0, -8 * CURVE_DISTANCE),
      new Vector3(0, 0, -9 * CURVE_DISTANCE),
      new Vector3(0, 0, -10 * CURVE_DISTANCE),
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
    const numSections = 9; // 원하는 섹션의 총 수

    for (let i = 1; i < numSections; i++) {
      const cameraRailDist = i % 2 === 0 ? 1 : -1; // 짝수 번째 섹션은 1, 홀수 번째 섹션은 -1
      const position = new Vector3(
        curvePoints[i].x + (i % 2 === 0 ? 2 : -2),
        curvePoints[i].y,
        curvePoints[i].z
      );

      sections.push({ cameraRailDist, position });
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

  const { play, setPlay, setHasScroll, end, setEnd } = usePlay();

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

    let scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;

    // LOOK TO CLOSE TEXT SECTIONS
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.01);
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

    const currentLookAt = cameraGroup.current.getWorldDirection(new Vector3());
    const targetLookAt = new Vector3()
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

    tangent.applyAxisAngle(new Vector3(0, 1, 0), -nonLerpLookAt.rotation.y);

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
      curvePoints[curvePoints.length - 1].z + 20
    ) {
      setEnd(true);
      setPlay(false);
    }

    let isInThrottle = false;

    function increaseScoreDuringTyping() {
      if (isInThrottle) {
        return;
      }

      isInThrottle = true;

      setTimeout(() => {
        const roundedPositionZ = Math.round(cameraGroup.current.position.z);
        const newTargetIndex = curvePoints.findIndex(
          (point) => roundedPositionZ === point.z + 13
        );
        if (newTargetIndex !== -1) {
          onTargetIndexUpdate(newTargetIndex);
        }

        isInThrottle = false;
      }, 1000);
    }

    increaseScoreDuringTyping();
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: '#0303bc',
    colorB: '#8f9be5',
  });

  const planeInTl = useRef();
  // const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#585bed',
      colorB: '#ffcf58',
    });
    tl.current.to(backgroundColors.current, {
      duration: 0.3,
      colorA: '#7474F2',
      colorB: '#e9edf7',
    });

    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });
  }, []);
  useEffect(() => {
    if (end) {
      scroll.el.scrollTo({
        top: (scroll.el.scrollHeight / 9) * 8 - scroll.el.scrollHeight / 30,
        behavior: 'smooth',
      });
    }
  }, [end]);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  useEffect(() => {
    if (scroll.el && scrollBtn !== null) {
      scroll.el.scrollTo({
        top: (scroll.el.scrollHeight / 10) * scrollBtn,
        behavior: 'smooth',
      });
    }
  }, [scrollBtn]);

  return useMemo(
    () => (
      <>
        <ambientLight intensity={0.3} />

        {/* <OrbitControls /> */}
        <group ref={cameraGroup}>
          <Speed />
          <Background backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 0, 5]}
              fov={30}
              makeDefault
            />
          </group>

          <group ref={airplane}>
            <Float floatIntensity={1.5} speed={1.5} rotationIntensity={0.5}>
              <Suspense fallback={null}>
                {/* {(selectedSection !== null || textView == true) && (
                  <group visible={textView}>
                    <Image
                      url="./images/img1.png"
                      transparent
                      opacity={0.8}
                      position-y={0.28}
                      position-x={-0.02}
                      position-z={-0.02}
                      scale-y={0.5}
                      scale-x={0.9}
                    />
                    <Text
                      fontSize={0.08}
                      color={'white'}
                      anchorY={'center'}
                      anchorX={'center'}
                      lineHeight={1.3}
                      position-y={0.4}
                      font={'./fonts/Pretendard-Medium.ttf'}
                    >
                      {`${buttonLabels[selectedSection - 1]} 행성에`}
                    </Text>
                    <Text
                      fontSize={0.08}
                      color={'white'}
                      anchorY={'center'}
                      anchorX={'center'}
                      lineHeight={1.3}
                      position-y={0.3}
                      maxWidth={0.8}
                      font={'./fonts/Pretendard-Medium.ttf'}
                    >
                      오신 것을 환영합니다.
                    </Text>
                  </group>
                )} */}
                <Model
                  rotation-y={Math.PI}
                  rotation-x={-Math.PI / 3}
                  scale={[0.015, 0.015, 0.015]}
                  position-y={-0.2}
                  position-z={0.5}
                  onTargetIndexUpdate={onTargetIndexUpdate}
                  motionplay={selectedSection}
                  sectionClose={sectionClose}
                  textView={textView}
                />
              </Suspense>
            </Float>
          </group>
        </group>

        {/* TEXT */}
        <Suspense fallback={null}>
          {textSections.map((textSection, index) => (
            <TextSection
              rotation={
                index === 4
                  ? [0, Math.PI / 4, 0]
                  : index === 5
                  ? [0, -Math.PI / 4, 0]
                  : [0, 0, 0] // 기본값 설정
              }
              {...textSection}
              sceneOpacity={sceneOpacity}
              scale={0.8}
              key={`T${index}`}
              sectionKey={index}
              clickAble={textSection.clickAble}
              onClick={handleClick}
            />
          ))}
        </Suspense>
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
              onBeforeCompile={fadeOnBeforeCompileFlat}
            />
          </mesh>
        </group>

        {/* <Planet curvePoints={curvePoints} /> */}
        <Su1 curvePoints={curvePoints[1]} />
        <Su2 curvePoints={curvePoints[2]} />
        <Su3 curvePoints={curvePoints[3]} />
        <Su4 curvePoints={curvePoints[4]} />
        <Su5 curvePoints={curvePoints[5]} />
        <Su6 curvePoints={curvePoints[6]} />
        <Su7 curvePoints={curvePoints[7]} />
        <Su8 curvePoints={curvePoints[8]} />

        <Sparkles count={5000} scale={[20, 3, 1000]} size={1.8} speed={0.2} />

        <Points numPoints={2000} range={1000} />
      </>
    ),
    [sectionClose, textView]
  );
};
