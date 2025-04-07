import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // ✅ التأكد مما إذا كان المستخدم يطلب حرفيًا
    const isWorkerRequest = /(أحتاج|أبحث عن|عايز) (.*?) في (.*)/i.exec(input);
    if (isWorkerRequest) {
      const [, , speciality] = isWorkerRequest;
      try {
        const response = await axios.get(
          `http://localhost:4000/api/workers/${speciality}`
        );
        const workers = response.data.workers;

        if (workers.length > 0) {
          const workerList = workers
            .map(
              (worker) =>
                `👨‍🔧 ${worker.name} - 📍 ${worker.location} - 📞 ${worker.phone}`
            )
            .join("\n");
          setMessages([
            ...newMessages,
            {
              role: "bot",
              content: `🔍 تم العثور على ${workers.length} عمال:\n${workerList}`,
            },
          ]);
        } else {
          setMessages([
            ...newMessages,
            {
              role: "bot",
              content: "❌ لم يتم العثور على حرفيين بهذه المواصفات.",
            },
          ]);
        }
      } catch (error) {
        console.error("❌ Error:", error);
        setMessages([
          ...newMessages,
          { role: "bot", content: "حدث خطأ، حاول مرة أخرى!" },
        ]);
      }
      return;
    }

    // ✅ إذا لم يكن طلبًا لحرفي، سيتم إرسال الطلب إلى الشات العادي
    try {
      const response = await axios.post("http://localhost:4000/chat", {
        message: input,
      });

      setMessages([
        ...newMessages,
        { role: "bot", content: response.data.response },
      ]);
    } catch (error) {
      console.error("❌ Error:", error);
      setMessages([
        ...newMessages,
        { role: "bot", content: "حدث خطأ، حاول مرة أخرى!" },
      ]);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>🤖 Chat AI</h2>
      <div
        style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "10px" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <strong>{msg.role === "user" ? "🧑‍💻 أنت: " : "🤖 بوت: "}</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="اكتب رسالتك..."
        style={{ width: "80%", padding: "10px", marginRight: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px" }}>
        إرسال
      </button>
    </div>
  );
};

export default Chatbot;
