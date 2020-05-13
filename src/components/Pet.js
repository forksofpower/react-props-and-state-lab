import React from 'react'

class Pet extends React.Component {
  render() {
    let pet = this.props.pet; // use a variable to increase readability
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.name}
            {pet.gender == 'female'
              ? '♀' : '♂'
            }
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {// - Use a ternary expression to decide which version of the button to display.
           // - You could build this in a variety of ways, however this was the prettiest.
           // - `onAdoptPet` is wrapped in an anonymous function in order to pass the 
           //    variable pet.id to the callback
           pet.isAdopted
            ? <button className="ui disabled button">Already adopted</button>
            : <button className="ui primary button" onClick={this.props.onAdoptPet(pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
