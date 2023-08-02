import CardList from "./assets/CardList"
import { robots } from "./assets/robots"
import SearchBox from "./assets/SearchBox"
import { Component } from "react"


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    searchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.searchChange}/>
                <CardList robots = {filteredRobots} />
            </div>
        )

    }
}

export default App