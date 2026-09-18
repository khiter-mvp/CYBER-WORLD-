export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="dot"></span> CYBER WORLD</div>
        <div className="navlinks">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#support">Support</a>
          <button className="login">Login with Discord</button>
        </div>
      </nav>

      <section className="hero">
        <div className="glow"></div>
        <div className="badge">● DISCORD BOT PLATFORM</div>
        <h1>Power your server<br/><span>with CYBER WORLD.</span></h1>
        <p>One powerful dashboard for moderation, welcome messages, logs, tickets, levels and more.</p>
        <div className="actions">
          <button className="primary">Add to Discord ↗</button>
          <button className="secondary">Open Dashboard</button>
        </div>
        <div className="stats">
          <div><strong>24/7</strong><small>Online</small></div>
          <div><strong>99.9%</strong><small>Uptime</small></div>
          <div><strong>∞</strong><small>Commands</small></div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead"><span>01</span><h2>Everything your server needs.</h2></div>
        <div className="grid">
          {[
            ["🛡️","Moderation","Protect your community with powerful moderation tools."],
            ["👋","Welcome","Create beautiful welcome and goodbye messages."],
            ["📋","Logs","Keep track of important server activity."],
            ["🎭","Auto Role","Automatically assign roles to new members."],
            ["🎫","Tickets","Build a simple and professional support system."],
            ["📈","Levels","Reward active members with an engaging level system."]
          ].map(([icon,title,desc]) => (
            <article className="card" key={title}>
              <div className="icon">{icon}</div><h3>{title}</h3><p>{desc}</p><button>Configure →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="dashboard" className="dashboardPreview">
        <div className="sectionHead"><span>02</span><h2>Command center.</h2></div>
        <div className="dash">
          <aside>
            <div className="miniBrand">CYBER WORLD</div>
            {["Overview","Moderation","Welcome","Auto Role","Logs","Tickets","Levels"].map((x,i)=>
              <div className={"sideItem "+(i===0?"active":"")} key={x}>{x}</div>
            )}
          </aside>
          <div className="dashMain">
            <div className="dashTop"><div><small>SERVER DASHBOARD</small><h3>My Community</h3></div><div className="online">● Bot Online</div></div>
            <div className="metricRow">
              <div><small>MEMBERS</small><strong>12,482</strong></div>
              <div><small>COMMANDS</small><strong>8,921</strong></div>
              <div><small>UPTIME</small><strong>99.9%</strong></div>
            </div>
            <div className="panel"><h3>Quick configuration</h3><p>Welcome system</p><div className="toggle on"></div><p>Moderation logs</p><div className="toggle on"></div><p>Auto role</p><div className="toggle"></div></div>
          </div>
        </div>
      </section>

      <footer id="support"><div className="brand"><span className="dot"></span> CYBER WORLD</div><p>Built for communities that want more.</p><span>© 2026 CYBER WORLD</span></footer>
    </main>
  );
}