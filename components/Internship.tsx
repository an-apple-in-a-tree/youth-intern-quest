import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

interface InternshipProps {
    internship: {
        id: number;
        name: string;
        description: string;
        organization: string;
        fields: string[];
        start_date: string; // Assuming ISO date strings
        end_date: string;   // Assuming ISO date strings
        application_deadline: string; // Assuming ISO date strings
        type: string[];
        link: string;
    };
}

const Internship: React.FC<InternshipProps> = ({ internship }) => {
    return (
        <Card className= "card">
            <a href={internship.link} target="_blank" rel="noopener noreferrer">
                <CardHeader className = "card-title">{internship.name}</CardHeader>
                <CardBody className="card-body flex flex-col justify-around">
                    <div className="flex flex-row card-actions justify-end">
                        {internship.fields.map((field, index) => (
                            <div key={index} className="badge badge-outline">{field}</div>
                        ))}
                    </div>
                    <p><strong>Description:</strong> {internship.description}</p>
                    <p><strong>Organization:</strong> {internship.organization}</p>

                    <p>
                        <strong>Duration:</strong> {new Date(internship.start_date).toLocaleDateString()} - {new Date(internship.end_date).toLocaleDateString()}
                    </p>
                    <p><strong>Application
                        Deadline:</strong> {new Date(internship.application_deadline).toLocaleDateString()}</p>
                    <div className="flex flex-row card-actions justify-start">
                        {internship.type.map((type, index) => (
                            <div key={index} className="badge badge-secondary">{type}</div>
                        ))}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Apply Now
                    </button>
                </CardBody>
            </a>

        </Card>
    );
};

export default Internship;
