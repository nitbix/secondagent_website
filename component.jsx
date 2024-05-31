/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xuyyyEHmeve
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-semibold text-lg" prefetch={false}>
          <BotIcon className="h-6 w-6" />
          <span>SecondAgent</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Sign Up
          </Link>
        </nav>
        <Button variant="primary" size="sm" className="md:hidden">
          Menu
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Peer-to-Peer AI Agents</h1>
              <p className="text-lg md:text-xl text-gray-300">
                SecondAgent is building the future of AI, with decentralized peer-to-peer agents that empower users and
                protect privacy.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  prefetch={false}
                >
                  Sign Up for Beta
                </Link>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="SecondAgent AI Agents"
              className="rounded-xl object-cover"
            />
          </div>
        </section>
        <section id="about" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About SecondAgent</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                SecondAgent is a team of passionate AI researchers and engineers, dedicated to building the next
                generation of decentralized, peer-to-peer AI agents. Our mission is to empower users and protect privacy
                through innovative technology.
              </p>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                We believe that the future of AI lies in a decentralized, user-centric model, where AI agents work
                directly with individuals to assist and empower them, rather than being controlled by large corporations
                or governments.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="SecondAgent Team"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section id="features" className="bg-gray-100 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <UserIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Peer-to-Peer</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SecondAgent agents operate in a decentralized, peer-to-peer network, ensuring user privacy and
                  autonomy.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <ShieldIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Privacy-Focused</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data and interactions with SecondAgent agents are protected, with no centralized storage or
                  control.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <BoltIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Powerful AI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SecondAgent agents are built on advanced AI models, capable of assisting you with a wide range of
                  tasks and queries.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <TabletsIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Multi-Platform</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SecondAgent agents can be accessed across various devices and platforms, seamlessly integrating into
                  your digital life.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <OptionIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Customizable</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailor your SecondAgent agents to your specific needs and preferences, creating a truly personalized
                  experience.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <LockIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Secure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SecondAgent's decentralized architecture and advanced security measures ensure your data and
                  interactions remain safe and protected.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="signup" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Join the SecondAgent Beta</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Be among the first to experience the future of decentralized AI.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" variant="primary">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <BotIcon className="h-6 w-6" />
            <span>SecondAgent</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function OptionIcon(props) {
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
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TabletsIcon(props) {
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
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
