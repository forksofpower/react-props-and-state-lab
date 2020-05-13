import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets

    return <div className="ui cards">
      {pets && pets.map(pet =>
          <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      )}
    </div>
  }
}

export default PetBrowser