import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 🎯 SCENE SETUP
const scene = new THREE.Scene();

// 🎥 CAMERA SETUP
const perspectiveCamera = new THREE.PerspectiveCamera(
  75,                                    // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1,                                   // near clipping plane
  1000                                   // far clipping plane
);
perspectiveCamera.position.z = 5; // pull camera back to view object

// 🖼️ RENDERER SETUP
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // background color → white
document.body.appendChild(renderer.domElement);

// 💡 LIGHTING
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // soft global light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // sunlight-like light
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 🌀 ORBIT CONTROLS (mouse rotation/zoom support)
const controls = new OrbitControls(perspectiveCamera, renderer.domElement);
controls.enableDamping = true;   // smooth controls
controls.dampingFactor = 0.05;
controls.minDistance = 1;        // min zoom
controls.maxDistance = 20;       // max zoom

// 🏢 LOAD 3D MODEL
const loader = new GLTFLoader();
let model;

loader.load(
  '/public/Models/dino/scene.gltf', // path to model
  (gltf) => {
    model = gltf.scene;
    scene.add(model);

    // 🔄 Auto-scale and center the model
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const scaleFactor = 0.01; // shrink model to reasonable size
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // center model around origin
    model.position.set(
      -center.x * scaleFactor,
      -center.y * scaleFactor,
      -center.z * scaleFactor
    );
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error);
  }
);

// 🎬 ANIMATION LOOP
function animate() {
  controls.update(); // required for damping
  renderer.render(scene, perspectiveCamera);
}
renderer.setAnimationLoop(animate);
