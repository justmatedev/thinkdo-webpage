export default function Footer() {
  return (
    <footer className="py-10 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-around items-center container mx-auto py-5">
        <a
          href="https://github.com/justmatedev/thinkdo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-dark md:text-base lg:text-lg hover:text-primary transition-colors"
        >
          <strong>Github</strong>: Thinkdo
        </a>

        <p className="text-foreground-dark lg:text-lg">
          <strong>Email</strong>: justmatedev@gmail.com
        </p>
      </div>
      <p className="text-foreground-dark lg:text-lg py-5 px-4 text-center">
        © 2025 JustMate. Released under the MIT License.
      </p>
    </footer>
  )
}
