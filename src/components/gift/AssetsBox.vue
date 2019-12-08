<template>
  <div class="assets-box">
    <img
      v-if="assets[viewPosition]"
      :src="assets[viewPosition].largeImageUrl"
    >
    <div class="scroll-side-bar" id="assets-side-bar">
      <template v-for="(asset, idx) in assets">
          <div
            class="asset-img"
            :class="{blurry: idx !== viewPosition}"
            :key="idx"
            tabindex="0"
            :ref="'viewPosition' + idx"
            @click="changeView(idx)"
            :style="`background-image: url(${asset.largeImageUrl})`"
          >
          </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Assets from '@/entity/GiftResp/Assets';
@Component
export default class AssetsBox extends Vue {
  @Prop() public assets!: Assets[];
  /**
   * 顯示中的大圖
   */
  public viewPosition: number = 0;
  /**
   * 更改大圖
   */
  public changeView(position: number) {
    this.viewPosition = position;

    // 移動卷軸 DOM
    const assetsSideBar: HTMLElement = document.getElementById('assets-side-bar') as HTMLElement;

    // 點選項目 DOM
    if (event) {
      const eventTarget: HTMLElement = event.target as HTMLElement;
      assetsSideBar.scrollTo({
        behavior: 'smooth',
        top: eventTarget.offsetTop - (assetsSideBar.offsetHeight / 2),
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.assets-box {
  display: flex;
  justify-content: space-between;
  min-width: 450px;
  > img {
    display: block;
    width: 80%;
  }
  .scroll-side-bar {
    width: 17%;
    max-height: 500px;
    overflow-y: hidden;
    scroll-behavior: smooth;
  }
  .asset-img {
    cursor: pointer;
    background-position: center;
    background-size: cover;
    margin-bottom: 15px;
    padding-bottom: 100%;
    min-width: 60px;
    &.blurry {
      transition-property: opacity;
      transition-duration: .3s;
      opacity: .5;
      &:hover {
        transition-property: opacity;
        transition-duration: .3s;
        opacity: initial;
      }
    }
  }
}
</style>