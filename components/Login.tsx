import "/app/globals.css";

export default function LoginButton() {
    return (
        <a href = "/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Log in
            </button>
        </a>

    )
}