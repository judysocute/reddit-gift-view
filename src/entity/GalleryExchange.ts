import Exchanges from './GalleryExchange/Exchanges';

export default class GalleryExchange {
  /**
   * 交換項目清單
   */
  public exchanges: Exchanges[] = new Array();
  /**
   *  交換類別標題
   */
  public title: string = '';
  /**
   *  交換類別
   */
  public type: string = '';
}
