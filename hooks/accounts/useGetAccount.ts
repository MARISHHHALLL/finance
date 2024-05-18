import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAccount = () => {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.account.$get();
      if (!response.ok) {
        throw new Error("error through getting account");
      }
      const { data } = await response.json();

      return data;
    },
  });
  return query;
};
