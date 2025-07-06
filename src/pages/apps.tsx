/* ––– imports ––– */
import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

/* ––– inline CSS ––– */
const styles = /* css */ `
:root{--primary:#1565c0;--light:#f5f5f5;--mid:#e0e0e0;--dark:#424242;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body.theme-apps{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  background:var(--light);color:#212121;line-height:1.55;
}
/* NEW: centre the whole page and keep a sensible width */
.page{max-width:1380px;margin:0 auto;padding:2rem}

/* rest of your CSS unchanged … */
.tabs{display:flex;flex-wrap:wrap;list-style:none;border-bottom:2px solid var(--primary);margin:1rem 0 2rem}
.tabs a{display:block;padding:.5rem 1rem .45rem;font-weight:600;border-radius:4px 4px 0 0;
        background:var(--light);color:var(--primary);text-decoration:none;white-space:nowrap}
.tabs a:hover{background:var(--mid)}
.tabs a.active{background:var(--primary);color:#fff}

.pane{display:none}
.pane:target{display:block}
.pane:first-of-type{display:block}

h1{font-size:2.5rem;color:var(--primary);text-align:center;margin-bottom:.5rem}
p.lead{text-align:center;color:#616161;margin-bottom:2rem}
h2{font-size:1.8rem;color:var(--dark);margin:2rem 0 1rem;border-bottom:2px solid var(--primary);padding-bottom:.25rem}

.grid{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.card{background:#fff;border:1px solid var(--mid);border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.08);
      text-decoration:none;color:inherit;transition:transform .18s ease,box-shadow .18s ease}
.card:hover{transform:translateY(-4px);box-shadow:0 8px 16px rgba(0,0,0,.12)}
.card .content{padding:1.25rem}
.card h3{font-size:1.2rem;color:var(--primary);margin-bottom:.35rem}
.card p{font-size:.9rem;color:#616161}
`;

/* ––– tabs as React, no inline script ––– */
const allTabs = [
  {hash:'#arithmetic', label:'Arithmetic & Algebra'},
  {hash:'#pre-calculus', label:'Pre-Calculus'},
  {hash:'#logic-proof',  label:'Logic & Proof'},
  {hash:'#fractals',     label:'Fractals & Chaos'},
  {hash:'#numerical-integration', label:'Numerical Integration'},
  {hash:'#numerical-methods',     label:'Numerical Methods'},
  {hash:'#ode-solvers',  label:'ODE Solvers'},
  {hash:'#farsi',        label:'فارسی'},
];

