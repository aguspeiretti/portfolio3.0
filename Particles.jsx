/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SkillIcon1 from "../../assets/git.png";
import SkillIcon2 from "../../assets/corel.png";
import SkillIcon3 from "../../assets/photo.png";
import SkillIcon4 from "../../assets/github.png";
import SkillIcon5 from "../../assets/javascript.png";
import SkillIcon6 from "../../assets/mongo.png";
import SkillIcon7 from "../../assets/sass.png";
import SkillIcon8 from "../../assets/html.png";
import SkillIcon9 from "../../assets/css.png";
import SkillIcon10 from "../../assets/react.png";
import SkillIcon11 from "../../assets/node.png";
import SkillIcon12 from "../../assets/firebase.png";
import "./particles.scss";

const Particles = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    const skillIcons = [
      SkillIcon1,
      SkillIcon2,
      SkillIcon3,
      SkillIcon4,
      SkillIcon5,
      SkillIcon6,
      SkillIcon7,
      SkillIcon8,
      SkillIcon9,
      SkillIcon10,
      SkillIcon11,
      SkillIcon12,
    ];
    const skillIconsGroup = new THREE.Group();
    scene.add(skillIconsGroup);

    const radius = 200;
    const steps = skillIcons.length;
    const stepAngle = (Math.PI * 2) / steps;
    const verticalStep = (radius * 2) / steps;

    for (let i = 0; i < skillIcons.length; i++) {
      const angle = i * stepAngle;
      const y = -radius + i * verticalStep;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      const skillIconTexture = new THREE.TextureLoader().load(skillIcons[i]);
      const skillIconMaterial = new THREE.SpriteMaterial({
        map: skillIconTexture,
      });
      const skillIcon = new THREE.Sprite(skillIconMaterial);
      skillIcon.position.set(x, y, z);
      skillIcon.scale.set(60, 60, 1);

      skillIconsGroup.add(skillIcon);
    }

    camera.position.z = 500;

    camera.position.y = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      skillIconsGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    return () => {
      if (
        containerRef.current &&
        renderer.domElement.parentElement === containerRef.current
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="elem" ref={containerRef} />;
};

export default Particles;
