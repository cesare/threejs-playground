<template>
  <div id="canvas"></div>
  <div class="sliders">
    <vue-slider v-model="rotationX" width="400px" min="-1.0" max="1.0" interval="0.01" />
    <vue-slider v-model="rotationY" width="400px" min="-1.0" max="1.0" interval="0.01" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import VueSlider from "vue-slider-component"
import Cube from "../scenes/Cube"

import 'vue-slider-component/theme/antd.css'

class Props {
  cube!: Cube
}

@Options({
  components: {
    VueSlider,
  },
  watch: {
    rotationX: function(value) {
      this.cube.setRotationX(value)
    },
    rotationY: function(value) {
      this.cube.setRotationY(value)
    }
  }
})

export default class RotatingCube extends Vue.with(Props) {
  mounted() {
    const canvas = document.getElementById("canvas")
    if (canvas != null) {
      this.cube = this.setup(canvas)
    }
  }

  data() {
    return {
      rotationX: 0.0,
      rotationY: 0.0,
    }
  }

  private setup(canvas: Element): Cube {
    const cube = new Cube(canvas.clientWidth, canvas.clientHeight)
    canvas.appendChild(cube.getElement())
    cube.start()
    return cube
  }
}
</script>

<style>
#canvas {
  width: 960px;
  height: 540px;
}
</style>
