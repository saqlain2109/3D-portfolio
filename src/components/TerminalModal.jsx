import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

const TerminalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Saqlain OS v2.4.0 (Interactive Developer Terminal)' },
    { type: 'system', text: 'Type "help" to see available commands or "hire" to collaborate.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
      case '?':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • about     - Learn about Saqlain
  • skills    - View core technical stack
  • projects  - See featured work & clones
  • contact   - Get in touch details
  • hire      - Why you should hire me!
  • confetti  - Launch celebratory confetti 🎊
  • clear     - Clear terminal history
  • exit      - Close this terminal`,
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `👋 Hi! I'm Saqlain — a passionate Frontend & 3D Interactive Web Developer.
I specialize in creating immersive digital experiences using React, Three.js, GSAP, and Tailwind CSS.
I transform complex design concepts into high-performing, fluid websites.`,
        });
        break;

      case 'skills':
      case 'stack':
        newHistory.push({
          type: 'output',
          text: `🚀 Core Tech Stack:
  [■■■■■■■■■■] React & React Native (100%)
  [■■■■■■■■■□] Three.js & React Three Fiber (90%)
  [■■■■■■■■■■] GSAP & Framer Motion (100%)
  [■■■■■■■■■□] Tailwind CSS & Modern UI (95%)
  [■■■■■■■■□□] Node.js & Backend APIs (80%)`,
        });
        break;

      case 'projects':
      case 'work':
        newHistory.push({
          type: 'output',
          text: `⭐ Featured Projects:
  1. Zentry Clone (Awwwards-winning Animated Site) -> https://zentryclonebyme.netlify.app/
  2. Golf Club Experience -> https://golfclube.netlify.app/
  3. Lazarev Agency Clone -> https://lazarev-clone-1.netlify.app/`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `📬 Contact Info:
  • Email: saqlainsupariwala@gmail.com
  • LinkedIn: https://www.linkedin.com/in/saqlain-supariwala/
  • Instagram: https://www.instagram.com/saqlain_stuff`,
        });
        break;

      case 'hire':
      case 'hire-me':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
        newHistory.push({
          type: 'output',
          text: `🎉 Let's build something remarkable together!
I am open for freelance projects, full-time opportunities, and contract roles.
Scroll down to the Contact Section or drop an email!`,
        });
        break;

      case 'confetti':
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
        });
        newHistory.push({ type: 'output', text: '✨ Boom! Enjoy the confetti! ✨' });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        setIsOpen(false);
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmdStr}". Type "help" for a list of available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== undefined) handleCommand(input);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black-100/90 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md hover:scale-105 hover:border-cyan-400 transition-all duration-300 group"
        aria-label="Open Developer Terminal"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
        <span className="font-mono text-xs font-semibold tracking-wide">
          &gt;_ Dev Terminal
        </span>
      </button>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-zinc-950/95 border border-cyan-500/40 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden font-mono text-sm flex flex-col h-[480px]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                  title="Close"
                />
                <span className="size-3 rounded-full bg-yellow-500" />
                <span className="size-3 rounded-full bg-green-500" />
              </div>
              <span className="text-zinc-400 text-xs font-medium">saqlain@portfolio:~</span>
              <span className="text-xs text-zinc-500">ESC to exit</span>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto space-y-2 text-zinc-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="leading-relaxed">
                  {item.type === 'system' && (
                    <p className="text-cyan-400 font-semibold">{item.text}</p>
                  )}
                  {item.type === 'user' && (
                    <p className="text-emerald-400 font-medium">{item.text}</p>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-zinc-300 whitespace-pre-wrap font-mono text-xs md:text-sm">
                      {item.text}
                    </pre>
                  )}
                  {item.type === 'error' && (
                    <p className="text-rose-400">{item.text}</p>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-zinc-900/60 border-t border-zinc-800">
              <span className="text-emerald-400 font-bold mr-2">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help' or command..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 placeholder-zinc-600 font-mono text-sm"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalModal;
