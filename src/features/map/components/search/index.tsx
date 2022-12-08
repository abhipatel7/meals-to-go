import { useEffect } from "react";
import { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../../services";

import { SearchContainer } from "./styles";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => setSearchKeyword(keyword), [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon="map"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
