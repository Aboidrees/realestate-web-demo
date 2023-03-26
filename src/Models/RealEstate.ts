import { User } from "./User";

export class RealEstate {
  id: number;
  advertiser: User;
  nationalID: string;
  title: string;
  price: number;
  facilitiesNum: number;
  description: string;
  type: string;
  operation: string;

  state: string;
  city: string;
  position: google.maps.LatLng;
  approval: string;
  images: string;

  constructor(realEstate: any) {
    this.id = realEstate.id;
    this.advertiser = new User(realEstate.advertiser);
    this.nationalID = realEstate.nationalID;
    this.title = realEstate.title;
    this.price = realEstate.price;
    this.facilitiesNum = realEstate.facilitiesNum;
    this.description = realEstate.description;
    this.type = realEstate.type;
    this.operation = realEstate.operation;
    this.state = realEstate.state;
    this.city = realEstate.city;
    this.state = realEstate.state;
    this.position = new google.maps.LatLng({
      lat: JSON.parse(realEstate.location)[0],
      lng: JSON.parse(realEstate.location)[1],
    });
    this.approval = realEstate.approval;
    this.images = realEstate.images.map((img: any) => new Image(img));
  }
}
