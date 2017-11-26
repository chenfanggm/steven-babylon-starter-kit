export const CELL_UNIT_WIDTH = 1
export const CELL_UNIT_HEIGHT = 1

class Cell {
  constructor(props) {
    this.width = CELL_UNIT_WIDTH
    this.height = CELL_UNIT_HEIGHT
    this.type = props && props.type || 'ground'
  }
}

export default Cell