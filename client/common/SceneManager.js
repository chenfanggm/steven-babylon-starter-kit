class SceneManager {
  constructor() {
    this.scenes = {}
    this.curScene = null
  }

  registerAndSelect(scene) {
    if (this.scenes[scene.name]) throw new Error(`the scene with name '${scene.name}' has already been registered`)
    this.scenes[scene.name] = scene
    this.curScene = scene
  }

  getCurScene() {
    return this.curScene
  }
}

export default SceneManager