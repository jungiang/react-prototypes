import React from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: contactData
        }
    }
    addContact(contact){
        const {contacts} = this.state;
        this.setState({
            contacts: [...contacts, contact]
        })
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center my-3">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact.bind(this)}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}

export default App;

