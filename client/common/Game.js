import * as BBL from 'babylonjs'
import SceneManager from './SceneManager'
import ObjectManager from './ObjectManager'
import MaterialManager from './MaterialManager'


class Game {
  constructor({ canvas }) {
    this.start = this.start.bind(this)

    this.canvas = canvas
    this.engine = new BBL.Engine(canvas, true)
    this.sceneManager = new SceneManager()
    this.objectManager = new ObjectManager()
    this.materialManager = new MaterialManager()

    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }

  init() {
    const scenes = this.sceneManager.scenes
    for (const key in scenes) {
      scenes[key].init()
    }
  }

  start() {
    this.engine.runRenderLoop(() => {
      this.sceneManager.getCurScene().render()
    })
  }
}

export default Game