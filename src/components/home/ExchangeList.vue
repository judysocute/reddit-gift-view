<template>
  <div class="exchange-list">
    <div tabindex="0" class="exchange-item cursor-pointer" @click="toGallery(item.slug)" v-for="(item, idx) in giftList" :key="idx">
      <img :src="item.logoImageUrl" width="150" :alt="item.slug">
      <p class="title">{{item.title}}</p>
    </div>
    <div class="past-exchange-nav">
      <i class="nes-ash switch-item left cursor-pointer" tabindex="0" @click="emitIndex(-1)"></i>
      Page {{listIndex + 1}}
      <i class="nes-ash switch-item right cursor-pointer" tabindex="0" @click="emitIndex(1)"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Exchanges from '@/entity/GalleryExchange/Exchanges';
@Component
export default class ExchangeList extends Vue {
  @Prop() public listIndex!: number;
  @Prop() public giftList!: Exchanges[];

  /**
   * 送出更改禮物列表事件
   */
  public emitIndex(num: number) {
    this.$emit('emitIndex', num);
  }
  /**
   * 到項目的禮物清單
   */
  public toGallery(slug: string) {
    this.$router.push({
      name: 'gallery',
      params: {
        slug,
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.exchange-list {
  display: flex;
  flex-wrap: wrap;
  > .exchange-item {
    width: calc(100% / 8);
    .title {
      font-size: 12px;
    }
    &:hover {
      .title {
        color: $text-hover-color;
      }
    }
  }
  .row {
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    > .title {
      width: 100%;
      margin-bottom: 25px;
    }
    > .exchange-items {
      display: flex;
      flex-wrap: wrap;
      height: 300px;
      overflow-y: scroll;
      > .exchange-item {
        width: 250px;
        .title {
          font-size: 12px;
        }
      }
    }
  }
  .past-exchange-nav {
    margin: 0 auto;
    .switch-item {
      &.left {
        transform: scaleX(-1);
      }
      &.right {
        transform: scaleX(1);
      }
      &:hover {
        top: -6px;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
