import { useState, useEffect } from "react"
import "./SearchBar.css"



export default function SearchBar(){

    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchApiData, [searchString])
    function fetchApiData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        
        .then(products => {
            const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLocaleLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return(
                    <div className="product">
                        <p className="productTitle">{product.title}</p>
                        <p className="productPrice">{product.price}</p>
                        <img className="productImage" src={product.image} alt={product.title} />
                        <p></p>
                    </div>
                )
            })
            setFilteredProducts(currentFilter)
        })
    }
    
    function handleChange(event){
        setSearchString(event.target.value)
    }

    return <div>
            <p>Search Bar</p>
            <input className="searchBar" type="text" value={searchString} onChange={handleChange} />
            <div className="products">{filteredProducts}</div>
        </div>
        
}