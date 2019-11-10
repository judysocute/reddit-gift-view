<template>
  <div class="home">
    <GiftList :gifts="gifts" :loading="loading" @loadMore="loadMore(page)"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import Gift from '@/entity/Gift.ts';
import GiftList from '@/components/GiftList.vue';
import axios from 'axios';

@Component({
  components: {GiftList},
})

export default class Home extends Vue {
  public gifts: Gift[] = [];
  public page: number = 1;
  public loading: boolean = true;
  /**
   * 查詢禮物 每一頁 100 筆
   * 查詢結束後會刷新下一批的頁數
   * @param idx - 查詢的頁數
   */
  public async loadMore(idx: number) {
    this.loading = true;
    const respData = await axios.get(`https://www.redditgifts.com/api/v1/exchanges/secret-santa-2017/gallery/?page_size=100&sort=date&sort_direction=DESC&page_number=${idx}`);
    const gifts: Gift[] = respData.data.data.gifts;
    if (this.page === 1 ) {
      this.gifts.push(...gifts);
    } else {
      // 看起來 API 會重複第一筆資料 所以第一頁以後都把第一筆拿掉再加進去
      this.gifts.push(...gifts.splice(1, gifts.length));
    }
    this.page += 1;
    this.loading = false;
  }
  private created(): void {
    this.loadMore(this.page); // 一開始先拉 100 筆
  }
}
</script>
