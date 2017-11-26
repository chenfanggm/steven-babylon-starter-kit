class ObjectManager {
  constructor() {
    this.objects = {}
  }

  register(id, object) {
    if (this.objects[id]) throw new Error(`the objectId '${id}' has already been registered`)
    this.objects[id] = object
  }

  create(id, object) {
    if (this.objects[id]) throw new Error(`the objectId '${id}' has already been registered`)
    this.objects[id] = object
    return object
  }

  getById(id) {
    return this.objects[id]
  }
}

export default ObjectManager