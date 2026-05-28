import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import UseAxiusCecure from "./UseAxiusCecure";
const MyParcel = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiusCecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myparcels/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>This is my parcel {parcels.length}</h2>
    </div>
  );
};

export default MyParcel;
