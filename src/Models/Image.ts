export class Image {
  url: string;
  type: string;

  constructor(image: any) {
    this.url = image.url;
    this.type = image.type;
  }
}
