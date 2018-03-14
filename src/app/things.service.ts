import { Injectable } from '@angular/core';
import { Thing } from './thing';

@Injectable()
export class ThingsService {
  constructor() {}

  getThings(): Promise<Thing[]> {
    return Promise.resolve([
      {
        id: '83e79d48-1807-4d56-8606-60d39f20b164',
        height: 186,
        width: 20,
        name: 'ENERSOL'
      },
      {
        id: '5d5ca2ea-a7e2-43d1-9fcc-8d3252e3f51b',
        height: 209,
        width: 20,
        name: 'HARMONEY'
      },
      {
        id: '6a498e34-a19f-4291-8f8c-b0fb4f1dbab0',
        height: 196,
        width: 38,
        name: 'INRT'
      },
      {
        id: '634b71e6-ffb2-4f75-8cf0-342a1c703c69',
        height: 174,
        width: 35,
        name: 'AVIT'
      },
      {
        id: '767fcf41-a151-485e-83ae-aa080a4d656a',
        height: 196,
        width: 23,
        name: 'GENMOM'
      },
      {
        id: 'fbe58edf-4832-4077-a449-07f54d5b102c',
        height: 196,
        width: 38,
        name: 'REALYSIS'
      },
      {
        id: '3bec4a53-9aff-4455-9ce3-4640ad2df2a7',
        height: 187,
        width: 23,
        name: 'TURNLING'
      },
      {
        id: '2be9c62f-f69a-478a-aee1-11de4af89313',
        height: 204,
        width: 30,
        name: 'ELEMANTRA'
      },
      {
        id: '3fdea555-1265-4916-9ce4-ce157c6b1d5f',
        height: 190,
        width: 29,
        name: 'IZZBY'
      },
      {
        id: '42591a9f-10e4-4802-9b81-86c9cd255fae',
        height: 182,
        width: 38,
        name: 'PHEAST'
      },
      {
        id: 'e3c07723-b01d-4a20-b045-87a86bad3b07',
        height: 186,
        width: 23,
        name: 'INSURESYS'
      },
      {
        id: 'a6319a9e-3f02-4208-94b3-121fa02df162',
        height: 170,
        width: 22,
        name: 'QUAILCOM'
      },
      {
        id: '79960967-dbbc-4a43-b496-f7cae5fb540f',
        height: 202,
        width: 29,
        name: 'LUDAK'
      },
      {
        id: 'a86fb262-fd24-4839-83c5-e106c0503ff6',
        height: 198,
        width: 29,
        name: 'KROG'
      },
      {
        id: '8f8e44df-365b-48f4-93cb-bbc7652ae48c',
        height: 176,
        width: 22,
        name: 'PERKLE'
      },
      {
        id: '1ed47884-2b6c-4bab-8b82-380b7883e0f1',
        height: 203,
        width: 28,
        name: 'ILLUMITY'
      },
      {
        id: 'c2fbbe10-13db-44ce-a093-28d21c3e7bf1',
        height: 177,
        width: 34,
        name: 'ECLIPTO'
      },
      {
        id: '13149c70-e08c-4998-a434-cf91eeecabf9',
        height: 171,
        width: 38,
        name: 'ZAPPIX'
      },
      {
        id: '930065f7-0889-4e38-8496-9bac99e9b1da',
        height: 190,
        width: 29,
        name: 'ISODRIVE'
      },
      {
        id: '77912a37-67a9-4102-a797-1556ddec388c',
        height: 175,
        width: 31,
        name: 'DEEPENDS'
      },
      {
        id: 'fcf3118f-f534-4507-9671-58b55d02a383',
        height: 209,
        width: 28,
        name: 'OPTIQUE'
      },
      {
        id: 'e69df4b0-7d95-4f8d-8a8f-f0c95e18004e',
        height: 176,
        width: 36,
        name: 'ORBIN'
      },
      {
        id: 'db16208c-0c09-4e12-aa07-75b848bd7c7d',
        height: 179,
        width: 34,
        name: 'MAGMINA'
      },
      {
        id: '71ed5c13-e2a7-478c-88a3-24d4350496d3',
        height: 206,
        width: 23,
        name: 'TUBESYS'
      },
      {
        id: 'd641baa6-4e29-487b-acd2-3990ddd2f1cc',
        height: 203,
        width: 28,
        name: 'JAMNATION'
      },
      {
        id: '38fa8832-2679-4865-a717-c0a237fc86a9',
        height: 194,
        width: 20,
        name: 'GENESYNK'
      },
      {
        id: 'a43e02ad-557f-4215-89c9-23cf7e56c5ce',
        height: 186,
        width: 37,
        name: 'ACCRUEX'
      },
      {
        id: '61c8a8b1-c6d3-40a1-9daa-9aef65b4dc0f',
        height: 209,
        width: 22,
        name: 'SOFTMICRO'
      },
      {
        id: '05bccc28-0aea-400c-a15d-3d6c7eb15ea7',
        height: 181,
        width: 34,
        name: 'SPACEWAX'
      },
      {
        id: '834b3d49-49f1-4dcb-91e0-e9be2aaeae8c',
        height: 183,
        width: 38,
        name: 'XYMONK'
      },
      {
        id: 'd0e27196-2bbe-4fb1-a676-5f70d22c220b',
        height: 172,
        width: 23,
        name: 'QUALITERN'
      },
      {
        id: '4a684cf9-8c8f-4856-b89f-ea6abb995b18',
        height: 207,
        width: 25,
        name: 'DIGITALUS'
      },
      {
        id: '180ec80e-fb08-4b42-b3be-20a913879ce0',
        height: 206,
        width: 29,
        name: 'INCUBUS'
      },
      {
        id: '629bceda-e73b-4971-a1c4-a9aef523383b',
        height: 187,
        width: 35,
        name: 'ROOFORIA'
      },
      {
        id: '4a4ba665-a1f7-4e97-aef4-1d4b241f532f',
        height: 179,
        width: 23,
        name: 'MEDESIGN'
      },
      {
        id: 'e2370982-9e60-43a0-a312-003fc6f5c73c',
        height: 184,
        width: 38,
        name: 'PULZE'
      },
      {
        id: 'c936c113-f5bc-4c6b-84a7-43104fe78ff4',
        height: 178,
        width: 25,
        name: 'INJOY'
      },
      {
        id: '706adf14-ea7c-431b-8e40-64e2f2e2a3cb',
        height: 172,
        width: 28,
        name: 'CINESANCT'
      },
      {
        id: 'f2726d9c-17f7-4303-ba2a-69a1f59b50f3',
        height: 178,
        width: 20,
        name: 'APPLICA'
      },
      {
        id: 'eab2a3da-505a-4c31-b12a-fcabb7f0789a',
        height: 188,
        width: 21,
        name: 'GONKLE'
      },
      {
        id: 'b82d920c-8ff7-48be-8252-1463ef1bdfd2',
        height: 198,
        width: 32,
        name: 'GRONK'
      },
      {
        id: '577fee0c-c13b-406e-bde3-791694ed7655',
        height: 200,
        width: 29,
        name: 'OBONES'
      },
      {
        id: 'e155386a-626a-42a7-865f-39aea809f4dd',
        height: 182,
        width: 20,
        name: 'ZENTURY'
      },
      {
        id: 'a26bb3b3-4c08-438f-8fbe-2b78ce302bf2',
        height: 173,
        width: 28,
        name: 'GLUKGLUK'
      },
      {
        id: '4125a85a-5265-40f1-b68b-eb7518e4316f',
        height: 195,
        width: 21,
        name: 'ECLIPSENT'
      },
      {
        id: 'bad86466-3585-4146-ae13-995970d037f4',
        height: 208,
        width: 32,
        name: 'ARCTIQ'
      },
      {
        id: '6684b496-cdd6-4e1d-840c-8aa0ce2bf13f',
        height: 195,
        width: 25,
        name: 'VELOS'
      },
      {
        id: '791b628b-b930-4b3d-9029-4d84179d1755',
        height: 193,
        width: 27,
        name: 'PANZENT'
      },
      {
        id: 'c28670a5-cbd0-4a24-b948-75b564693aa2',
        height: 173,
        width: 23,
        name: 'ORBOID'
      },
      {
        id: 'b3be6d4e-35e0-49f2-b053-2ec0232596f6',
        height: 181,
        width: 20,
        name: 'DREAMIA'
      },
      {
        id: '02bfbb63-1985-4ae3-82cb-92576b94f983',
        height: 203,
        width: 39,
        name: 'COMSTRUCT'
      },
      {
        id: 'ec226817-8171-4ea2-ab2f-13623f62573d',
        height: 183,
        width: 28,
        name: 'MARQET'
      },
      {
        id: 'ef76d44a-ea59-497d-b9ce-7ab77bd709a2',
        height: 204,
        width: 26,
        name: 'EXOSPEED'
      },
      {
        id: '201de319-06ab-4042-a99c-e349ed942982',
        height: 170,
        width: 29,
        name: 'GENMY'
      }
    ]);
  }
}
