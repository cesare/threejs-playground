<template>
  <div>
    <div id="canvas"></div>
    <div class="sliders">
      <vue-slider v-model="rotationX" width="400px" min="-1.0" max="1.0" interval="0.01" />
      <vue-slider v-model="rotationY" width="400px" min="-1.0" max="1.0" interval="0.01" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import VueSlider from "vue-slider-component"
import Cube from "../scenes/Cube"

import 'vue-slider-component/theme/antd.css'

@Component({
  components: {
    VueSlider,
  },
})
export default class RotatingCube extends Vue {
  @Prop() cube!: Cube

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

  @Watch("rotationX")
  onRotationXChanged(value: number) {
    this.cube.setRotationX(value)
  }

  @Watch("rotationY")
  onRotationYChanged(value: number) {
    this.cube.setRotationY(value)
  }
}
</script>

<style>
#canvas {
  width: 960px;
  height: 540px;
}
</style>
