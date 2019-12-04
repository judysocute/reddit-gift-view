import Assets from './Assets';
import Exchange from './Exchange';
import NextGift from './NextGift';
import PreviousGift from './PreviousGift';

export default class RespData {
  public assets: Assets[] = new Array();
  public awards: any;
  public awardsToGive: any;
  public bodyHTML: string = '';
  public bodySnudown: string = '';
  public comments: any;
  public commentsCount: number = 0;
  public createdAt: string = '';
  public exchange: Exchange = new Exchange();
  public from: string = '';
  public hasAwards: boolean = false;
  public hasVoted: boolean = true;
  public id: number = 1552256;
  public isRematch: boolean = false;
  public nextGift: NextGift = new NextGift();
  public postedBy: string = '';
  public previousGift: PreviousGift = new PreviousGift();
  public slug: string = '';
  public thumbnailUrl: string = '';
  public title: string = '';
  public updatedAt: string = '';
  public votes: number = 2;
}
