import React , {useState , useEffect} from 'react';
import axios from 'axios';

const MyAPI = 'https://swapi.dev/api/films/'

export default function StarWarsMovies(props) {
    
    const [num , setNum] = useState(1);
    const [ movie , setMovie] = useState('');
    
    //Basic API requests with axios look like this  
    useEffect(() => {
        async function getData(){
            // you can await here
            const res = await axios.get(`${MyAPI}${num}`)
            setMovie(res.data);
            }
            getData();
            // [num]/or any other piece of data we want has to be here so that useEffect()
            // doesnt continue to make infinte requests, this way we make sure it will run
            // only when the value of num is CHANGED! this is very important 
            // we can add more pieces of date into this Array
        },[num]);
    return (
        <div>
            <hr />
            <h1>Pick a Star Wars Movie</h1>
            <p>you chose: {num}</p>
            <select value={num} onChange={e=> setNum(e.target.value)}>
                <option vlaue='1'>1</option>
                <option vlaue='2'>2</option>
                <option vlaue='3'>3</option>
                <option vlaue='4'>4</option>
                <option vlaue='5'>5</option>
                <option vlaue='6'>6</option>
            </select>
            <h2>{movie.title}</h2>
            <p>{movie.opening_crawl}</p>
        </div>
    );
}

