import React from 'react';

interface InternshipProps {
    internships: Array<{
        id: number;
        name: string;
        description: string;
        organization?: string;
        field?: string;
        duration: string;
        application_deadline: string;
        type: string[];
        link?: string;
    }>;
}

const InternshipList = ({ internships }: InternshipProps) => {
    return (
        <div className="internship-list">
            <h1>Internships</h1>
            <ul>
                {internships.map((internship) => (
                    <li key={internship.id}>
                        <h2>{internship.name}</h2>
                        <p>{internship.description}</p>
                        <p>Organization: {internship.organization}</p>
                        <p>Field: {internship.field}</p>
                        <p>Duration: {internship.duration}</p>
                        <p>Application Deadline: {internship.application_deadline}</p>
                        <p>Type: {internship.type.join(", ")}</p>
                        <a href={internship.link}>More Info</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InternshipList;