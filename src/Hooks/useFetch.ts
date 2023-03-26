import { useEffect, useState } from "react";
import { RealEstate } from "../Models/RealEstate";

interface UseFetchOptions {
  url: string;
  onSuccess?: (data: any) => void;
}

interface ResponseProps {
  data?: RealEstate[] | [] | null;
  success: boolean;
  message?: string | null;
}

export const useFetch = (options: UseFetchOptions) => {
  const [data, setData] = useState<ResponseProps>({ data: null, success: false, message: null } as ResponseProps);

  useEffect(() => {
    if (options.url) {
      let isCancelled = false;
      fetch(options.url)
        .then((response: any) => response.json())
        .then((json: any) => {
          if (!isCancelled) {
            setData(json);
          }
        });

      return () => {
        isCancelled = true;
      };
    }
  }, [options.url]);

  return {
    data: data.data?.map((rs: any) => new RealEstate(rs)),
    success: data.success,
    message: data.message,
  };
};
