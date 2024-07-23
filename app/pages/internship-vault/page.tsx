import { createClient } from "@/utils/supabase/server";
const supabase = createClient();

export default async function Page (){
    const { data: internships } = await supabase.from('internships').select()

    return <div>
        <pre>{JSON.stringify(internships, null, 2)}</pre>
    </div>

}