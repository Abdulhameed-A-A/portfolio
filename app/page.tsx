import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adewunmi Abdulhameed",
    jobTitle: "Software Engineer",
    url: "https://stackola.vercel.app",
    sameAs: [
      "https://github.com/Abdulhameed-A-A",
      "https://www.linkedin.com/in/abdulhameed-adewunmi/"
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 flex-1 w-full font-mono text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex justify-between items-center mb-24 text-xs tracking-wider">
        <div className="flex gap-6">
          <Link href="/" className="font-bold text-foreground">Home</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-2xl font-bold mb-4 tracking-wide">
          Adewunmi Abdulhameed
        </h1>
        <h2 className="text-xs tracking-widest uppercase mb-4 text-foreground/80">
          Software Engineer
        </h2>
        <div className="space-y-2 text-foreground/70 max-w-xl leading-relaxed mb-8">
          <p>
            Computer Engineering student with hands-on software engineering experience across frontend web development and Java systems programming, combining a systems/hardware foundation with practical, shipped work. 
          </p>
          <p>
            Passionate about building high-performance, robust applications and pixel-perfect user interfaces.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs tracking-wider">
          <Link href="https://github.com/Abdulhameed-A-A" target="_blank" className="underline underline-offset-4 hover:text-foreground/70 transition-colors">
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/abdulhameed-adewunmi/" target="_blank" className="underline underline-offset-4 hover:text-foreground/70 transition-colors">
            LinkedIn
          </Link>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Experience Section */}
      <section className="mb-12">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-8">Experience</h3>
        
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h4 className="font-bold">Frontend Developer <span className="font-normal text-foreground/60">@ Yebaot Luxury Vehicle Marketplace</span></h4>
            <span className="text-foreground/60 text-xs mt-1 sm:mt-0">Jan 2026 — Present</span>
          </div>
          <div className="mb-4 text-xs">
            <Link href="https://yebaotautomobilesltd.ng/" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground">Live Link</Link>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
            <li>Built a full-stack marketplace application using Next.js App Router, React, and TypeScript with responsive user interfaces.</li>
            <li>Engineered vehicle listing management workflows (CRUD) with dynamic client-side forms and image upload processing.</li>
            <li>Integrated Supabase database & REST API endpoints for seamless authentication, search filtering, and state persistence.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h4 className="font-bold">Cowrywise Ambassador <span className="font-normal text-foreground/60">@ Cowrywise</span></h4>
            <span className="text-foreground/60 text-xs mt-1 sm:mt-0">Jun 2024 — Present</span>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
            <li>Promoted financial literacy and represented Cowrywise on campus to drive student engagement.</li>
            <li>Collaborated with a network of ambassadors to organize campaigns and onboard new users to the platform.</li>
          </ul>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Projects Section */}
      <section className="mb-12">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-8">Selected Projects</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold">SwiftShare P2P File Transfer</h4>
              <Link href="https://github.com/Abdulhameed-A-A/SwiftShare" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground text-xs">GitHub</Link>
            </div>
            <p className="text-xs text-foreground/60 mb-4">Java, Swing, TCP Sockets, JmDNS</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
              <li>Engineered a cross-platform desktop application for zero-configuration local file sharing using Java, Swing, and FlatLaf for a modern native UI.</li>
              <li>Implemented peer-to-peer device discovery via mDNS/JmDNS, resolving loopback IP collisions to reliably broadcast local network addresses.</li>
              <li>Developed a robust multi-threaded TCP socket architecture to recursively transfer entire directory trees between Windows and Linux systems.</li>
              <li>Designed dynamic path normalization logic to seamlessly translate Windows backslashes and Linux forward slashes during cross-OS transfers.</li>
              <li>Packaged the application into standalone native installers (.exe for Windows, .deb for Linux) using the Java jpackage tool, abstracting the JRE requirement for end users.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold">Custom JSON Parser</h4>
              <Link href="https://github.com/Abdulhameed-A-A/JsonParser.git" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground text-xs">GitHub</Link>
            </div>
            <p className="text-xs text-foreground/60 mb-4">Java 21, Maven, JUnit 5</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
              <li>Developed a high-performance JSON parser from scratch in Java 21, implementing lexical analysis and an Abstract Syntax Tree (AST) architecture without relying on external libraries.</li>
              <li>Leveraged modern Java language features, employing sealed interfaces and records to model JSON data types immutably and enforce strict type safety across the application.</li>
              <li>Implemented pattern matching for switch expressions to elegantly traverse and evaluate the parsed AST, reducing boilerplate code and improving maintainability.</li>
              <li>Configured a continuous testing and build pipeline using Maven and JUnit 5 to ensure parser accuracy and structural integrity.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold">Linux System Inspector</h4>
              <Link href="https://github.com/Abdulhameed-A-A/Linux-System-Inspector.git" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground text-xs">GitHub</Link>
            </div>
            <p className="text-xs text-foreground/60 mb-4">Java, CLI, Linux Utilities</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
              <li>Developed a Java-based command-line utility to monitor and report real-time Linux system metrics, including kernel details, memory/swap usage, disk space, and network status.</li>
              <li>Leveraged Java ProcessBuilder to execute native Linux commands and efficiently parsed raw standard output streams into structured Java record classes.</li>
              <li>Implemented custom parsing logic to analyze system resources, including a disk health evaluator that categorizes partition status (Healthy, Warning, Critical) based on usage thresholds.</li>
              <li>Designed an interactive console menu system to allow users to generate modular system metric reports or a comprehensive system-wide summary on demand.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Additional School Projects Section */}
      <section className="mb-12">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-8">Additional School Projects</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold">Agent Based Traffic Signal Control System (MAS)</h4>
              <Link href="https://github.com/Abdulhameed-A-A/traffic-mas" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground text-xs">GitHub</Link>
            </div>
            <p className="text-xs text-foreground/60 mb-4">Group Leader</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
              <li>Led a team to develop a Multi Agent System (MAS) for coordinated traffic signal control of a five-junction arterial corridor using TraCI perception logic and Kuramoto coupled oscillator mathematics.</li>
              <li>Engineered a fully integrated dashboard for monitoring simulation metrics, agent decisions, and green wave coordination in real time.</li>
              <li>Implemented and evaluated distinct control modes (independent, cooperative, coordinated, collective) incorporating storage offers, platoon handoffs, and a bid/decline negotiation protocol over contested green time.</li>
              <li>Achieved significant performance improvements in the collective mode compared to independent agents, including 43% lower wait time and 3.9% more vehicles served, demonstrating the value of inter-agent information sharing.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold">Smart Campus Transport (IoT RFID System)</h4>
              <Link href="https://smart-campus-opal.vercel.app/login" target="_blank" className="underline underline-offset-4 text-foreground/60 hover:text-foreground text-xs">Live Link</Link>
            </div>
            <p className="text-xs text-foreground/60 mb-4">Frontend Developer & Hardware Integration</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed">
              <li>Built the frontend architecture for an IoT based RFID bus card reader system, implementing secure JWT session management with custom token refresh flows and real time data polling.</li>
              <li>Developed strict state handling for financial transactions and journey tracking, ensuring accurate representation of integer-based currency data from the backend APIs without relying on silent client-side assumptions.</li>
              <li>Strictly separated complex backend enums for travel state (e.g., IN_PROGRESS, REVIEW_REQUIRED) and financial state (PENDING, SUCCESS) into intuitive UI indicators.</li>
              <li>Engineered resilient UI workflows to synchronize with the physical RFID hardware, gracefully handling edge cases like lost card deactivation, missing tap-outs, network failures, and loading states.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Education */}
      <section className="mb-12">
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-8">Education</h3>
          <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
            <h4 className="font-bold">Obafemi Awolowo University</h4>
            <span className="text-foreground/60 text-xs mt-1 sm:mt-0">Expected March 2028</span>
          </div>
          <div className="text-foreground/80 mb-2">
            B.Sc. Computer Engineering <span className="text-foreground/60">| Ile-Ife, Nigeria</span>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            <span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering Principles, Computer Systems Architecture
          </p>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Skills */}
      <section className="mb-12 space-y-12">
        <div className="text-xs">
          <p className="mb-8 font-bold tracking-wider text-foreground">Frontend. Systems. Performance.</p>
          
          <p className="tracking-widest uppercase text-foreground/80 mb-4">
            LANGUAGES · FRONTEND · BACKEND · TOOLS
          </p>

          <p className="text-foreground/80 leading-relaxed">
            TypeScript · JavaScript · Java · SQL · React.js · Next.js · Tailwind CSS · REST APIs · Supabase · Relational Databases · Git / GitHub · JUnit · Maven
          </p>
        </div>

        <div className="text-xs">
          <p className="mb-8 font-bold tracking-wider text-foreground">Certifications.</p>
          <p className="text-foreground/80 leading-relaxed">
            Introduction to agent skill, Anthropic (May 2026)
          </p>
        </div>
      </section>

      <hr className="border-foreground/10 my-12" />

      {/* Contact / Footer */}
      <section className="mt-16 mb-24 space-y-16">
        <a href="/resume.pdf" className="inline-block bg-foreground text-background font-bold py-3 px-6 text-xs tracking-widest hover:opacity-90 transition-opacity">
          DOWNLOAD CV
        </a>
        
        <div>
          <Link href="mailto:adewunmiabdulhameed7@gmail.com" className="text-foreground hover:opacity-70 transition-opacity">
            adewunmiabdulhameed7@gmail.com
          </Link>
          <div className="text-foreground/60 mt-2">
            +234 814 350 8569
          </div>
        </div>
      </section>

      <footer className="text-xs text-foreground/40">
        © Adewunmi Abdulhameed
      </footer>
    </main>
  );
}
