import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Peter',
        course: 'Parkour',
        grade: 85
    },
    {
        name: 'Bruce',
        course: 'Anger Management',
        grade: 90
    },
    {
        name: 'Tony',
        course: 'Nothing Fun to Say',
        grade: 100
    }
]

export default ()=>(
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
);