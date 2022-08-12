

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene, camera);

const ringTexture = new THREE.TextureLoader().load('saturn1.jpg')
const geometry = new THREE.TorusGeometry( 8, 0.3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color: 0xfddc00} );
const torus = new THREE.Mesh(
new THREE.TorusGeometry (8, 0.3, 16, 100),
new THREE.MeshStandardMaterial( {
  map:ringTexture,
})
 );


scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

<<<<<<< HEAD

=======
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)
>>>>>>> 4de34c5b5920d12f90e4508d237a5ec1ed9c223a

const controls = new OrbitControls(camera, renderer.domElement);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff})
  const star = new THREE.Mesh( geometry, material
  );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

  star.position.set(x, y, z);
  scene.add(star)


}

<<<<<<< HEAD
Array(400).fill().forEach(addStar)
=======
Array(600).fill().forEach(addStar)
>>>>>>> 4de34c5b5920d12f90e4508d237a5ec1ed9c223a

const spaceTexture = new THREE.TextureLoader().load('space1.jpg');
scene.background = spaceTexture;


function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  earth.rotation.x += 0.05;
  earth.rotation.y += 0.075;
  earth.rotation.z += 0.05;

  justin.rotation.y += 0.01;
  justin.rotation.x += 0.01;

  camera.position.z = t * -0.03;
  camera.position.x = t * -0.0001;
  camera.position.y = t * -0.0005;

}

document.body.onscroll = moveCamera



function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;



  controls.update();

  renderer.render( scene, camera);

}

animate()

//Avatar

const justinTexture = new THREE.TextureLoader().load('justin.jpg');

const justin = new THREE.Mesh(
  new THREE.BoxGeometry(5,5,5),
  new THREE.MeshBasicMaterial( { map: justinTexture })
);

scene.add(justin);


//moon

const moonTexture = new THREE.TextureLoader().load('earth_no_clouds.jpg');
const normalTexture = new THREE.TextureLoader().load('earth_clouds.jpg')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(15, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: moonTexture,
    normalMap: normalTexture
  } )
);

scene.add(moon);
moon.position.y = 40
moon.position.z = -70;
moon.position.setX(100);





const earthTexture = new THREE.TextureLoader().load('moon.jpg');
const normearthTexture = new THREE.TextureLoader().load('normal.jpg')

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(8, 24, 24),
  new THREE.MeshStandardMaterial( {
    map: earthTexture,
    normalMap: normearthTexture
  } )
);

scene.add(earth);
earth.position.y = 60
earth.position.z = -90;
earth.position.setX(50);
