import React, {Component} from 'react'

export default class CreateUser extends Component{

    constructor(props){
        super(props) // super is necessary for constructor definition of subclass

        // ensuring 'this' binds/refers to the correct class i.e. CreateEvent else 'this' will be undefined
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = { // state is the equivalent of public variables store date accessed within this class
            username: ''
        }
    }

    // updating elements within the state
    onChangeUsername(e){
        this.setState({
            username: e.target.value // target -> textbox
        })
    }

    // submission of form
    onSubmit(e){

        e.preventDefault()

        const user = {
            username: this.state.username
        }

        console.log(user)

        //clearing the text field once submit is pressed
        this.setState({
            username: ''
        })
    }

    render(){
        return(
            <div>
                <p>Create User component</p>
            </div>
        )
    }
}