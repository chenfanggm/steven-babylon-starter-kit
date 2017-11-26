import * as BBL from 'babylonjs'


class Scene {
  constructor({ game }) {
    this.game = game
    this.scene = new BBL.Scene(game.engine)
    this.objects = []
  }

  init() {
    this.objects.forEach((object) => {
      if (object.init && typeof object.init === 'function')
        object.init(this)
    })
  }

  render() {
    this.scene.render()
  }
}

export default Scene