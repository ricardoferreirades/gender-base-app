import axios from "axios";

export function savePersonFavorite<T, N>(route: string, data: T): Promise<N> {
  return axios.post(route, data);
}

export function getAllFavorites<N>(route: string): Promise<N> {
  return axios.get(route);
}
