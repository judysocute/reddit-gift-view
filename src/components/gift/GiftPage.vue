<template>
  <div class="gift-page" v-if="giftData.updatedAt">
    <AssetsBox class="images" :assets="giftData.assets" />
    <Info :giftData="giftData" :photoUrl="photoUrl"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from 'axios';
import RedditResponse from '@/entity/RedditResponse';
import GiftData from '@/entity/GiftResp/RespData';
import Profile from '@/entity/Profile';
import AssetsBox from './AssetsBox.vue';
import Info from './Info.vue';
@Component({
  components: {
    AssetsBox, Info,
  },
})
export default class GiftPage extends Vue {
  // 禮物資訊 URL
  public DETAIL_API: string = 'https://www.redditgifts.com/api/v1/exchanges/gallery/gift/';
  public PROFILE_API: string = 'https://www.redditgifts.com/api/v1/profiles/';
  public giftData: GiftData = new GiftData();
  public photoUrl: string = ''; // 頭貼縮圖

  /**
   * 頭貼縮圖 icon
   */
  public photoIcon(): string {
    return this.photoUrl ? `<img src="${this.photoUrl}" alt="" width="25" height="25">` : '<i class="nes-icon reddit is-small"></i>';
  }
  /**
   * 發出禮物資訊請求
   * @param slug - 用於禮物 api，識別禮物用
   */
  public async getGiftData(slug: string) {
    const respData = await axios.get(this.DETAIL_API + slug);
    const giftResp: RedditResponse = respData.data;
    this.giftData = giftResp.data;
    this.fetchProfile(this.giftData.postedBy);
  }
  public async fetchProfile(userId: string) {
    const respData = await axios.get(this.PROFILE_API + userId + '/');
    const profileResp: RedditResponse = respData.data;
    const porfile: Profile = profileResp.data;
    this.photoUrl = porfile.photoUrl;
  }

  private created() {
    const slug = this.$route.params.slug;
    this.getGiftData(slug);
  }
}
</script>

<style lang="scss" scoped>
.gift-page {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  .images {
    width: 50%;
  }
}
</style>
