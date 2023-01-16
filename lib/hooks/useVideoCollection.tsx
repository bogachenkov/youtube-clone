import { homeQuery, Query } from "@const/queries";
import { useQuery } from "@tanstack/react-query";

export const useVideoCollection = (query: Query = homeQuery) => {
  return useQuery(query);
}