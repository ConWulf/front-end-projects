import * as THREE from '../../node_modules/three/src/Three.js';
import {PointLight} from "../../node_modules/three/src/Three.js";
(function () {
let scene, renderer, camera, cube, light;

const init = () => {
    //set up scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1,1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const light = new PointLight(0xfff, 1, 500);
    light.position.set(10,0,25);
    scene.add(light);

    //create cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshBasicMaterial({color: 0x1166ee})
    // const texture = new THREE.TextureLoader().load('img/pexels-phil-kallahar-983200.jpg');
    // const material = new THREE.MeshBasicMaterial({map: texture});
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0,2,-2);
    scene.add(cube);

//set camera position outside cube position
camera.position.set(0,3,6);
cube.rotation.set(3.5,4,0);
}
const animate = () => {
    requestAnimationFrame(animate);


    // cube.rotation.x += .02;
    // cube.rotation.y += .02;
    renderer.render(scene, camera);
}

const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener("resize", onResize);

init();
animate();




})();