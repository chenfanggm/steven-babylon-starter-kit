import * as BBL from 'babylonjs'


class MaterialManager {
  constructor() {
    this.materials = {}
    this.create = this.create.bind(this)
  }

  register(id, material) {
    if (this.materials[id]) throw new Error(`the objectId '${id}' has already been registered`)
    this.materials[id] = material
  }

  create(id, scene) {
    const material = new BBL.StandardMaterial(id, scene)
    this.register(id, material)
    return material
  }

  getById(id) {
    return this.materials[id]
  }


}

export default MaterialManager