import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots : user}));
    }
    onStateUpdate = (event) => {
        this.setState({ searchField : event.target.value });
        }
        
    
    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());})
        return( !robots 
            ? 
             <h1>Loading</h1>
            : 
            <div className='tc'>
                <h1 className='f1'>
                    Robot Friends
                </h1>
                <div>
                    < SearchBox stateUpdate = { this.onStateUpdate }/>
                </div>

                <Scroll>
                    <ErrorBoundary>
                        < CardList robots = { filterRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        
    }
}


export default App;