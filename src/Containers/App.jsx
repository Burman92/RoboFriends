import CardList from "../Components/CardList"
import SearchBox from "../Components/SearchBox"
import { Component } from "react"
import './App.css'
import Scroll from "../Components/Scroll"



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users})
            })
    }

    searchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(!this.state.robots.length){
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange = {this.searchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            )
        }

    }
}

export default App