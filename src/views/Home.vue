<template>
  <div class="home">
    <div class="past-exchange-block">
      <h2 class="title">PAST EXCHANGES</h2>
      <ExchangeList
        :listIndex="listIndex"
        :giftList="displayGiftList(pastExchanges, listIndex)"
        @emitIndex="calcIndex"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EXCHANGES_API } from '@/lib/apiuri';
import RedditResponse from '@/entity/RedditResponse';
import GalleryExchange from '@/entity/GalleryExchange';
import Exchanges from '@/entity/GalleryExchange/Exchanges';
import axios from 'axios';
import * as R from 'ramda';
import ExchangeList from '@/components/home/ExchangeList.vue';
@Component({
  components: {
    ExchangeList,
  },
})
export default class Home extends Vue {
  public listIndex: number = 0;
  public pastExchanges: Exchanges[] = new Array();

  public calcIndex(num: number) {
    this.listIndex = this.listIndex + num < 0 ? 0 : this.listIndex + num;
  }
  /**
   * 一次現實部分清單內容
   */
  public displayGiftList(exchangeList: Exchanges[], idx: number): Exchanges[] {
    return R.slice(idx * 16, (++idx) * 16, exchangeList);
  }
  /**
   * 拿到全部交換禮物類別列表
   */
  public async getListData() {
    const respData = await axios.get(EXCHANGES_API);
    const redditResponse: RedditResponse = respData.data as RedditResponse;

    const galleryExchange: GalleryExchange[] = redditResponse.data;

    const pastExchangesOrUndefined: GalleryExchange | undefined =
      R.findLast((item: GalleryExchange) => item.type === 'past', galleryExchange);

    if (pastExchangesOrUndefined) {
      this.pastExchanges = pastExchangesOrUndefined.exchanges;
      R.groupBy((item: Exchanges) => {
        const grpKey: Date = new Date(item.signupStartAt);
        return grpKey.getFullYear().toString();
      }, this.pastExchanges);
    }
  }

  /**
   * 轉換為以年份為 Key 的物件形態
   */
  public transfromToExchangeGroup(exchanges: Exchanges[]) {
    return R.groupBy((item: Exchanges) => {
      const grpKey: Date = new Date(item.signupStartAt);
      return grpKey.getFullYear().toString();
    }, this.pastExchanges);
  }

  /**
   * 日期顯示格式
   */
  public displayDate(date: Date): string {
    const isDate = typeof date === 'object';
    const displayDate = isDate ? date : new Date(date);
    return `${displayDate.getFullYear()}`;
  }

  private created() {
    this.getListData();
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 0 5px;
  .past-exchange-block {
    .title {
      vertical-align: middle;
      color: $white;
      padding: 10px;
      margin: 0;
      background-color: $primary;
    }
  }
}
</style>
