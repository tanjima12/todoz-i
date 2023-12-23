import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";

import { AuthContext } from "../LogIn/AuthProvider";
import useAxiosPublic from "./PublicAxios";

const useListQuery = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: todo = [], refetch } = useQuery({
    queryKey: ["todolist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addList?email=${user?.email}`);
      return res.data;
    },
  });

  return { todo, refetch };
};

export default useListQuery;
