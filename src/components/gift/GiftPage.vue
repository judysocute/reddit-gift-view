<template>
  <div class="gift-page">
    <AssetsBox class="images" :assets="giftData.assets" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import GiftResponse from '@/entity/GiftResponse';
import GiftData from '@/entity/GiftResp/RespData';
import AssetsBox from './AssetsBox.vue';
@Component({
  components: {
    AssetsBox,
  },
})
export default class GiftPage extends Vue {
  // 禮物資訊 URL
  public DETAIL_API: string = 'https://www.redditgifts.com/api/v1/exchanges/gallery/gift/';
  public giftData: GiftData = new GiftData();
  // public giftDeatil: GiftDetai;
  /**
   * 發出禮物資訊請求
   * @param slug - 用於禮物 api，識別禮物用
   */
  public async getGiftData(slug: string) {
    const respData = await axios.get(this.DETAIL_API + slug);
    const giftResp: GiftResponse = respData.data;
    this.giftData = giftResp.data;
    console.log(this.giftData);
  }
  private created() {
    const slug = this.$route.params.slug;
    this.getGiftData(slug);
  }
}
</script>

<style lang="scss" scoped>
.images {
  max-width: 500px;
}
</style>
