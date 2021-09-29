import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
/* Components */
import GifGridItem from './GIfGridItem';


const GifGrid = ({category}) => {
   const {data:images, loading} = useFetchGifs(category);

   return (
      <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3>
         {loading && <p className="animate__animated animate__flash">Cargando...</p>}
         <div className="card-grid">
            <ol>
               {images.map((image) =>
                  <GifGridItem
                     key={image.id}
                     {...image}
                  />
               )}
            </ol>
         </div>
      </>
   );
}

export default GifGrid;