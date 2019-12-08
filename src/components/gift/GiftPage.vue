<template>
  <div class="gift-page" v-if="giftData.updatedAt">
    <AssetsBox class="images" :assets="giftData.assets" />
    <div class="info">
      <div class="banner info-block">
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
      <div class="to-gallery info-block">
        <button>View Gallery</button>
      </div>
      <div class="awards info-block" v-if="giftData.awards">
        <p>This gift received awards!</p>
        <img v-for="(award, idx) in giftData.awards" :src="award.smallIconUrl" :alt="award.title" :key="idx">
      </div>
      <div class="body">
        <p v-html="giftData.bodyHTML"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import RedditResponse from '@/entity/RedditResponse';
import GiftData from '@/entity/GiftResp/RespData';
import Profile from '@/entity/Profile';
import AssetsBox from './AssetsBox.vue';
@Component({
  components: {
    AssetsBox,
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
   * 時間字串
   */
  public dateString(sDate: string) {
    const date: Date = new Date(sDate);
    const yyyy = date.getFullYear();
    const mm = date.getMonth() === 0 ? 12 : date.getMonth() - 1;
    const dd = date.getDate();
    return `${yyyy}/${mm}/${dd}`;
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
  .info {
    .info-block {
      margin-bottom: 2%;
    }
    width: 48%;
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
    .to-gallery {
      > button {
        background-color: $deep-blue;
        color: $white;
        font-size: 11px;
        padding: 7px 18px;
        border-radius: 3px;
        border: 1px solid $border-blue;
      }
    }
    .awards {
      text-align: left;
      > p {
        font-size: 14px;
        margin-bottom: 5px;
      }
      > img {
        cursor: pointer;
        margin-right: 5px;
      }
    }
    .body {
      text-align: left;
      padding: 15px;
      border: 1px solid $light;
      border-radius: 4px;
      p {
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
}
</style>
