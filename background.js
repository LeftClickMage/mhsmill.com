import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var scene = new THREE.Scene();
var config = {
    width: window.innerWidth,
    height: window.innerHeight,
}

var camera = new THREE.PerspectiveCamera(30, config.width / config.height, 1, 100000);
scene.add(camera);
camera.position.set(0.5, 20, 40);
var background = document.getElementById("background");
var renderer = new THREE.WebGLRenderer();
renderer.setSize(config.width, config.height);
renderer.setClearColor(new THREE.Color('#000007'), 1);
background.appendChild(renderer.domElement);

var light = new THREE.AmbientLight(0x404040); 
scene.add(light);

var light2 = new THREE.DirectionalLight(0xFFFFFF, 6); 
light2.position.y = 17;
light2.position.x = 18;
light2.position.z = 17;
scene.add(light2);



var text = new THREE.Group();
scene.add(text);
try{
var gltfLoader = new GLTFLoader();
    gltfLoader.load("csiiLogo.glb", (gltfScene)=>{
                gltfScene.scene.traverse(function(node){
            if ( node.isMesh ) {
                node.castShadow = true; 
                node.receiveShadow = true; 
            }
        })

gltfScene.scene.scale.set(5, 5, 5);
        text.add(gltfScene.scene); 
});
} catch(error){
    alert(error);
}

text.position.set(0, 19, 10);
light2.target = text;

//code mostly from ethantwu.com
const particles = new THREE.BufferGeometry;

var particleCount = 30000;

var posArray = new Float32Array(particleCount);

for(let i =0; i<particleCount * 3; i++){
    posArray[i] = (Math.random() - 0.5)*125;
}

particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const particleMaterial = new THREE.PointsMaterial({ 
    size: 0.12,
    transparent: true,
    color: "white",
}); 
var particlesMesh = new THREE.Points(particles, particleMaterial);
scene.add(particlesMesh);

const particlesFar = new THREE.BufferGeometry;

var particleCountFar = 30000;

var posArrayFar = new Float32Array(particleCountFar);

for(let i =0; i<particleCountFar * 3; i++){
    posArrayFar[i] = (Math.random() - 0.5)*30025;
}

particlesFar.setAttribute("position", new THREE.BufferAttribute(posArrayFar, 3));
const particleMaterialFar = new THREE.PointsMaterial({ 
    size: 0.12,
    transparent: true,
    color: "white",
}); 
var particlesMeshFar = new THREE.Points(particlesFar, particleMaterialFar);
scene.add(particlesMeshFar);

var resetControls = 0;



var controls = new OrbitControls( camera, renderer.domElement );
var clock = new THREE.Clock();
var target = -20;
var direction = "backwards";
var websitePathNames = ["/", "", "/index.html"];

            controls.target.copy(new THREE.Vector3(0.5, 5, 10));

            controls.saveState();
function startAnimating(fps) {
    var fpsInterval = 1000 / fps;
    var then = Date.now();
    var startTime = then;

    function animate() {
        requestAnimationFrame(animate);
        var now = Date.now();
        var elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);

            renderer.render(scene, camera);
            
            config.width = window.innerWidth;
            config.height = window.innerHeight;
            camera.aspect = config.width / config.height;
            camera.updateProjectionMatrix();
            renderer.setSize(config.width, config.height);
            particlesMesh.rotation.y+=0.0005;
            particlesMesh.rotation.x-=0.0005;
            particlesMeshFar.rotation.y+=0.00005;
            particlesMeshFar.rotation.x-=0.00005;
            if(websitePathNames.includes(window.location.pathname)){
                text.position.y = 4;
                if(resetControls == 0){
controls.reset();
                resetControls = 10;

             controls.enabled = true;
             
            }   // }
            } else {
                text.position.y = 10000;
                if(resetControls != 0){
                    resetControls = 0;

                controls.enabled = false;
                }
            }


        }
    }

    animate();
}
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
startAnimating(60);
