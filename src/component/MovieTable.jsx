import React from 'react';
import Like from '../common/Like'
import Pagination from '../common/Pagination'


 function MovieTable(props) {
     
    const {movies ,currentPage ,pageSize,onPageChange}=props
      
    return (
        <React.Fragment>
        <table className="table m-5">
            <thead>
                <tr>
                    <th> Title</th>
                    <th> Genre</th>
                    <th> Stock</th>
                    <th> Rate</th>
                    <th> </th>
                    <th> </th>
                </tr>

            </thead>
            <tbody>
              {
                  movies.map((movie)=>{
                      return (
                      <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td><Like liked={movie.liked} movie={movie} onLiked={props.onLiked}/></td>
                  <td> <button onClick={()=>{ props.onDelete(movie)}} className="btn btn-danger btn-sm m-2">Delete</button></td>
                  


                      </tr>
                      );

                  })
              }  

            </tbody>

            
        </table>
        <Pagination itemCount={props.itemCount} pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={onPageChange}/>

        </React.Fragment>
    )
}

export default MovieTable