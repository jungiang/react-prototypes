import React from 'react';

export default props=>{
    const tableRows = props.data.map((item, index)=>{
        return (
            <tr key={index}>
                <th>{item.name}</th>
                <th>{item.course}</th>
                <th>{item.grade}</th>
            </tr>
        );
    });
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                {/* <tr>
                    <td>Peter Parker</td>
                    <td>Parkour</td>
                    <td>85</td>
                </tr>
                <tr>
                    <td>Bruce Banner</td>
                    <td>Anger Management</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Tony Stark</td>
                    <td>Nothing Fun to Say</td>
                    <td>100</td>
                </tr> */}
            </tbody>
        </table>)
}