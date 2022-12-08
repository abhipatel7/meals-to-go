import { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../../services";

import { SearchContainer } from "./styles";

interface Props {
  isFavoritesToggled: boolean;
  onFavoritesToggle: () => void;
}

export const Search = ({ isFavoritesToggled, onFavoritesToggle }: Props) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => setSearchKeyword(keyword), [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
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
