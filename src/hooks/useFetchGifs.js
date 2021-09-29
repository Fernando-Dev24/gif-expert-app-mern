import { useState, useEffect } from "react";
/* Helpers */
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
   const [state, setState] = useState({
      data: [],
      loading: true
   });

   useEffect(() => {
      getGifs(category)
         .then(images => {
            setState({
               data: images,
               loading: false
            });
         })
         .catch(error => console.log(error));
   }, [category]);

   return state;
};