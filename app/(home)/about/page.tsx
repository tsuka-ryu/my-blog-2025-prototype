import { Gimmick } from "./page.client";

export default function Page() {
  return (
    <main className="relative flex flex-col flex-1">
      <Gimmick />
      <div className="z-0 mx-auto max-w-page w-full px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">About me</h1>
        <section className="max-w-2xl space-y-4">
          <p>I'm a passionate Frontend Engineer specializing in modern web technologies.</p>
          <p>
            I love crafting beautiful, performant, and user-friendly web applications that make a
            difference.
          </p>
          <p>
            Currently working on cutting-edge React applications while exploring new frontend
            technologies. I'm also interested in Rust and Haskell for their unique approaches to
            programming. I believe great UX starts with great code.
          </p>
        </section>
      </div>
    </main>
  );
}
