import Game from '../../common/Game'
import MainScene from './MainScene'


class AveragePath extends Game {
  constructor(props) {
    super(props)
    const mainScene = new MainScene({ game: this })
    this.sceneManager.registerAndSelect(mainScene)
  }
}

export default AveragePath