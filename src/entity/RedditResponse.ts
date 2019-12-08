import RespData from './GiftResp/RespData';
import RespError from './GiftResp/RespError';
import RespURLs from './GiftResp/RespURLs';

/**
 * 個別禮物交換資訊 Response 訊息
 */
export default class RedditResponse {
  /**
   * 主要回覆資料
   */
  public data: any = new RespData();
  /**
   *  錯誤訊息 （目前沒遇到過錯誤的）
   */
  public error: any = new RespError();
  /**
   * 相關 API
   */
  public urls: any = new RespURLs();
}
