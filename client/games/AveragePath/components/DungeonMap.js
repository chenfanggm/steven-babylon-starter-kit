import * as BBL from 'babylonjs'
import Cell, { CELL_UNIT_WIDTH, CELL_UNIT_HEIGHT } from './Cell'


class DungeonMap {
  constructor({ width, height }) {
    this.width = width
    this.height = height
    this.cells = this.generateMap()
  }

  generateMap() {
    const cells = []
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        cells.push(new Cell())
      }
    }
    return cells
  }

  init(scene) {
    const halfWidth = Math.floor(this.width * CELL_UNIT_WIDTH / 2)
    const halfHeight = Math.floor(this.height * CELL_UNIT_HEIGHT / 2)

    const dungeonTileMap = new BBL.MeshBuilder.CreateTiledGround('tiledGround', {
      xmin: -halfWidth,
      zmin: -halfHeight,
      xmax: halfWidth,
      zmax: halfHeight,
      subdivisions: {w: 8, h: 8}
    }, scene.scene)
    const multimat = new BBL.MultiMaterial('multi', scene.scene)
    const whiteMaterial = scene.game.materialManager.getById('white')
    const blackMaterial = scene.game.materialManager.getById('black')
    multimat.subMaterials.push(whiteMaterial)
    multimat.subMaterials.push(blackMaterial)
    dungeonTileMap.material = multimat

    const verticesCount = dungeonTileMap.getTotalVertices()
    const tileIndicesLength = dungeonTileMap.getIndices().length
    dungeonTileMap.subMeshes = []
    this.cells.forEach((cell, index) => {
      const submesh = new BBL.SubMesh(index % 2, 0, verticesCount, index, tileIndicesLength, dungeonTileMap)
      dungeonTileMap.subMeshes.push(submesh)
    })
  }
}

export default DungeonMap