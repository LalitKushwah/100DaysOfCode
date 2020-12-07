import { useState } from "react";
import { useDispatch } from "react-redux";
import {SearchKeyword} from '../../actions/index';

const Header = () => {

    const dispatch = useDispatch();
    const [ search, setSearch ] = useState('');
    
    const fetchMoviesBySeach = (e) => {        
        e.preventDefault();
        dispatch(SearchKeyword(search));
        setSearch('');
    };

    return (
        <nav className="navbar navbar-light justify-content-between sticky-top">
            <a className="navbar-brand">Awesome Movies</a>
            <form className="form-inline">
                <input 
                    className="form-control mr-sm-2 rounded" 
                    type="search" 
                    placeholder="Search"
                    value = {search}
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}/>
                    <button  
                        disabled={search && search !== '' ? false : true}                      
                        className="btn btn-outline-primary my-2 my-sm-0" 
                        type="submit"
                        onClick={e => fetchMoviesBySeach(e)}>Search</button>
            </form>
        </nav>
    )
}

export default Header;