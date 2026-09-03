import { useState } from 'react'
import dockerLogo from './assets/docker.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="site-header">
        <a className="brand" href="https://www.docker.com/" target="_blank">
          <span className="whale" aria-hidden="true">
            🐳
          </span>
          <span className="brand-text">
            Docker<span className="brand-cyan">Lab</span>
          </span>
        </a>
        <nav className="site-nav">
          <a href="https://docs.docker.com/" target="_blank">
            Docs
          </a>
          <a href="https://hub.docker.com/" target="_blank">
            Docker Hub
          </a>
          <a
            href="https://github.com/Docker-Practical-Lab/Project01"
            target="_blank"
            aria-label="Source on GitHub"
          >
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            Source
          </a>
        </nav>
      </header>

      <section id="center">
        <div className="hero">
          <img src={dockerLogo} className="docker" alt="Docker logo" />
        </div>

        <div className="status-badge">
          <span className="pulse" aria-hidden="true"></span>
          Running in a Docker container
        </div>

        <div>
          <h1>Built with React, delivered with Docker</h1>
          <p className="lead">
            This Vite + React app is fully <code>containerized</code>. You are viewing the
            container output served from <code>localhost:5173</code> via our{' '}
            <code>Dockerfile</code>.
          </p>
        </div>

        <div className="actions">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Container started {count} time{count === 1 ? '' : 's'}
          </button>
          <a className="action-link" href="https://hub.docker.com/" target="_blank">
            Explore images
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Docker documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://docs.docker.com/get-started/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Get started with Docker
              </a>
            </li>
            <li>
              <a href="https://docs.docker.com/build/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Dockerfile best practices
              </a>
            </li>
            <li>
              <a href="https://docs.docker.com/reference/cli/docker/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Docker CLI reference
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#docker-icon"></use>
          </svg>
          <h2>Connect with the community</h2>
          <p>Join the Docker ecosystem</p>
          <ul>
            <li>
              <a href="https://github.com/docker" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://hub.docker.com/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#docker-icon"></use>
                </svg>
                Docker Hub
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/community/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#social-icon"></use>
                </svg>
                Community
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/blog/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <footer id="site-footer">
        <p>
          Containerized with <strong>Docker</strong> · Vite + React + TypeScript
        </p>
      </footer>
    </>
  )
}

export default App
