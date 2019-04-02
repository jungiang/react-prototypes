import React from 'react';
import ContactCard from './contact_card';

// class ContactList extends React.Component{
//     render(){
//         const {contacts} = this.props;
//         const list = contacts.map((item, index)=>(
//             <ContactCard key={index} contact={item}/>
//         ))
//         return (
//         <div className="col-8">
//             <div className="row">{list}</div>
//         </div>
//         )
//     }
// }

// export default ContactList;

export default props => {
    const {contacts} = props;
        const list = contacts.map((item, index)=>(
            <ContactCard key={index} contact={item}/>
        ))
    return (
        <div className="col-8">
            <div className="row">{list}</div>
        </div>
    )    
}