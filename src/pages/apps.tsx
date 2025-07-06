import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

/* ---------- inline CSS -------------------------------------------------- */
const styles = /* css */ `
:root{--primary:#1565c0;--light:#f5f5f5;--mid:#e0e0e0;--dark:#424242;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body.theme-apps{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  background:var(--light);color:#212121;padding:2rem;line-height:1.55;
}
h1{font-size:2.5rem;color:var(--primary);text-align:center;margin-bottom:.5rem}
p.lead{text-align:center;color:#616161;margin-bottom:2rem}

/* tabs */
.tabs{display:flex;flex-wrap:wrap;list-style:none;border-bottom:2px solid var(--primary);margin:1rem 0 2rem}
.tabs a{display:block;padding:.5rem 1rem .45rem;font-weight:600;border-radius:4px 4px 0 0;
        background:var(--light);color:var(--primary);text-decoration:none;white-space:nowrap}
.tabs a:hover{background:var(--mid)}
.tabs a.active{background:var(--primary);color:#fff}

/* panes */
.pane{display:none}
.pane:target{display:block}
.pane:first-of-type{display:block}

h2{font-size:1.8rem;color:var(--dark);margin:2rem 0 1rem;border-bottom:2px solid var(--primary);padding-bottom:.25rem}

/* cards */
.grid{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.card{background:#fff;border:1px solid var(--mid);border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.08);
      text-decoration:none;color:inherit;transition:transform .18s ease,box-shadow .18s ease}
.card:hover{transform:translateY(-4px);box-shadow:0 8px 16px rgba(0,0,0,.12)}
.card .content{padding:1.25rem}
.card h3{font-size:1.2rem;color:var(--primary);margin-bottom:.35rem}
.card p{font-size:.9rem;color:#616161}
`;

/* ---------- JS helper: active-tab highlight ----------------------------- */
const HashSync = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
      function setActiveTab(){
        const h = location.hash || '#arithmetic';
        document.querySelectorAll('.tabs a').forEach(a=>{
          a.classList.toggle('active', a.getAttribute('href') === h);
        });
      }
      window.addEventListener('hashchange', setActiveTab);
      document.addEventListener('DOMContentLoaded', setActiveTab);`,
    }}
  />
);

/* ---------- helper component for cards --------------------------------- */
interface CardProps {href:string; title:string; blurb:string;}
function AppCard({href, title, blurb}: CardProps){
  return (
    <a className="card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="content">
        <h3>{title}</h3>
        <p>{blurb}</p>
      </div>
    </a>
  );
}

/* ---------- main page --------------------------------------------------- */
export default function AppsPage(){
  // apply a body class only while this page is mounted
  useEffect(()=>{
    document.body.classList.add('theme-apps');
    return () => document.body.classList.remove('theme-apps');
  },[]);

  return (
    <Layout title="Interactive Apps" description="Hands-on maths explorations">
      <Head><style>{styles}</style></Head>
      <HashSync/>

      <h1>Interactive Apps</h1>
      <p className="lead">Explore a catalogue of web tools that make abstract maths tangible.</p>

      {/* tab bar */}
      <ul className="tabs">
        <li><a href="#arithmetic">Arithmetic &amp; Algebra</a></li>
        <li><a href="#pre-calculus">Pre-Calculus</a></li>
        <li><a href="#logic-proof">Logic &amp; Proof</a></li>
        <li><a href="#fractals">Fractals &amp; Chaos</a></li>
        <li><a href="#numerical-integration">Numerical Integration</a></li>
        <li><a href="#numerical-methods">Numerical Methods</a></li>
        <li><a href="#ode-solvers">ODE Solvers</a></li>
        <li><a href="#farsi" style={{marginInlineStart:'auto'}}>فارسی</a></li>
      </ul>

      {/* ---- pane: Arithmetic & Algebra ---- */}
      <section id="arithmetic" className="pane">
        <h2>Arithmetic and Algebra</h2>
        <div className="grid">
          <AppCard href="https://asghariamir.github.io/maths/Integer-Panel-Playground.html"
                   title="Integer Panel Playground"
                   blurb="Visual tool for integer addition & subtraction."/>
          <AppCard href="https://asghariamir.github.io/maths/multiplication-web.html"
                   title="Multiplication Web"
                   blurb="Unlock multiplication facts via distributive property."/>
          <AppCard href="https://asghariamir.github.io/maths/multiplicative-sums.html"
                   title="Multiplicative Sums"
                   blurb="Colour pad for exploring sums of first N powers."/>
        </div>
      </section>

      {/* ---- pane: Pre-Calculus ---- */}
      <section id="pre-calculus" className="pane">
        <h2>Pre-Calculus</h2>
        <div className="grid">
          <AppCard href="https://asghariamir.github.io/maths/absolute-value-explorer.html"
                   title="Absolute Value Explorer"
                   blurb="See absolute value as distance & as a graph."/>
          <AppCard href="https://asghariamir.github.io/maths/Exponentials.html"
                   title="Exponentials"
                   blurb="Interact with exponential growth parameters."/>
          <AppCard href="https://asghariamir.github.io/maths/function-analyzer.html"
                   title="Function Analyzer"
                   blurb="Draw a graph and inspect domain, roots, concavity…"/>
          {/* …add the remaining Pre-Calculus cards… */}
        </div>
      </section>

      {/* ---- Add the remaining panes exactly like above ---- */}
      {/* Logic & Proof, Fractals & Chaos, Numerical Integration,
          Numerical Methods, ODE Solvers, Farsi … */}
    </Layout>
  );
}



