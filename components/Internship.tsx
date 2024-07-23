import React from 'react';

interface InternshipProps {
    internship: {
        id: number;
        name: string;
        description: string;
        organization: string;
        field: string[];
        start_date: string; // Assuming ISO date strings
        end_date: string;   // Assuming ISO date strings
        application_deadline: string; // Assuming ISO date strings
        type: string[];
        link: string;
    };
}

const Internship: React.FC<InternshipProps> = ({ internship }) => {
    return (
        <li key={internship.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{internship.name}</h2>
            <p><strong>Description:</strong> {internship.description}</p>
            <p><strong>Organization:</strong> {internship.organization}</p>
            <p><strong>Field:</strong> {(internship.field || []).join(', ')}</p>
            <p><strong>Duration:</strong> {new Date(internship.start_date).toLocaleDateString()} - {new Date(internship.end_date).toLocaleDateString()}</p>
            <p><strong>Application Deadline:</strong> {new Date(internship.application_deadline).toLocaleDateString()}</p>
            <p><strong>Type:</strong> {(internship.type || []).join(', ')}</p>
            <p><a href={internship.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">More Info</a></p>
        </li>
    );
};

export default Internship;
