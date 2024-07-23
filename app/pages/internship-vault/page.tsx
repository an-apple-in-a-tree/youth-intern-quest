import { createClient } from "@/utils/supabase/server";
import Internship from "@/components/Internship";
import React from "react";

export default async function Page() {
    const supabase = createClient();

    const { data: internships, error } = await supabase.from('internships').select();

    if (error) {
        return <div>Error fetching internships: {error.message}</div>;
    }

    return (
        <div>
            <h1>The Internship Vault</h1>
            <section className="w-3/4 px-4">
                {internships && internships.length > 0 ? (
                    <ul className=" pl-5 space-y-4">
                        {internships.map((internship) => (
                            <Internship key={internship.id} internship={internship} />
                        ))}
                    </ul>
                ) : (
                    <p>No internships available.</p>
                )}
            </section>
        </div>
    );
}
