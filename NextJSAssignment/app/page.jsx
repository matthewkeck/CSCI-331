"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page(){

    return <div>
            <CountButton name = {"Plus 1"} mult = {1} size = {.5}/>
            <CountButton name = {"Plus 2"} mult = {2} size = {2}/>
            <hr />
            <p><a href="https://github.com/matthewkeck/CSCI-331">github link</a></p>
            <hr />
            <SearchBar/>
        </div>
        
}