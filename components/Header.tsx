import "/app/globals.css";

export default function Header() {
  return (
      <div className="flex flex-row gap-4 py-2 px-4">
          <img src="/images/logo.png" className = "w-16  my-auto" alt="YIQ Logo"/>
          <h1 className = "text-md my-auto font-bold">Youth-Intern Quest!</h1>
      </div>
  );
}
