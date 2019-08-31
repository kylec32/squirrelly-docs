/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import withBaseUrl from '@docusaurus/withBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Unbeatable Performance</>,
    imageUrl: 'img/undraw/outer_space.svg',
    description: (
      <>
        <a href='docs/v7/performance'>Benchmarks</a> demonstrate
        just how fast Squirrelly is. Think fast, then multiply by crazy speedy, and you have an idea of Squirrelly's performance.
      </>
    )
  },
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw/coding.svg',
    description: (
      <>
        Squirrelly's template syntax (inspired by Handlebars and Nunjucks) is easy to read and write, and incredibly powerful.
      </>
    )
  },
  {
    title: <>Powerful and Lightweight</>,
    imageUrl: 'img/undraw/collecting.svg',
    description: (
      <>
        Squirrelly comes with the necessary features to create incredibly powerful templates. Helpers, filters, native code, partials... with a minzipped bundle cost of only ~2.2KB! The runtime library is even smaller: only 600 bytes minzipped!
      </>
    )
  }
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      permalink={'/'}
      title="SquirrellyJS"
      description="Blazing-fast, lightweight, powerful and modern JS template engine"
    >
      <div className={styles['index-hero']}>
        <div className={styles['index-hero-inner']}>
          <img
            alt="Squirrel"
            className={styles['index-hero-logo']}
            src={withBaseUrl('img/logo/fit.svg')}
            style={{ width: '40%' }}
          />
          <h1 className={styles['index-hero-project-tagline']}>
            Squirrelly is a
            <br />{' '}
            <span className={styles['index-hero-project-keywords']}>
              Powerful
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              Lightweight
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              Blazing-Fast
            </span>{' '}
            <br />
            JS template engine
          </h1>
          <div className={styles['index-ctas']}>
            <Link
              className={styles['index-ctas-get-started-button']}
              to={withBaseUrl('docs/v7/install')}
            >
              Get Started
            </Link>
            <span className={styles['index-ctas-github-button']}>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=squirrellyjs&amp;repo=squirrelly&amp;type=star&amp;count=true&amp;size=large"
                frameBorder={0}
                scrolling={0}
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles['announcement']}>
        <div className={styles['announcement-inner']}>
          We're working on{' '}
          <a href="https://github.com/facebook/Docusaurus/issues/789">
            Squirrelly v8
          </a>{' '}
          - contribute by suggesting features or giving{' '}
          <Link to={'https://github.com/squirrellyjs/squirrelly/issues/106'}>
            feedback here
          </Link>
          !
        </div>
      </div>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
