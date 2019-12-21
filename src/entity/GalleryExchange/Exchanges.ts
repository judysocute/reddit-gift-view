import URLs from './URLs';

export default class Exchanges {
  public creditCost: number =  0;
  // tslint:disable-next-line:variable-name
  public image_300x100: string = '';
  // tslint:disable-next-line:variable-name
  public image_300x250: string = '';
  public logoImageUrl: string = '';
  public matchingOn: Date =  new Date();
  public shipBy: Date =  new Date();
  public signupEndsAt: Date =  new Date();
  public signupStartAt: Date =  new Date();
  public slug: string = '';
  public sortOn: number =  0;
  public subreddit: string = '';
  public title: string = '';
  public trophyImageUrl: string = '';
  public type: string = '';
  public urls: URLs[] = new Array();
}
