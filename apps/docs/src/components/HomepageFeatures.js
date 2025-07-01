import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Configure Your Datastore",
    icon: "🗄️",
    description: (
      <>
        Seamlessly connect to multiple data sources including databases, data warehouses, 
        and cloud storage. Get your data infrastructure ready in minutes with our 
        comprehensive configuration guides.
      </>
    ),
    link: "/docs/configuring-datastore",
  },
  {
    title: "Onboard Your Data Catalog",
    icon: "📊",
    description: (
      <>
        Build a comprehensive data catalog that provides visibility, governance, 
        and discovery across all your data assets. Transform your data into 
        actionable insights with powerful cataloging tools.
      </>
    ),
    link: "/docs/onboarding-catalog",
  },
  {
    title: "Powerful Features",
    icon: "⚡",
    description: (
      <>
        Leverage advanced features including data lineage tracking, automated 
        quality checks, metadata management, and real-time monitoring to ensure 
        your data ecosystem operates at peak performance.
      </>
    ),
    link: "/docs/features",
  },
  {
    title: "Enterprise Product",
    icon: "🏢",
    description: (
      <>
        Scale your data operations with enterprise-grade security, compliance, 
        and performance. DataOculus grows with your organization's data needs 
        from startup to enterprise scale.
      </>
    ),
    link: "/docs/product",
  },
];

const QuickStartOptions = [
  {
    title: "Quick Start Guide",
    description: "Get DataOculus up and running in under 5 minutes",
    link: "/docs/intro",
    buttonText: "Start Now",
    primary: true,
  },
  {
    title: "Explore Features",
    description: "Discover all the powerful capabilities DataOculus offers",
    link: "/docs/features",
    buttonText: "View Features",
    primary: false,
  },
];

function Feature({ icon, title, description, link }) {
  return (
    <div className={clsx("col col--6 margin-bottom--lg")}>
      <Link to={link} className="feature-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="feature-card">
          <div className="feature-icon">
            {icon}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <span style={{ color: 'rgb(7, 59, 76)', fontWeight: '600' }}>
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function QuickStartCard({ title, description, link, buttonText, primary }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="feature-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <Link
            className={clsx(
              "button button--lg",
              primary ? "button--primary" : "button--outline"
            )}
            to={link}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* Quick Start Section */}
      <section className="quick-start-section">
        <div className="container">
          <div className="section-header">
            <h2>From 0 to DataOculus in 5 minutes</h2>
            <p>
              Are you exploring or doing a PoC? It won't get easier than following our quickstart guide!
            </p>
          </div>
          <div className="row">
            {QuickStartOptions.map((props, idx) => (
              <QuickStartCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className={styles.features} style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Architecture and Capabilities</h2>
            <p>
              We support different kinds of deployment and offer comprehensive data management solutions
            </p>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
