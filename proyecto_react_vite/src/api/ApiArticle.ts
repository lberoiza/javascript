import Config from '../config/Config'
import FetchRequest from "../classes/FetchRequest";
import { FetchRequestResponse } from "../classes/FetchRequest";

export interface ArticleResponse {
  _id: string,
  title: string,
  content: string,
  date: string,
  image: string,
  __v: number
}
