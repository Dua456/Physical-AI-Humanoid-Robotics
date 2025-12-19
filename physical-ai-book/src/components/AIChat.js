import React, { useState, useRef, useEffect } from "react";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSize, setCurrentSize] = useState("medium");
  const messagesEndRef = useRef(null);

  /* auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* loader animation */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulse {
        0%,80%,100% { transform: scale(0); opacity:.3 }
        40% { transform: scale(1); opacity:1 }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:8001/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg.text }),
        }
      );
      const data = await res.json();
      setMessages((p) => [...p, { text: data.response, sender: "ai" }]);
    } catch {
      setMessages((p) => [
        ...p,
        { text: "⚠️ Server error. Try again.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* reduced heights */
  const windowSizes = {
    small: { width: 300, height: 360 },
    medium: { width: 360, height: 480 },
    large: { width: 420, height: 580 },
  };

  const styles = {
    floatingBtn: {
      position: "fixed",
      bottom: 22,
      right: 22,
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#6366f1,#22d3ee)",
      color: "#fff",
      fontSize: 26,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 0 25px rgba(99,102,241,.6)",
      zIndex: 999,
    },

    window: {
      position: "fixed",
      bottom: 95,
      right: 22,
      borderRadius: 18,
      background: "#020617",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 25px 70px rgba(0,0,0,.8)",
      transition: "all .25s ease",
      zIndex: 999,
    },

    header: {
      padding: "10px 12px",
      borderBottom: "1px solid #1e293b",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#e5e7eb",
    },

    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },

    avatar: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    title: { fontSize: 13, fontWeight: 600 },
    subtitle: { fontSize: 10, color: "#94a3b8" },

    sizeControls: { display: "flex", gap: 6 },

    sizeButton: {
      padding: "3px 6px",
      fontSize: 10,
      borderRadius: 6,
      border: "1px solid #1e293b",
      background: "#020617",
      color: "#94a3b8",
      cursor: "pointer",
    },

    sizeActive: {
      border: "1px solid #22d3ee",
      color: "#22d3ee",
    },

    closeBtn: {
      background: "transparent",
      border: "none",
      color: "#94a3b8",
      fontSize: 18,
      cursor: "pointer",
      marginLeft: 6,
    },

    body: {
      flex: 1,
      padding: 12,
      background: "#020617",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },

    bubble: {
      maxWidth: "80%",
      padding: "8px 12px",
      borderRadius: 14,
      fontSize: 12,
      lineHeight: 1.4,
    },

    user: {
      alignSelf: "flex-end",
      background: "linear-gradient(135deg,#6366f1,#22d3ee)",
      color: "#020617",
      borderBottomRightRadius: 4,
    },

    ai: {
      alignSelf: "flex-start",
      background: "#0f172a",
      color: "#e5e7eb",
      borderBottomLeftRadius: 4,
    },

    loader: {
      display: "flex",
      gap: 6,
    },

    dot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#22d3ee",
      animation: "pulse 1.4s infinite ease-in-out both",
    },

    footer: {
      padding: 10,
      borderTop: "1px solid #1e293b",
      display: "flex",
      gap: 8,
    },

    input: {
      flex: 1,
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid #1e293b",
      background: "#020617",
      color: "#e5e7eb",
      fontSize: 12,
      outline: "none",
    },

    send: {
      padding: "8px 14px",
      borderRadius: 999,
      border: "none",
      background: "linear-gradient(135deg,#6366f1,#22d3ee)",
      color: "#020617",
      fontWeight: 600,
      cursor: "pointer",
    },
  };

  return (
    <>
      {!isOpen && (
        <button style={styles.floatingBtn} onClick={() => setIsOpen(true)}>
          🤖
        </button>
      )}

      {isOpen && (
        <div style={{ ...styles.window, ...windowSizes[currentSize] }}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.avatar}>🤖</div>
              <div>
                <div style={styles.title}>AI Assistant</div>
                <div style={styles.subtitle}>Online</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={styles.sizeControls}>
                {["small", "medium", "large"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setCurrentSize(s)}
                    style={{
                      ...styles.sizeButton,
                      ...(currentSize === s ? styles.sizeActive : {}),
                    }}
                  >
                    {s === "small" && "🟢"}
                    {s === "medium" && "🟡"}
                    {s === "large" && "🔴"}
                  </button>
                ))}
              </div>

              <button
                style={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={styles.body}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  ...styles.bubble,
                  ...(m.sender === "user" ? styles.user : styles.ai),
                }}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div style={{ ...styles.bubble, ...styles.ai }}>
                <div style={styles.loader}>
                  <span style={{ ...styles.dot, animationDelay: "0s" }} />
                  <span style={{ ...styles.dot, animationDelay: ".2s" }} />
                  <span style={{ ...styles.dot, animationDelay: ".4s" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} style={styles.footer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              style={styles.input}
              disabled={loading}
            />
            <button style={styles.send} disabled={loading}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;
