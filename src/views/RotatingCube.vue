<template>
  <div id="canvas"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import Cube from "../scenes/Cube"

export default class RotatingCube extends Vue {
  mounted() {
    const canvas = document.getElementById("canvas")
    if (canvas != null) {
      this.setup(canvas)
    }
  }

  private setup(canvas: Element) {
    const cube = new Cube(canvas.clientWidth, canvas.clientHeight)
    canvas.appendChild(cube.getElement())
    cube.start()
  }
}
</script>

<style>
#canvas {
  width: 960px;
  height: 540px;
}
</style>
