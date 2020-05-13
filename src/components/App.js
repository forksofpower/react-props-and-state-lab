import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let params = `?type=${this.state.filters.type}`
    // query params are optional
    let url = `/api/pets${ (this.state.filters.type !== 'all') ? params : '' }`
    // get pets
    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets: pets }) ) // set pets state
  }

  handleAdoptPet = (id) => {
    let pets = this.state.pets;

    this.setState({
      pets: pets.map(pet => {
        if (pet.id === id) {
          pet.isAdopted = true
        }
        return pet;
      })
    })
  }

  handleChangeType = (e) => {
    this.setState({ filters: { type: e.target.value} });
  }
 
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.fetchPets} // just call fetch pets directly, no handler function needed  
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App