import React, {Component} from 'react'

export default class CreateEvent extends Component{

    constructor(props){
        super(props) // super is necessary for constructor definition of subclass

        // ensuring 'this' binds/refers to the correct class i.e. CreateEvent else 'this' will be undefined
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = { // state is the equivalent of public variables store date accessed within this class
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []

        }
    }

    // LIFECYCLE METHOD: loaded right before this page loads
    // temporary hard-code until loaded from DB
    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
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