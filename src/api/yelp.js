import axios from "axios";


export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TQxUyVFRS9a1ikzxUwnMN1UQH73i1VB3RlF7wZP6QimSCkADDhniiiecbPke0E6pNDBR4N2khoHuIyg-JgXEgcMiAS3Hp5IzVCVGwkwdW5KmwIKWi8tGDWYFR41zXnYx"
  }
});

//yelp.get('/search'); https://api.yelp.com/v3/businesses/search
