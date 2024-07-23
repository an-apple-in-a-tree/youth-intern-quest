import { createClient } from "@/utils/supabase/server";
import "./globals.css";
export default async function Index() {
  const canInitSupabaseClient = () => {

    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
      <div>
          <header className="w-screen font-bold bg-header h-screen flex flex-col justify-center items-center">
              <h1 className="text-white text-center text-8xl">YIQ</h1>
              <p className="open-sans text-white text-center text-xl">
                  The ultimate platform for students to find internships and jobs for highschoolers.
              </p>
          </header>
          <section className = "p-8">
              <div className="flex flex-row w-full gap-8 py-12 px-12">
                  <div className="my-auto text-xl pr-8">
                      <p className = "py-8">
                          Are you a student seeking an internship?
                          Your search ends here! We offer a comprehensive vault of diverse opportunities just for you.
                          Whether you're looking to gain hands-on experience, develop new skills,
                          or kickstart your career, we have the perfect internships to match your aspirations.
                          Dive into our extensive database and discover your next career step today.
                      </p>
                      <button
                          className="text-center bg-green-400 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg">
                          <a href="/pages/internship-vault">
                              <h2>Click to Enter the Vault</h2>
                          </a>
                      </button>
                  </div>
                  <img
                      className = "w-3/4"
                      src="https://tse2.mm.bing.net/th?id=OIG3.bfVQ3bipY6BtX.IdbtmA&w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn"/>
              </div>
          </section>
      </div>
  );
}
