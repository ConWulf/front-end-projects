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



    //create cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = [
        new THREE.MeshPhongMaterial({color: 0x1166ee}),
        new THREE.MeshPhongMaterial({color: 0xffaa11}),
        new THREE.MeshPhongMaterial({color: 0x11dd55}),
        new THREE.MeshPhongMaterial({color: 0x33adeb}),
        new THREE.MeshPhongMaterial({color: 0x115522}),
        new THREE.MeshPhongMaterial({color: 0x44ddee}),
    ]
    // const material = new THREE.MeshNormalMaterial();
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0,2,-2);
    scene.add(cube);

    const light = new PointLight(0xffffff, 1.5, 5, 1);
    light.position.set(cube.position.x, cube.position.y - 5, cube.position.z);
    scene.add(light);

//set camera position outside cube position
    camera.position.set(0,3,6);
    cube.rotation.set(3.5,4,0);
}

    const update = () => {
        console.log(cube.position.y);
        console.log(cube);
        // createjs.Ticker.timingMode =  createjs.Ticker.RAF;
        // createjs.Ticker.addEventListener("tick", animateThree)
        // createjs.Tween.get(cube.position)
        //     .to({y: 3.5}, 375, createjs.Ease.getPowIn(.4))
        //     .to({y: 2}, 350, createjs.Ease.linear);
        // setTimeout(update, 1000);
    }

const animateThree = () => {
    renderer.render(scene, camera);
    document.addEventListener("click", update);
    cube.rotation.y += .01;
    requestAnimationFrame(animateThree);

}

const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}




window.addEventListener("resize", onResize);


init();
animateThree();




})();



// const material = new THREE.MeshBasicMaterial();
// const texture = new THREE.TextureLoader().load('img/pexels-phil-kallahar-983200.jpg');
// const material = new THREE.MeshBasicMaterial({map: texture});