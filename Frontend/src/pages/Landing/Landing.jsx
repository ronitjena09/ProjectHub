import { FaCheck } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              <FaProjectDiagram  className="h-6 w-6" />
              <span className="sr-only">ProjectHub</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Streamline Your Project Management with ProjectHub
                      </h1>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Collaborate seamlessly, track progress, and manage your projects with ease. ProjectHub is the
                        ultimate platform for teams of all sizes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Sign Up
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <img
                    src="src/assets/Design_2.svg"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  />
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Key Features</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Streamline Your Workflow with ProjectHub
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      From project creation to issue tracking, ProjectHub has everything your team needs to collaborate and
                      stay organized.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <img
                    src="/src/assets/project_management.svg"
                    width="550"
                    height="310"
                    alt="Project Management"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Project Management</h3>
                    <p className="text-muted-foreground">
                      Create and manage projects with ease. Assign tasks, set deadlines, and track progress all in one
                      place.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Kanban-style project boards
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Customizable project templates
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Real-time project updates
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Collaborative Chat</h3>
                    <p className="text-muted-foreground">
                      Stay connected with your team through our built-in chat functionality. Discuss tasks, share files, and
                      keep everyone on the same page.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Real-time messaging
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        File sharing and attachments
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Threaded conversations
                      </li>
                    </ul>
                  </div>
                  <img
                    src="/src/assets/Chat.svg"
                    width="550"
                    height="310"
                    alt="Collaborative Chat"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <img
                    src="/src/assets/issue.svg"
                    width="550"
                    height="310"
                    alt="Issue Tracking"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Issue Tracking</h3>
                    <p className="text-muted-foreground">
                      Streamline your bug reporting and issue management with ProjectHub&apos;s powerful issue tracking system.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Detailed issue reports
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Customizable workflows
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Automatic notifications
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to Streamline Your Project Management?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Sign up for ProjectHub today and experience the ultimate platform for project management and
                    collaboration.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      )
    }
    
    export default Landing;
