import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>
          Comprehensive data management, cataloging, and governance platform for modern data teams
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginRight: '1rem' }}
          >
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/features"
            style={{ color: 'white', borderColor: 'white' }}
          >
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Data Management Platform`}
      description="DataOculus is a comprehensive data management platform for cataloging, governance, and discovery of your data assets."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
