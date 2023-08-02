
const SearchBox = ({searchChange}) =>{
    return (
        <>
            <input 
                type="search" 
                placeholder="Search Robots"
                className="ma2 pa2 b--light-purple bg-gold" 
                onChange={searchChange}
            />
        </>
    )
}

export default SearchBox