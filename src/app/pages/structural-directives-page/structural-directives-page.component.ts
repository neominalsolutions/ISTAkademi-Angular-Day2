import { Component } from '@angular/core';

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  friends?: string[];
  isBackendDeveloper: boolean;
  city?: string;
}

@Component({
  templateUrl: './structural-directives-page.component.html',
  styleUrls: ['./structural-directives-page.component.css'],
})
export class StructuralDirectivesPageComponent {
  // react map yapısına çok benzer
  names: string[] = ['nilsu', 'caner', 'alparsan', 'emre', 'emirhan'];

  // referance type
  users: IUser[] = [
    {
      id: 1,
      firstname: 'Nilsu',
      lastname: 'Acar',
      isBackendDeveloper: false,
      city: 'ankara', // arayüzde gelen değere göre plaka kodu vericez
    },
    {
      id: 2,
      firstname: 'Caner',
      lastname: 'Dursun',
      friends: ['Alparslan', 'Emirhan'],
      isBackendDeveloper: true,
      city: 'istanbul',
    },
    {
      id: 3,
      firstname: 'Alparslan',
      lastname: 'Deveci',
      isBackendDeveloper: true,
      city: 'istanbul',
    },
    {
      id: 4,
      firstname: 'Emirhan',
      lastname: 'Tuğtekin',
      isBackendDeveloper: true,
      city: 'antalya',
    },
    {
      id: 5,
      firstname: 'Emre',
      lastname: 'Boztepe',
      isBackendDeveloper: false,
      city: 'konya',
    },
  ];
}
