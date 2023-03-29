import { httpApi } from './http.api';
import './mocks/artworkBasic.api.mock';

export interface PaginationResponse<TValue> {
  status: 'ok';
  totalPages: number;
  totalRawData: number;
  value: TValue[];
}

export interface Artwork {
  FrameType: boolean[];
  PedestalType: boolean[];
  PedestalSize: (null | number)[];
  PackageType: boolean[];
  PackageSize: (null | number)[];
  UnitPrice: null[];
  FixedPrice: null[];
  FramePrice: null[];
  BoxFee: null[];
  UnitCost: null[];
  FixedCost: null[];
  ArtworkCost: null[];
  FrameCost: null[];
  FrameVendor: string[];
  FrameCostPrice: null[];
  FixVendor: string[];
  FixPrice: null[];
  PackageVendor: string[];
  PackagePrice: null[];
  Other: string[];
  OtherPrice: null[];
  Frame_Currency: number[];
  Package_Currency: number[];
  Fix_Currency: number[];
  Other_Currency: number[];
  _id: string;
  ArtworkID: string;
  Proxy: string;
  Playtime: string;
  cDescription: string;
  eDescription: string;
  FrameDescription: string;
  PedestalDescription: string;
  PackageDescription: string;
  BasicEtc: string;
  SizeNum?: any;
  Debit?: any;
  __v: number;
  author: Author[];
  artwork2invoice: Artwork2invoice;
  invoice: Invoice[];
  Size: (null | number)[];
  FrameSize: (null | number)[];
  Currency: number[];
  Type: string;
  cName: string;
  eName: string;
  Num: string;
  cMaterials: string;
  eMaterials: string;
  Age: number;
  Edition: string;
  Asset_Type: string;
  StockStatus: string;
  Warehouse: number;
  Location: string;
  SaleStatus: string;
  Guarantee_Num: string;
  IsForSale: boolean;
  Image: string;
}

interface Invoice {
  Clinet_Name: string;
  Date: Date;
  Price: (null | number)[];
  Warehouse: number[];
  Location: string[];
  _id: string;
  Num: string;
  Undertaker: string;
  Contact_Name: string;
  Address: string;
  Phone: string;
  Vender?: any;
  etc: string;
  Status: number;
  __v: number;
}

interface Date {
  year: number;
  month: number;
  day: number;
}

interface Artwork2invoice {
  _id: string;
  ArtworkID: string;
  InvoiceID: string;
  InvoiceType: string;
  ItemType: string;
  Index: number;
  __v: number;
}

interface Author {
  _id: string;
  name: string;
  cName: string;
  eName: string;
  ID: string;
  exID: string;
  __v: number;
  ArtworkID: string;
  AuthorID: string;
}

export const getArtworks = (
  params: Record<string, number | string | Date>
): Promise<PaginationResponse<Artwork>> => {
  params['page'] = params['page'] ?? 1;
  params['limit'] = params['limit'] ?? 10;

  return httpApi
    .get<PaginationResponse<Artwork>>('artworks', { params })
    .then(({ data }) => data);
};
