<template>
  <div class="banner">
    <div class="votes">
      <i class="nes-icon is-samll like"></i>
      <p>{{giftData.votes}}</p>
    </div>
    <div class="title">
      <h1>{{giftData.title}}</h1>
      <p>
        {{dateString(giftData.createdAt)}} by 
        <img v-if="photoUrl" :src="photoUrl" alt="" width="25" height="25">
        {{giftData.postedBy}}
      </p>
      <p>{{giftData.exchange.title}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GiftData from '@/entity/GiftResp/RespData';
@Component
export default class Banner extends Vue {
  @Prop() public giftData!: GiftData;
  @Prop() public photoUrl!: string;
  /**
   * 時間字串
   */
  public dateString(sDate: string) {
    const date: Date = new Date(sDate);
    const yyyy = date.getFullYear();
    const mm = date.getMonth() === 0 ? 12 : date.getMonth() - 1;
    const dd = date.getDate();
    return `${yyyy}/${mm}/${dd}`;
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  display: table;
  height: auto;
  .votes {
    display: table-cell;
    vertical-align: middle;
    background-color: $secondary;
    padding: 15px;
    > p {
      font-size: 20px;
    }
  }
  .title {
    display: table-cell;
    vertical-align: middle;
    padding: 15px;
    background-color: $primary;
    color: $white;
    text-align: left;
    h1 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>