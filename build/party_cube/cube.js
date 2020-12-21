import * as THREE from '../../node_modules/three/src/Three.js';
import {
    AmbientLight,
    AnimationClip,
    AnimationMixer,
    CircleGeometry, MeshNormalMaterial,
    PointLight
} from "../../node_modules/three/src/Three.js";
(function () {
let scene, renderer, camera, cube, eyes;

const init = () => {
    //set up scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1,1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    const light = new AmbientLight(0xffffff, 5);
    scene.add(light);

    //create cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    // const material = new THREE.MeshBasicMaterial({color: 0x1166ee});
    const material = new THREE.MeshNormalMaterial();
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0,2,-2);
    scene.add(cube);


//set camera position outside cube position
camera.position.set(0,3,6);
cube.rotation.set(3.5,4,0);
}

const animateThree = () => {
    // requestAnimationFrame(animateThree);

    renderer.render(scene, camera);
}

const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


const update = () => {
    createjs.Ticker.timingMode =  createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", animateThree)
    createjs.Tween.get(cube.position)
        .to({y: 3.5}, 375, createjs.Ease.getPowIn(.4))
        .to({y: 2}, 350, createjs.Ease.linear);
    setTimeout(update, 1000);
}

window.addEventListener("resize", onResize);
document.addEventListener("click", update);


init();
animateThree();




})();



// const material = new THREE.MeshBasicMaterial();
// const texture = new THREE.TextureLoader().load('img/pexels-phil-kallahar-983200.jpg');
// const material = new THREE.MeshBasicMaterial({map: texture});