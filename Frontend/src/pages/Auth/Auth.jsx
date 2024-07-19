import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-xl font-bold">ProjectHub</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
          <div className="text-center mt-4">
                <span>{active ? "" : ""}</span>
                <Button variant="ghost" onClick={() => setActive(!active)}>
                  {active ? "Sign In" : "Sign Up"}
                </Button>
              </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                Manage your projects with ease
              </h1>
              <p className="max-w-md text-primary-foreground/80 md:text-xl">
                ProjectHub is a powerful project management platform that helps teams collaborate, track progress, and
                deliver projects on time.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg md:p-8">
              {active ? <Signup setActive={setActive} /> : <Login />}
              <div className="text-center mt-4">
                <span>{active ? "Already have an Account?" : "Don't have an Account?"}</span>
                <Button variant="ghost" onClick={() => setActive(!active)}>
                  {active ? "Sign In" : "Sign Up"}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2024 ProjectHub. All rights reserved.</p>
          <p className="text-sm text-muted-foreground"> Designed and Maintained by Ronit Jena.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
};

export default Auth;
