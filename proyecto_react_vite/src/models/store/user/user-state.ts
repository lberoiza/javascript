import { ArticleResponse } from "@/models/ArticleResponse.model";

export interface UserInformation {
  name: string;
  email: string;
  username: string;
}

export interface UserState {
  information: UserInformation;
}