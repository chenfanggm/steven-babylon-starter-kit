import './styles/main.scss'
import AveragePath from './games/AveragePath'
import config from '../config'


const canvas = document.getElementById('mainCanvas')
const game = new AveragePath({ canvas })
game.init()
game.start()

// Hot module replace setting
if (config.env === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}