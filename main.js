import { Scene, PerspectiveCamera, WebGLRenderer} from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"
import PropellerCasquet from "./models/pieces/revolution/propeller_casquet"
import HelixAxle from "./models/pieces/revolution/helix_axle"
import BodySupport from "./models/pieces/revolution/body_support"
import HelixArm from "./models/pieces/revolution/helix_arm"

/*
** Scene of the project 
*/
const scene = new Scene()

/*
** Main camera
*/
const mainCamera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
mainCamera.position.z = 7

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(mainCamera, renderer.domElement)


const propellerCasquet = new PropellerCasquet({x: 0, y: 0, z: 0, radius: 1, height: 0.5, width: 0.2, color: 0xffc000});
scene.add(propellerCasquet)

const helixAxle = new HelixAxle({x: 0, y: 0, z: 0, radius: 0.25, height: 0.5, color: 0xffc000});
scene.add(helixAxle)

const bodySupport = new BodySupport({x: -5, y: 0, z: 0, radius: 0.35, height: 1.25, color: 0xffc000});
scene.add(bodySupport)

const helixArm = new HelixArm({x: 0, y: 2, z: 0, innerRadius: 0.1, outerRadius: 0.20, height: 0.85, color: 0xff0000});
scene.add(helixArm)


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, mainCamera)
    controls.update()
}

animate()