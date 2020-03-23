import React, { useState ,useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar.js";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage,setErrorMessage]= useState('');

  const searchApi = async () => {
    console.log('hi there');
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
     // console.log(error); 
     setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, [])

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
