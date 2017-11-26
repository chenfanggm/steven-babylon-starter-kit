import * as BBL from 'babylonjs'
import Scene from '../../common/Scene'


class MainScene extends Scene {
  constructor({ game }) {
    super({ game })
    this.name = this.constructor.name

    // mainCamera
    const mainCamera = new BBL.FreeCamera('mainCamera', new BBL.Vector3(0, 5,-10), this.scene)
    mainCamera.setTarget(BBL.Vector3.Zero())
    mainCamera.attachControl(game.canvas, false)

    // light
    const mainLight = new BBL.HemisphericLight('mainLight', new BBL.Vector3(0,1,0), this.scene)

    // object
    const mainTerrain = BBL.MeshBuilder.CreateGround('mainTerrain', {height:6, width:6, subdivisions: 2}, this.scene)
    const sphere = BBL.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, this.scene)
    sphere.position.y = 1
  }
}

export default MainScene