import Exchange from './Exchange';
export default class Gift {
  /**
   * 讚數
   */
  public votes: number = 0;
  /**
   * 目前用不到
   */
  public hasAwards: boolean = true;
  /**
   * 此次交換類型資訊
   */
  public exchange: Exchange = new Exchange();
  /**
   * 發文者
   */
  public postedBy: string = '';
  /**
   * 禮物頁面連結
   */
  public giftUri: string = '';
  /**
   * 預覽內容（html 標籤）
   */
  public bodyHTML: string = '';
  /**
   * 預覽內容
   */
  public bodySnudown: string = '';
  /**
   * 標題
   */
  public title: string = '';
  /**
   * 預覽圖片
   */
  public thumbnailUrl: string = '';
  /**
   * 網頁標題 camel case (也可用於禮物細節頁面)
   */
  public slug: string = '';
  /**
   * 評論人數
   */
  public commentsCount: number = 0;
}
