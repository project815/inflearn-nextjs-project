export type CreateBoardInput = {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddressInput;
  images?: [string];
};

export type BoardAddressInput = {
  zipcode: string;
  address: string;
  addressDetail: string;
};
