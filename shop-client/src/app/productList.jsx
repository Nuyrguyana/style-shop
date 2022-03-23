import React, {useState} from "react";
import SearchBar from "./searchBar";

const ProductList = () => {
const [searchQuery, setSearchQuery] = useState('');

return<SearchBar setSearchQuery={searchQuery} searchQuery={setSearchQuery}/>
}

export default ProductList
