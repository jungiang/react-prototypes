import React from 'react';
import Field from './field';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        const {name, value} = e.target;
        const {form} = this.state;
        form[name] = value;
        if(name === 'firstName'){
            this.setState({
                form: {...form}
            })    
        }else{
            this.setState({
                form: {...form}
            })    
        }
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }
    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }
    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button>
                <button type="button" onClick={this.reset.bind(this)}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;