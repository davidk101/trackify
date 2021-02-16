import React, {Component} from 'react'

export default class CreateEvent extends Component{

    constructor(props){
        super(props) // super is necessary for constructor definition of subclass

        this.state = { // state is the equivalent to variables to hold data
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []

        }
    }

    // updating elements within the state
    onChangeUsername(e){
        this.setState({
            username: e.target.value // target -> textbox
        })
    }

    // updating elements within the state
    onChangeDescription(e){
        this.setState({
            description: e.target.value // target -> textbox
        })
    }

    // updating elements within the state
    onChangeDuration(e){
        this.setState({
            duration: e.target.value // target -> textbox
        })
    }

    // updating elements within the state
    onChangeDate(e){
        this.setState({
            date: date
        })
    }

    // submission of form
    onSubmit(e){

        e.preventDefault()

        const event = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(event)

        window.location = '/' // taking user back to homepage PATH
    }

    render(){
        return(
            <div>
                <p>Create Event component</p>
            </div>
        )
    }
}