import * as THREE from '../../node_modules/three/src/Three.js';
import {AmbientLight, AnimationClip, AnimationMixer, PointLight} from "../../node_modules/three/src/Three.js";
(function () {
let scene, renderer, camera, cube;

const init = () => {
    //set up scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1,1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    const light = new AmbientLight(0xfff, 2);
    scene.add(light);

    //create cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshBasicMaterial({color: 0x1166ee});
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0,2,-2);
    scene.add(cube);

//set camera position outside cube position
camera.position.set(0,3,6);
cube.rotation.set(3.5,4,0);
}

const animate = () => {
    // requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const update = () => {
        createjs.Ticker.timingMode =  createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", animate)
    createjs.Tween.get(cube.position, {loop: true})
        .to({y: 3.5}, 375, createjs.Ease.getPowIn(1.9))
        .to({y: 2}, 350, createjs.Ease.getPowIn(2.5));

}

window.addEventListener("resize", onResize);
document.addEventListener("click", update);

init();
animate();




})();



// const material = new THREE.MeshBasicMaterial();
// const texture = new THREE.TextureLoader().load('img/pexels-phil-kallahar-983200.jpg');
// const material = new THREE.MeshBasicMaterial({map: texture});