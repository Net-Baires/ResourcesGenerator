import { SpeakerModel } from "./Speaker";
import { DateDirectionModel } from "./DateDirection";

export class MeetupBannerModel {
  public Speaker1: SpeakerModel;
  public Speaker2: SpeakerModel;
  public DateDir: DateDirectionModel;
  public SocialBanner: boolean;

  public constructor() {
    this.Speaker1 = new SpeakerModel();
    this.Speaker2 = new SpeakerModel();
    this.DateDir = new DateDirectionModel();
    this.SocialBanner = false;
  }
}