function Tabs() {
  const getHash = () =>
    (typeof window !== 'undefined' && window.location.hash) || '#arithmetic';

  const [active, setActive] = useState<string>(getHash());

  useEffect(() => {
    if (typeof window === 'undefined') return;          // ✅ guard
    const handler = () => setActive(getHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);


  return (
    <ul className="tabs">
      {allTabs.map(t => (
        <li key={t.hash}>
          <a
            href={t.hash}
            className={active === t.hash ? 'active' : undefined}
            style={t.hash === '#farsi' ? {marginInlineStart:'auto'} : undefined}
          >
            {t.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* helper for cards unchanged … */
interface CardProps {href:string; title:string; blurb:string;}
const AppCard = ({href,title,blurb}:CardProps)=>(
  <a className="card" href={href} target="_blank" rel="noopener noreferrer">
    <div className="content"><h3>{title}</h3><p>{blurb}</p></div>
  </a>
);

/* ––– page component ––– */
export default function AppsPage() {
  useEffect(()=>{
    document.body.classList.add('theme-apps');
    return ()=>document.body.classList.remove('theme-apps');
  },[]);

  return (
    <Layout title="Interactive Apps">
      <Head><style>{styles}</style></Head>

      <div className="page">
        <h1>Interactive Apps</h1>
        <p className="lead">Explore a catalogue of web tools that make abstract maths tangible.</p>

        <Tabs/>

        {/* only the first pane shown here for brevity */}
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

        {/* ---------- Pre-Calculus ---------- */}
        <section id="pre-calculus" className="pane">
          <h2>Pre-Calculus</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/absolute-value-explorer.html" target="_blank" rel="noopener">
              <div className="content"><h3>Absolute Value Explorer</h3><p>See absolute value as distance & as a graph.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/Exponentials.html" target="_blank" rel="noopener">
              <div className="content"><h3>Exponentials</h3><p>Interact with exponential growth parameters.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/function-analyzer.html" target="_blank" rel="noopener">
              <div className="content"><h3>Function Analyzer</h3><p>Draw a graph and inspect domain, roots, concavity…</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/function-explorer-linear-quadratic.html" target="_blank" rel="noopener">
              <div className="content"><h3>Linear vs Quadratic Explorer</h3><p>Compare equations, graphs, rates of change.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/inverse-explorer.html" target="_blank" rel="noopener">
              <div className="content"><h3>Inverse Function Explorer</h3><p>Visualise a function and its reflection inverse.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/Polynomial_explorer.html" target="_blank" rel="noopener">
              <div className="content"><h3>Polynomial Explorer</h3><p>Drag roots, watch the factored form update.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/Quadratic_Behaviour.html" target="_blank" rel="noopener">
              <div className="content"><h3>Quadratic Behaviour</h3><p>How coefficients move vertex & change shape.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/trig-circle.html" target="_blank" rel="noopener">
              <div className="content"><h3>Trigonometric Circle</h3><p>Interactive unit-circle for sine, cosine, tan.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- Logic & Proof ---------- */}
        <section id="logic-proof" className="pane">
          <h2>Logic and Proof</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/if-then.html" target="_blank" rel="noopener">
              <div className="content"><h3>If-Then Logic Explorer</h3><p>Conditionals, converses, inverses & contrapositives.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- Fractals & Chaos ---------- */}
        <section id="fractals" className="pane">
          <h2>Fractals and Chaos</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/cantor-set.html" target="_blank" rel="noopener">
              <div className="content"><h3>Cantor Set Explorer</h3><p>Generate stages & compute box-counting dimension.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/crumpled-paper.html" target="_blank" rel="noopener">
              <div className="content"><h3>Crumpled Paper Dimension</h3><p>Mass-radius log-log plot of a crumpled ball.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/Koch-Snowflake.html" target="_blank" rel="noopener">
              <div className="content"><h3>Koch Snowflake Explorer</h3><p>Infinite perimeter, finite area, dimension lab.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/logistic-sequence-explorer.html" target="_blank" rel="noopener">
              <div className="content"><h3>Logistic Sequence Explorer</h3><p>See one sequence iterate under varying r.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/logistic-bifurcation-diagram.html" target="_blank" rel="noopener">
              <div className="content"><h3>Bifurcation Diagram</h3><p>Full logistic-map bifurcation visualiser.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/sierpinski-triangle.html" target="_blank" rel="noopener">
              <div className="content"><h3>Sierpiński Triangle</h3><p>Recursive zoom/pan & dimension calculation.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- Numerical Integration ---------- */}
        <section id="numerical-integration" className="pane">
          <h2>Numerical Integration</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/numerical-integration.html" target="_blank" rel="noopener">
              <div className="content"><h3>Numerical Integration Lab</h3><p>Midpoint, trapezoidal, Simpson comparison.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/romberg-integration.html" target="_blank" rel="noopener">
              <div className="content"><h3>Romberg Integration Lab</h3><p>Richardson extrapolation to high accuracy.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- Numerical Methods ---------- */}
        <section id="numerical-methods" className="pane">
          <h2>Numerical Methods</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/decimal-search.html" target="_blank" rel="noopener">
              <div className="content"><h3>Decimal Search Root-Finder</h3><p>Bisection / interval search visualised.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/fixed-point-iteration.html" target="_blank" rel="noopener">
              <div className="content"><h3>Fixed-Point Iteration</h3><p>Convergence vs divergence on user functions.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/linear-interpolation.html" target="_blank" rel="noopener">
              <div className="content"><h3>Linear Interpolation Root-Finder</h3><p>Method of False Position (secant idea).</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/root-finding-comparison.html" target="_blank" rel="noopener">
              <div className="content"><h3>Root-Finding Comparison</h3><p>Dashboard of five algorithms side-by-side.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/secant-newton-methods.html" target="_blank" rel="noopener">
              <div className="content"><h3>Secant & Newton-Raphson</h3><p>Speed & convergence comparison interactive.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/taylor-series.html" target="_blank" rel="noopener">
              <div className="content"><h3>Taylor Series Visualizer</h3><p>Function vs polynomial approximation.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- ODE Solvers ---------- */}
        <section id="ode-solvers" className="pane">
          <h2>ODE Solvers</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/ode-solver-comparison.html" target="_blank" rel="noopener">
              <div className="content"><h3>ODE Solver & Error Comparison</h3><p>Long-term accuracy of multiple methods.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/ode-step-visualizer.html" target="_blank" rel="noopener">
              <div className="content"><h3>ODE Step Visualizer</h3><p>Geometry of Euler, Modified Euler, RK4 step.</p></div>
            </a>
            <a className="card" href="https://asghariamir.github.io/maths/taylor-method-ode.html" target="_blank" rel="noopener">
              <div className="content"><h3>Taylor Method for ODEs</h3><p>Higher-order derivatives for high accuracy.</p></div>
            </a>
          </div>
        </section>

        {/* ---------- Farsi ---------- */}
        <section id="farsi" className="pane">
          <h2 lang="fa" dir="rtl">فارسی</h2>
          <div className="grid">
            <a className="card" href="https://asghariamir.github.io/maths/multiplication-puzzle-fa.html" target="_blank" rel="noopener">
              <div className="content" dir="rtl">
                <h3 lang="fa">پازل مساحت ضرب</h3>
                <p lang="fa">درک خاصیت توزیع‌پذیری ضرب با نمایش تصویری مساحت.</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}




