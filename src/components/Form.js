import React from 'react';
// import 

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

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

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div key={this.state.firstName}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      // <form onSubmit={event => this.handleSubmit(event)}>
      //   <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.props.formData.firstName} />
      //   <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.props.formData.lastName} />
      //   <input type="submit" />
      //   {this.listOfSubmissions()}
      //   {console.log(this.state)}
      // </form>
      <div>
        <form>
          <input
              type="text"
              onChange={event => this.props.handleFirstNameChange(event)}
              value={this.props.formData.firstName}
            />
            <input
              type="text"
              onChange={event => this.props.handleLastNameChange(event)}
              value={this.props.formData.lastName}
            />
        </form>
      </div>
    )
  }
}

export default Form;