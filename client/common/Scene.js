import * as BBL from 'babylonjs'


class Scene {
  constructor({ game }) {
    this.scene = new BBL.Scene(game.engine)
  }

  render() {
    this.scene.render()
  }
}

export default Scene