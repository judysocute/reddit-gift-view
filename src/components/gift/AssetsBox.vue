<template>
  <div class="assets-box">
    <img
      v-if="assets[viewPosition]"
      :src="assets[viewPosition].largeImageUrl"
      width="80%"
    >
    <div class="scroll-side">
      <template v-for="(asset, idx) in assets">
          <div
            class="asset-img"
            :class="{blurry: idx !== viewPosition}"
            :key="idx"
            tabindex="0"
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
  public viewPosition: number = 0; // 大圖
  /**
   * 更改大圖
   */
  public changeView(position: number) {
    this.viewPosition = position;
  }
}
</script>

<style lang="scss" scoped>
.assets-box {
  display: flex;
  justify-content: space-between;
  .scroll-side {
    width: 17%;
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