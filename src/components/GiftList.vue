<template>
  <div class="gift-list">
    <!-- <button @click="getScrollHeight">看長度</button> -->
    <div @click="toDetailPage(gift)" class="gift-item cursor-pointer" v-for="(gift, idx) in gifts" :key="idx">
      <div class="title-block">
        <p>{{gift.slug}} - {{gift.postedBy}}</p>
      </div>
      <div class="info">
        <div class="votes">{{gift.votes}}</div>
        <img :src="gift.exchange.trophyUrl" alt="" width="35">
      </div>
      <img class="banner-img" :src="gift.thumbnailUrl" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Gift from '@/entity/Gift.ts';
import axios from 'axios';
@Component
export default class GiftList extends Vue {
  @Prop() public gifts!: Gift[]; // 禮物列表
  @Prop() public loading!: boolean; // 是否正在載入資料
  /**
   * 監聽現在螢幕的位置
   * @param y - 現在捲動到的位置
   */
  public watchWindowScrollY(y: number) {
    const scrollHeight = this.$el.scrollHeight; // 目前禮物列表的高度
    const clientHeight = window.innerHeight; // 使用者瀏覽器的高度
    const loadMoreDiff = 200 * 3; // 要開始載入下一批資料的高度差
    const loadMoreHeight = scrollHeight - clientHeight - loadMoreDiff;
    if (y > loadMoreHeight) {
      // 高度到達刷新範圍
      if (!this.loading) {
        // 如果正在載入資料中 就不要打要求
        this.$emit('loadMore'); // 向上打出載入下一批資料事件
      }
    }
  }
  public async toDetailPage(gift: Gift) {
    this.$router.push({
      name: 'gift',
      params: {
        slug: gift.slug,
      },
    });
  }
  private mounted(): void {
    // 新增監聽事件
    window.addEventListener('scroll', (e: Event) => {
      this.watchWindowScrollY(window.scrollY);
    });
  }
  private beforeDestroy(): void {
    // 移除監聽事件
    window.removeEventListener('scroll', (e: Event) => {
      this.watchWindowScrollY(window.scrollY);
    });
  }
}
</script>

<style lang="scss" scoped>
.gift-list {
  display: flex;
  flex-wrap: wrap;
  .gift-item {
    width: 300px;
    height: 250px;
    margin: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .title-block {
      background-color: $primary;
      width: 100%;
      top: 0;
      position: absolute;
      z-index: 100;
      > p {
        padding: 5px 10px;
        text-align: left;
        margin: 0;
        color: white;
      }
    }
    .info {
      width: 100%;
    }
    > .banner-img {
      width: 250px;
    }
  }
}
</style>
