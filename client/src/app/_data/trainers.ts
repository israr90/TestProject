import { AddressClass } from '../_model/address';
import { CertificationClass, Trainer } from '../_model/user';

export const trainersData = [
  new Trainer(
    1,
    'erik',
    'erik_w',
    new AddressClass('Surrey', 'BC', 'Canada', '123st 34ave, surrey bc canada'),
    [
      new CertificationClass(
        'xxxxx',
        'whatever',
        new Date(2018, 11, 10),
        new Date(2021, 11, 10)
      ),
    ],
    ['Bodybuilding', 'WeightLoss', 'Nutrtion', 'HIIT']
  ),
  new Trainer(
    2,
    'teresa',
    'teresaw',
    new AddressClass('Buraby', 'BC', 'Canada', '123st 34ave, surrey bc canada'),
    [
      new CertificationClass(
        'xxxxx',
        'whatever',
        new Date(2018, 11, 10),
        new Date(2021, 11, 10)
      ),
    ],
    ['Bodybuilding', 'WeightLoss', 'Nutrtion', 'HIIT']
  ),
  new Trainer(
    0,
    'Hang',
    'Hangw',
    new AddressClass('Buraby', 'BC', 'Canada', '123st 34ave, surrey bc canada'),
    [
      new CertificationClass(
        'xxxxx',
        'whatever',
        new Date(2018, 11, 10),
        new Date(2021, 11, 10)
      ),
    ],
    ['Bodybuilding', 'WeightLoss', 'Nutrtion', 'HIIT']
  ),
];
