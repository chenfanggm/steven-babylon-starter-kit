import './styles/main.scss'
import * as BABYLON from 'babylonjs'
import { createScene } from './components/scene'

const canvas = document.getElementById('mainCanvas')
const engine = new BABYLON.Engine(canvas, true)
console.log(engine)
const scene = createScene(engine, canvas)

engine.runRenderLoop(function() {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
