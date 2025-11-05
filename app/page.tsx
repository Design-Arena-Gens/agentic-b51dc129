'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl font-semibold mb-8 text-[var(--text-primary)]">
              Toduu
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
              Tasks distilled
            </p>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
              Focus refined
            </p>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
              Clarity defined
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button className="px-8 py-4 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all hover:scale-105 shadow-lg">
              Begin Your Journey
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--accent)] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] opacity-5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-center">
              Digital Haiku
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Simplicity</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Every element serves a purpose. No clutter, no distraction. Just what you need, when you need it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Clarity</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Clear hierarchy, readable typography, and thoughtful spacing guide your attention naturally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Focus</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Design that respects your attention. Subtle animations, calm colors, deliberate interactions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System Showcase */}
      <section className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Design Language
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              A carefully crafted system that balances modern clarity with timeless elegance
            </p>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-serif text-3xl font-medium mb-8">Typography</h3>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">Display - Lora</p>
                  <h1 className="font-serif text-5xl font-semibold">The essence of calm</h1>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">Body - Inter</p>
                  <p className="text-lg text-[var(--text-secondary)]">
                    Clean, readable, and purposeful. Every word carries weight, every sentence flows with intention.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-serif text-3xl font-medium mb-8">Color Palette</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                <p className="text-sm text-[var(--text-tertiary)] mb-6 uppercase tracking-wider">Light Theme</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FAFAF9] border border-[var(--border)]"></div>
                    <div>
                      <p className="font-medium">Background</p>
                      <p className="text-sm text-[var(--text-tertiary)]">#FAFAF9</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2563EB]"></div>
                    <div>
                      <p className="font-medium">Accent</p>
                      <p className="text-sm text-[var(--text-tertiary)]">#2563EB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                <p className="text-sm text-[var(--text-tertiary)] mb-6 uppercase tracking-wider">Dark Theme</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0C0A09] border border-[var(--border)]"></div>
                    <div>
                      <p className="font-medium">Background</p>
                      <p className="text-sm text-[var(--text-tertiary)]">#0C0A09</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#3B82F6]"></div>
                    <div>
                      <p className="font-medium">Accent</p>
                      <p className="text-sm text-[var(--text-tertiary)]">#3B82F6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Components */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl font-medium mb-8">Components</h3>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4 uppercase tracking-wider">Buttons</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all">
                      Primary Action
                    </button>
                    <button className="px-6 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--bg)] transition-all">
                      Secondary Action
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4 uppercase tracking-wider">Input</p>
                  <input
                    type="text"
                    placeholder="Enter your task..."
                    className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                  />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4 uppercase tracking-wider">Cards</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:shadow-lg transition-shadow">
                      <h4 className="font-medium mb-2">Simple Card</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Subtle elevation and clean borders</p>
                    </div>
                    <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:shadow-lg transition-shadow">
                      <h4 className="font-medium mb-2">Interactive Card</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Responds to your presence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Haiku */}
      <section className="py-24 px-6 border-t border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="space-y-6 mb-12">
            <p className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] italic">
              &ldquo;Less interface,
            </p>
            <p className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] italic">
              more intention and flow—
            </p>
            <p className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] italic">
              work becomes art.&rdquo;
            </p>
          </div>

          <div className="pt-8 border-t border-[var(--border)] inline-block">
            <p className="text-sm text-[var(--text-tertiary)] uppercase tracking-widest">Toduu</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-tertiary)] text-sm">
            © 2025 Toduu. Designed with intention.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors text-sm">
              Philosophy
            </a>
            <a href="#" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
