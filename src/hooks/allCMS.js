import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export const useApiQuery = ({
  queryKey,
  url,
  enabled = true,
  secure = false,
  select,
}) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // 🔥 auto choose axios instance
  const axiosClient = secure ? axiosSecure : axiosPublic;

  return useQuery({
    queryKey: [queryKey],
    enabled,
    queryFn: async () => {
      const res = await axiosClient.get(url);
      return res.data;
    },
    select,
  });
};



