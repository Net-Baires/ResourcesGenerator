export class SpeakerModel {
  public Nombre: string;
  public DescripcionSpeaker: string;
  public NombreCharla: string;
  public Photo: string;
  public Active: boolean;

  constructor() {
    this.Nombre = "";
    this.DescripcionSpeaker = "";
    this.NombreCharla = "";
    this.Photo = "";
    this.Active = true;
  }
}
