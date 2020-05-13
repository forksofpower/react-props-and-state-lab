import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets // use a variable to increase readability

    return <div className="ui cards">
      {// use lazy evaluation just in case `pets` is undefined
       pets && pets.map(pet =>
          // make sure you set a key
          // pass the `onAdoptPet` function through from parent component to child component
          <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      )}
    </div>
  }
}

export default PetBrowser