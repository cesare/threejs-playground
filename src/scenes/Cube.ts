import * as THREE from "three"

export default class Cube {
  width: number
  height: number

  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.Renderer
  light: THREE.Light
  box: THREE.Mesh

  constructor(width: number, height: number) {
    this.width = width
    this.height = height

    this.scene = new THREE.Scene()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()
    this.light = this.createLight()
    this.box = this.createBox()

    this.scene.add(this.light)
    this.scene.add(this.box)
  }

  private createCamera(): THREE.Camera {
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000)
    camera.position.set(0, 0, 1000)
    return camera
  }

  private createRenderer(): THREE.Renderer {
    const renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(this.width, this.height)
    return renderer
  }

  private createLight(): THREE.Light {
    const light = new THREE.DirectionalLight(0xffffff)
    light.intensity = 2;
    light.position.set(1, 1, 1)
    return light
  }

  private createBox(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(500, 500, 500)
    const material = new THREE.MeshStandardMaterial({
      color: 0x0000ff
    })
    const box = new THREE.Mesh(geometry, material)
    return box
  }

  public getElement(): Element {
    return this.renderer.domElement
  }

  public start() {
    this.update()
  }

  private update() {
    this.renderer.render(this.scene, this.camera)
  }

  set rotationX(x: number) {
    this.box.rotation.x = x
    this.update()
  }

  set rotationY(y: number) {
    this.box.rotation.y = y
    this.update()
  }
}
