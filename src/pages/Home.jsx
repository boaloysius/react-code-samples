export default function Home() {
  return (
    <div>
      <h1>React Code Samples</h1>

      <h2>Description</h2>

      <p>
        Welcome to the React Code Samples repository! This repository is a
        collection of code examples and snippets showcasing various features,
        patterns, and best practices in React.
      </p>

      <h2>Installation</h2>

      <ol>
        <li>
          Clone the repository:
          <code>
            git clone
            https://https://github.com/boaloysius/react-code-samples.git
          </code>
        </li>
        <li>
          Navigate to the project directory: <code>cd react-code-samples</code>
        </li>
        <li>
          Install the dependencies: <code>npm install</code>
        </li>
      </ol>

      <h2>Routes</h2>

      <ol>
        <li>
          <a href="https://react-code-samples.netlify.app/carousel">Carousel</a>
          : This page demonstrates a carousel implemented in React.{" "}
          <a href="/src/pages/PageCarousel.jsx">Code</a>
        </li>
        <li>
          <a href="https://react-code-samples.netlify.app/context-api">
            Context API
          </a>
          : React Context API is a feature provided by React for managing global
          state within an application. It allows data to be shared and accessed
          by components without explicitly passing props down the component
          tree. This example showcases a straightforward demonstration of
          utilizing the Context API to perform search and filter operations.{" "}
          <a href="/src/pages/PageSimpleUseContext.jsx">Code</a>
        </li>
        <li>
          <a href="https://react-code-samples.netlify.app/context-api-hooks">
            Advanced Context API using hooks
          </a>
          : This page builds upon the previous example of utilizing the Context
          API and introduces custom hooks to enhance abstraction for both the
          context provider and its associated values.{" "}
          <a href="/src/pages/PageAdvancedUseContext.jsx">Code</a>
        </li>
      </ol>

      <h2>Packages Installation Help with Vite</h2>

      <p>
        To install the required packages for your project, run the following
        command:
      </p>

      <pre>
        <code>
          npm install eslint vite-plugin-eslint eslint-config-react-app
        </code>
      </pre>
    </div>
  );
}
