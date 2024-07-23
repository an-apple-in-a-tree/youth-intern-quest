import "/app/globals.css";
import Login from "./Login";

export default function Header() {
    return (
        <div className="flex justify-around items-center py-2 px-8">
            <div className="flex gap-4 w-3/4">
                <a href="/">
                    <img src="/images/logo.png" className="w-16 my-auto" alt="YIQ Logo"/>
                </a>
                <h1 className="text-md my-auto font-bold">Youth-Intern Quest!</h1>
            </div>
            <div className = "">
                <Login />
            </div>
        </div>
    );
}