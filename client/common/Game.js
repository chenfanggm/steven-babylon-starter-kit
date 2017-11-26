import * as BBL from 'babylonjs'
import SceneManager from './SceneManager'


class Game {
  constructor({ canvas }) {
    this.start = this.start.bind(this)

    this.canvas = canvas
    this.engine = new BBL.Engine(canvas, true)
    this.sceneManager = new SceneManager()

    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }

  start() {
    this.engine.runRenderLoop(() => {
      this.sceneManager.getCurScene().render()
    })
  }
}

export default Game