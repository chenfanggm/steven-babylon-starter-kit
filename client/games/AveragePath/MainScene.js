import * as BBL from 'babylonjs'
import Scene from '../../common/Scene'
import DungeonMap from './components/DungeonMap'


class MainScene extends Scene {
  constructor({ game }) {
    super({ game })
    this.name = this.constructor.name
    this.loadResources()

    // mainCamera
    const mainCamera = new BBL.FreeCamera('mainCamera', new BBL.Vector3(0, 150, -20), this.scene)
    mainCamera.setTarget(BBL.Vector3.Zero())
    mainCamera.attachControl(game.canvas, false)

    // light
    const mainLight = new BBL.HemisphericLight('mainLight', new BBL.Vector3(0,1,0), this.scene)

    // objects
    this.objects.push(game.objectManager.create('dungeonMap', new DungeonMap({
      width: 100,
      height: 100
    })))
  }

  loadResources() {
    const whiteMaterial = this.game.materialManager.create('white', this.scene)
    whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1)
    const blackMaterial = this.game.materialManager.create('black', this.scene)
    blackMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
  }

  render() {
    super.render()
  }
}

export default MainScene