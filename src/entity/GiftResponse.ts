import RespData from './GiftResp/RespData';
import RespError from './GiftResp/RespError';
import RespURLs from './GiftResp/RespURLs';

/**
 * 個別禮物交換資訊 Response 訊息
 */
export default class GiftResponse {
  public data: RespData = new RespData(); // 主要禮物資訊
  public error: RespError = new RespError(); // 錯誤訊息 （目前沒遇到過錯誤的）
  public urls: RespURLs = new RespURLs(); // 給予此交換禮物資訊回應 API （這應該會要串 reddit 登入 api）
}
