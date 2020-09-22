export interface Address {
  city: string;
  province: string;
  country: string;
  fullAddress: string;
}
export class AddressClass implements Address {
  constructor(
    _city: string,
    _province: string,
    _country: string,
    _fullAddress: string
  ) {
    this.city = _city;
    this.province = _province;
    this.country = _country;
    this.fullAddress = _fullAddress;
  }
  city: string;
  province: string;
  country: string;
  fullAddress: string;
}
