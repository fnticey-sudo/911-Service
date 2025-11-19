
import fs from 'fs';
import path from 'path';

export default function Home({ products }) {
  return (
    <main className="container">
      <header className="header">
        <img src="/logo.svg" alt="logo" className="logo" />
        <nav>
          <a href="#" style={{color:'#cbd5e1', marginRight:12}}>Home</a>
          <a href="#" style={{color:'#cbd5e1'}}>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1 style={{fontSize:42}}>Premium Game Asset Packs</h1>
        <p style={{color:'#9aa1b2'}}>Fortnite graphics, GTA RP assets, Discord packs & more — legaal en veilig.</p>
      </section>

      <section className="products-grid">
        {products.map(p => (
          <article className="card" key={p.id}>
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <div className="price">€{p.price.toFixed(2)}</div>
            <div className="actions">
              <a className="btn primary" href={`/mods/${p.filename ? p.filename.split('/').pop() : ''}`} download>Koop</a>
              <a className="btn" href={`/mods/${p.filename ? p.filename.split('/').pop() : ''}`} download>Preview</a>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">© 2025 911 Service — Alle rechten voorbehouden</footer>
    </main>
  );
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'public', 'products.json');
  const content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '[]';
  const products = JSON.parse(content || '[]');
  return { props: { products } };
}
