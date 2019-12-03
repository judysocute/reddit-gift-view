import Exchange from './Exchange';
export default class Gift {
  public votes: number = 0; // 讚數
  public hasAwards: boolean = true; // 目前用不到
  public exchange: Exchange = new Exchange(); // 此次交換類型資訊
  public postedBy: string = ''; // 發文者
  public giftUri: string = ''; // 禮物頁面連結
  public bodyHTML: string = ''; // 預覽內容（html 標籤）
  public bodySnudown: string = ''; // 預覽內容
  public title: string = ''; // 標題
  public thumbnailUrl: string = ''; // 預覽圖片
  public slug: string = ''; // 網頁標題 camel case (也可用於禮物細節頁面)
  public commentsCount: number = 0; // 評論人數
}
