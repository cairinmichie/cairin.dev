import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p className="mt-3 text-2xl">
        Get started by editing <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/index.js</code>
      </p>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-xl">Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">Learn &rarr;</h3>
          <p className="mt-4 text-xl">Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">Examples &rarr;</h3>
          <p className="mt-4 text-xl">Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
          <p className="mt-4 text-xl">Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  </div>

  // <style jsx>{`
  //   .container {
  //     min-height: 100vh;
  //     padding: 0 0.5rem;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: center;
  //   }

  //   main {
  //     padding: 5rem 0;
  //     flex: 1;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: center;
  //   }

  //   footer {
  //     width: 100%;
  //     height: 100px;
  //     border-top: 1px solid #eaeaea;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }

  //   footer img {
  //     margin-left: 0.5rem;
  //   }

  //   footer a {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }

  //   a {
  //     color: inherit;
  //     text-decoration: none;
  //   }

  //   .title a {
  //     color: #0070f3;
  //     text-decoration: none;
  //   }

  //   .title a:hover,
  //   .title a:focus,
  //   .title a:active {
  //     text-decoration: underline;
  //   }

  //   .title {
  //     margin: 0;
  //     line-height: 1.15;
  //     font-size: 4rem;
  //   }

  //   .title,
  //   .description {
  //     text-align: center;
  //   }

  //   .description {
  //     line-height: 1.5;
  //     font-size: 1.5rem;
  //   }

  //   code {
  //     background: #fafafa;
  //     border-radius: 5px;
  //     padding: 0.75rem;
  //     font-size: 1.1rem;
  //     font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
  //       DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  //   }

  //   .grid {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-wrap: wrap;

  //     max-width: 800px;
  //     margin-top: 3rem;
  //   }

  //   .card {
  //     margin: 1rem;
  //     flex-basis: 45%;
  //     padding: 1.5rem;
  //     text-align: left;
  //     color: inherit;
  //     text-decoration: none;
  //     border: 1px solid #eaeaea;
  //     border-radius: 10px;
  //     transition: color 0.15s ease, border-color 0.15s ease;
  //   }

  //   .card:hover,
  //   .card:focus,
  //   .card:active {
  //     color: #0070f3;
  //     border-color: #0070f3;
  //   }

  //   .card h3 {
  //     margin: 0 0 1rem 0;
  //     font-size: 1.5rem;
  //   }

  //   .card p {
  //     margin: 0;
  //     font-size: 1.25rem;
  //     line-height: 1.5;
  //   }

  //   @media (max-width: 600px) {
  //     .grid {
  //       width: 100%;
  //       flex-direction: column;
  //     }
  //   }
  // `}</style>

  // <style jsx global>{`
  //   html,
  //   body {
  //     padding: 0;
  //     margin: 0;
  //     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  //       Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  //   }

  //   * {
  //     box-sizing: border-box;
  //   }
  // `}</style>
)

export default Home
