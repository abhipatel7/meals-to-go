import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

import { locationRequest, locationTransform } from "./service";

interface Props {
  children: ReactNode;
}

export interface LocationContextType {
  isLoading: boolean;
  error: any;
  keyword: string;
  location: any;
  search: (key: string) => void;
}

export const LocationContext = createContext<LocationContextType>({
  location: {},
  keyword: "",
  isLoading: false,
  error: null,
  search: () => {},
});

export const LocationContextProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: any) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result as any);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
