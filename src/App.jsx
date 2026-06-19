const cartas = [
  { id: 1, nombre: "Dragón", tipo: "Fuego", poder: 95, emoji: "🐉" },
  { id: 2, nombre: "Mago", tipo: "Magia", poder: 70, emoji: "🧙" },
  { id: 3, nombre: "Gato", tipo: "Normal", poder: 30, emoji: "🐱" },
  { id: 4, nombre: "Golem", tipo: "Tierra", poder: 88, emoji: "🗿" },
  { id: 5, nombre: "Sirena", tipo: "Agua", poder: 60, emoji: "🧜" },
  { id: 6, nombre: "Fénix", tipo: "Fuego", poder: 99, emoji: "🔥" },
];

function Carta({ nombre, tipo, poder, emoji }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        margin: "8px",
        width: "220px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h3>
        {emoji} {nombre}
      </h3>

      <p>Tipo: {tipo}</p>
      <p>Poder: {poder}</p>

      {poder > 80 && (
        <p style={{ color: "gold", fontWeight: "bold" }}>
          ⚡ LEGENDARIA
        </p>
      )}

      <button
        onClick={() => alert("Elegiste: " + nombre)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Ver carta
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🃏 Mi galería de cartas</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {cartas.map((carta) => (
          <Carta
            key={carta.id}
            nombre={carta.nombre}
            tipo={carta.tipo}
            poder={carta.poder}
            emoji={carta.emoji}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
