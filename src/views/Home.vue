<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 10:27:49
 * @LastEditTime: 2022-05-28 22:42:19
 * @LastEditors: lanchao
 * @Reference: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header v-if="isElectron">
        <HeaderComponent />
      </el-header>
      <el-container>
        <el-aside :style="{ width: asideWidth + 'px', overflow: 'hidden' }">
          <LeftComponent />
        </el-aside>
        <el-divider direction="vertical" border-style="double" id="divider" />
        <el-main>
          <RightComponent />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeaderComponent from '@/components/Header.vue'
import LeftComponent from '@/components/Left.vue'
import RightComponent from '@/components/Right.vue'
@Options({
  components: {
    LeftComponent,
    HeaderComponent,
    RightComponent
  }
})
export default class HomeComponent extends Vue {
  maxWidth = 604 //最大宽度
  minWidth = 104 //最小宽度
  asideWidth = 200 //当前位置
  isElectron = process.env.IS_ELECTRON ? process.env.IS_ELECTRON : false
  mounted() {
    this.$nextTick(() => {
      const divider = document.getElementById('divider') as any
      this.mouseDownAndMove(divider, (e: any) => {
        //鼠标移动
        let w = this.asideWidth + e.movementX //左侧栏宽度
        if (w < this.minWidth) {
          console.error('宽度超下限')
          w = this.minWidth
        } else if (w > this.maxWidth) {
          console.error('宽度超上限')
          w = this.maxWidth
        }
        this.asideWidth = w
      })
    })
  }
  //鼠标按下并移动
  mouseDownAndMove(dom: any, callback: any) {
    dom.addEventListener('mousedown', (e: any) => {
      console.log('按下鼠标时', e)
      //鼠标按下
      dom.addEventListener('mousemove', callback)
      dom.addEventListener('mouseup', () => {
        console.log('鼠标抬起')
        //鼠标抬起
        dom.removeEventListener('mousemove', callback)
      })
      dom.addEventListener('mouseleave', () => {
        console.log('鼠标移出')
        //鼠标离开  防止移动过快导致mouseup监听不到
        dom.removeEventListener('mousemove', callback)
      })
    })
  }
}
</script>
<style scoped lang="scss">
.el-header {
  -webkit-app-region: drag; /**实现拖拽窗口 */
  --el-header-height: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  //justify-content: flex-end;
  border-bottom: 1px #dcdfe6 solid;
}
.el-container {
  height: 100vh;
}
.el-divider--vertical {
  height: auto;
  border-left: 1px #dcdfe6 solid;
  border-right: 1px #dcdfe6 solid;
  cursor: e-resize;
  width: 10px;
}
</style>
