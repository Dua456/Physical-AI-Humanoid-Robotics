import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

/* ---------------- HERO ---------------- */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>
          Physical AI & <br />
          Humanoid Robotics Textbook
        </h1>
        <p className={styles.subtitle}>
          A complete and practical learning system where you master the future:
          humanoid robotics, ROS 2, large action models, simulation, VLA systems,
          hardware, and advanced AI for next-generation intelligent machines.
        </p>
        <div className={styles.cta}>
          <Link
            className={clsx("button button--primary", styles.primaryBtn)}
            to="/docs/category/module-1-ros-2-nervous-system"
          >
            Start Reading →
          </Link>
        </div>
      </div>
    </header>

  );
}

/* ---------------- MODULE CARD ---------------- */
function ModuleCard({ title, description, link, index }) {
  return (
    <Link to={link} className={styles.card}>
      <span className={styles.cardIndex}>0{index + 1}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.cardArrow}>→</span>
    </Link>
  );
}

/* ---------------- INFO CARD ---------------- */
function InfoCard({ icon, title, description }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

/* ---------------- TIMELINE ITEM ---------------- */
function TimelineItem({ step, title, description }) {
  return (
    <div className={styles.timelineItem}>
      <h4>{step}. {title}</h4>
      <p>{description}</p>
    </div>
  );
}

/* ---------------- PAGE ---------------- */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const modules = [
    {
      title: "ROS 2 Nervous System",
      description: "Nodes, topics, services, actions, DDS & real-time communication.",
      link: "/docs/category/module-1-ros-2-nervous-system",
    },
    {
      title: "Digital Twins",
      description: "Physics-based simulation using Gazebo, Isaac Sim & Unity.",
      link: "/docs/module-2-digital-twin/physics-in-gazebo",
    },
    {
      title: "AI-Robot Brain",
      description: "NVIDIA Isaac, reinforcement learning & robot foundation models.",
      link: "/docs/module-3-isaac/isaac-sim-intro",
    },
    {
      title: "Vision-Language-Action",
      description: "Multimodal AI for speech-to-action humanoid control.",
      link: "/docs/module-4-vla/voice-to-action",
    },
  ];

  const features = [
    {
      icon: "📚",
      title: "Hands-on Exercises",
      description: "Step-by-step tutorials to build a fully functional humanoid robot.",
    },
    {
      icon: "🧠",
      title: "Advanced AI Models",
      description: "Integrate Vision-Language-Action and reinforcement learning AI.",
    },
    {
      icon: "⚡",
      title: "Rapid Learning",
      description: "Curated modules for fast and effective understanding.",
    },
    {
      icon: "🖥️",
      title: "Simulation Ready",
      description: "Run experiments in Isaac Sim, Gazebo, and Unity.",
    },
  ];

  const audience = ["Students", "Researchers", "Robotics Enthusiasts", "AI Developers", "Hackathon Participants"];

  const timeline = [
    {
      step: "1",
      title: "Beginner",
      description: "Understand ROS 2 basics and robot communication fundamentals.",
    },
    {
      step: "2",
      title: "Intermediate",
      description: "Simulate robots using Digital Twins and physics engines.",
    },
    {
      step: "3",
      title: "Advanced",
      description: "Implement AI-driven control with NVIDIA Isaac and VLA models.",
    },
  ];

  return (
    <Layout title={siteConfig.title} description="Hands-on Hackathon Textbook for Humanoid Robotics">
      <HomepageHeader />

      <main className={styles.main}>
        {/* ===== MODULES ===== */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Curriculum Overview</h2>
          <p className={styles.sectionSubtitle}>
            Each module builds on the previous, forming a complete roadmap to humanoid robotics mastery.
          </p>
          <div className={styles.grid}>
            {modules.map((m, i) => <ModuleCard key={i} index={i} {...m} />)}
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className={styles.sectionAlt}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <p className={styles.sectionSubtitle}>Why this textbook is unique.</p>
          <div className={styles.infoGrid}>
            {features.map((f, i) => <InfoCard key={i} {...f} />)}
          </div>
        </section>

        {/* ===== AUDIENCE ===== */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Should Read This Book?</h2>
          <p className={styles.sectionSubtitle}>Perfect for anyone looking to create intelligent humanoid systems.</p>
          <div className={styles.audience}>
            {audience.map((a, i) => <span key={i}>{a}</span>)}
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className={styles.sectionAlt}>
          <h2 className={styles.sectionTitle}>Learning Timeline</h2>
          <p className={styles.sectionSubtitle}>Follow a step-by-step roadmap from beginner to advanced.</p>
          <div className={styles.timeline}>
            {timeline.map((t, i) => <TimelineItem key={i} {...t} />)}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className={styles.ctaSection}>
          <h2>Ready to Build the Future?</h2>
          <div className={styles.cta}>
            <Link className={clsx("button button--primary", styles.primaryBtn)} to="/docs/category/module-1-ros-2-nervous-system">
              Start Learning
            </Link>
            <Link className={clsx("button button--outline", styles.secondaryBtn)} to="/docs/category/module-1-ros-2-nervous-system">
              View Curriculum
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
