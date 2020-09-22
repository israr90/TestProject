import { Address, AddressClass } from './address';
import { Gender } from '../constants/enums';

interface Role {
  isUser?: boolean;
  isTrainer?: boolean;
  isAdmin?: boolean;
}
interface BaseUser {
  role: Role;
  gender: Gender;
  username: string;
  knownAs: string;
}

interface TrainerCore extends BaseUser {
  focus: string[];
  lastActive: Date;
  address: Address;
  // profileUrl: string;
  certs: Certification[];
}

interface Certification {
  Description: string;
  Title: string;
  Created: Date;
  Expired: Date;
}
export class CertificationClass implements Certification {
  Description: string;
  Title: string;
  Created: Date;
  Expired: Date;
  constructor(_des: string, _title: string, _created: Date, _expire: Date) {
    this.Description = _des;
    this.Created = _created;
    this.Expired = _expire;
    this.Title = _title;
  }
}

export class Trainer implements TrainerCore {
  focus: string[];
  gender: Gender;
  knownAs: string;
  lastActive: Date;
  address: Address;
  certs: Certification[];
  role: Role = { isAdmin: false, isTrainer: true, isUser: false };
  username: string;
  constructor(
    _gender: Gender,
    _knownAs: string,
    _username: string,
    _address: AddressClass,
    _certs: CertificationClass[],
    _focus: string[]
  ) {
    this.gender = _gender;
    this.knownAs = _knownAs;
    this.username = _username;
    this.address = _address;
    this.certs = _certs;
    this.focus = _focus;
    this.lastActive = new Date();
  }
}

export class UserClass implements BaseUser {
  role: Role = { isAdmin: false, isTrainer: false, isUser: true };
  username: string;
  gender: Gender;
  knownAs: string;
  
  constructor(_gender: Gender, _knownAs: string, _username: string) {
    
    this.role.isAdmin=false;
    this.role.isUser=true;
    this.role.isTrainer=false;

    this.gender = _gender;
    this.knownAs = _knownAs;
    this.username = _username;
  }
}
export interface UserData {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export class City 
{
  name:string;
  state:string;
  country:string;
  constructor (name, state, country ) {
  this.name = name;
  this.state = state;
  this.country = country;
  }
  toString() {
  return this.name + ', ' + this.state + ', ' + this.country;
  }
  }
  
 