import React, { useEffect, useState } from "react";
// import Loader from "../global/Loader";
// import { getMe } from "@app/client/data/users";
// import useQuery from "../hooks/useQuery";

export default function Greeting({
  email = false,
  name = false,
  fullName = false,
}) {
  // const { data, isLoading, isError } = useQuery(getMe);
  // const { data, isLoading, isError } = use(getMe);
  return (
    <div>
      {name && (
        <span>
          Abrelo
        </span>
      )}
      {email && (
        <span>
         abrelohd@youtube.com
        </span>
      )}
      {fullName && (
        <span>
          Abrelo HD
        </span>
      )}
    </div>
  );
}
