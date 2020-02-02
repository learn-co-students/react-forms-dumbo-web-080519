import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }
  
  onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  onSubmit = event => {
    event.preventDefault()
    formData =  {
      firstName = this.state.firstName,
      lastName = this.state.lastName
    }
    this.sendData(formData)
  }

  sendData = formData => {
    
  }
  render() {
    return (
      <form onSubmit={this.onSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.onChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.onChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;