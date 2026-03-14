import { useState, useRef, useEffect, useCallback } from "react";

const TREE_DATA = {
  id: "yehuda",
  name: "Yehuda ibn Labi\nde la Cavalleria",
  dates: "c. 1227–1286",
  note: "25th great-grandfather · Bailiff of Saragossa · Ha-Levi · Levite & Davidic lines",
  location: "Saragossa, Spain",
  era: "medieval",
  children: [{
    id: "abraham_cav", name: "Abraham\nde la Cavalleria", dates: "c. 1250s",
    note: "Ha-Levi lineage; Burgos, Spain", location: "Burgos, Spain", era: "medieval",
    children: [{
      id: "isaac", name: "Isaac Ha-Levi", dates: "c. 1329",
      note: "Ha-Levi family, Burgos", location: "Burgos, Spain", era: "medieval",
      children: [{
        id: "maria_nunez", name: "María Núñez\nHa-Levi", dates: "c. 1350s",
        note: "Converso generation — forced conversion era 1391", location: "Burgos, Spain", era: "converso",
        children: [{
          id: "alvar", name: "Alvar Rodríguez\nde Maluenda", dates: "c. 1365",
          note: "Post-conversion Sephardic descendant", location: "Spain", era: "converso",
          children: [{
            id: "hernando", name: "Hernando\nde Maluenda", dates: "c. 1415",
            note: "", location: "Spain", era: "converso",
            children: [{
              id: "pedro", name: "Pedro José de\nMaluenda Romero", dates: "1465–1523",
              note: "Carries converso identity forward", location: "Spain", era: "converso",
              children: [{
                id: "catalina1", name: "Catalina de la\nCadena y Maluenda", dates: "1490–1572",
                note: "Direct Ha-Levi descendant", location: "Spain", era: "converso",
                children: [{
                  id: "leonor", name: "Leonor Catalina\nde Salazar (Ha-Levi)", dates: "1510–1572",
                  note: "", location: "Spain", era: "converso",
                  children: [{
                    id: "catalina2", name: "María Catalina\nSalazar de Cadena", dates: "1512–1532",
                    note: "Connects Ha-Levi line to Oñate/Betancourt", location: "Spain / Canary Islands", era: "canary",
                    children: [{
                      id: "antonio1", name: "Antonio Pérez\ny Oñate Salazar", dates: "1510–1583",
                      note: "Oñate clan · shared ancestor with Carola Uriona (~12th–15th cousins)", location: "Canary Islands", era: "canary",
                      children: [{
                        id: "antonio2", name: "Antonio Pérez\nBetancourt", dates: "1527–1583",
                        note: "Canary Islands leader · carrier of Guanche/Berber DNA", location: "Canary Islands", era: "canary",
                        children: [{
                          id: "joseph", name: "Joseph Peres\nIzquierdo", dates: "c. 1550",
                          note: "Canary Islands network", location: "Canary Islands", era: "canary",
                          children: [{
                            id: "bartolome", name: "Bartolome Pérez\nBillanueba", dates: "1575–1610",
                            note: "Ancestor at Fort San Juan · Morganton, NC area", location: "Florida / NC", era: "florida",
                            children: [{
                              id: "francisca", name: "Francisca Fatienda\nPérez", dates: "1601–1644",
                              note: "", location: "St. Augustine, FL", era: "florida",
                              children: [{
                                id: "alonso", name: "Alonso Pérez\nSolana II", dates: "1620–1700",
                                note: "St. Augustine settler · Solana 'First Family of Florida'", location: "St. Augustine, FL", era: "florida",
                                children: [{
                                  id: "diego", name: "Diego Manuel\nSolana I", dates: "1652–1704",
                                  note: "Royal Notary · St. Augustine", location: "St. Augustine, FL", era: "florida",
                                  children: [{
                                    id: "mary_solana", name: "Mary María\nSolana", dates: "1691–1756",
                                    note: "Mother of Isabella · daughter of Diego Solana", location: "St. Augustine, FL", era: "florida",
                                    children: [{
                                      id: "isabella", name: "Isabella Solano\nGames", dates: "1713–1752",
                                      note: "Daughter of María Manuela Solana (Mary Games) · married into Buchanan family", location: "Maryland / NC", era: "america",
                                      children: [{
                                        id: "james", name: "James Buchanan Jr.", dates: "1734–1805",
                                        note: "Scottish Buchanan line · North Carolina", location: "North Carolina", era: "america",
                                        children: [{
                                          id: "john_b", name: "John Buchanan", dates: "1795–1860",
                                          note: "NC branch", location: "North Carolina", era: "america",
                                          children: [{
                                            id: "elizabeth", name: "Elizabeth\nBuchanan", dates: "1820–1877",
                                            note: "", location: "North Carolina", era: "america",
                                            children: [{
                                              id: "mary_sparks", name: "Mary Elizabeth\nSparks", dates: "c. 1840s",
                                              note: "", location: "North Carolina", era: "america",
                                              children: [{
                                                id: "marinda", name: "Marinda Green\nPatton", dates: "1839–1898",
                                                note: "", location: "North Carolina", era: "america",
                                                children: [{
                                                  id: "miranda", name: "Miranda Green\nPatton", dates: "1866–1936",
                                                  note: "", location: "North Carolina", era: "america",
                                                  children: [{
                                                    id: "zebulon", name: "Zebulon Vance\nSuttle", dates: "1888–1973",
                                                    note: "", location: "North Carolina", era: "america",
                                                    children: [{
                                                      id: "lillian", name: "Lillian Lorraine\nSuttle", dates: "1921–2001",
                                                      note: "Mother of Margaret · carried Crypto-Jewish cultural echoes: Friday candle lighting, distrust of Catholic Church, affinity for Jewish community",
                                                      location: "North Carolina", era: "modern",
                                                      children: [{
                                                        id: "margaret", name: "Margaret Lorraine\nDula", dates: "Living",
                                                        note: "Genealogy researcher · confirmed Sephardic/Ha-Levi ancestry via DNA · also carries Stepp (E-M78) and Taliaferro (E-M35) lines",
                                                        location: "North Carolina (Triangle area)", era: "modern",
                                                        children: []
                                                      }]
                                                    }]
                                                  }]
                                                }]
                                              }]
                                            }]
                                          }]
                                        }]
                                      }]
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
};

const ERA_CONFIG = {
  medieval: { color: "#7C3AED", bg: "#2D1B69", label: "Medieval Spain",            icon: "✡" },
  converso: { color: "#B45309", bg: "#3D2008", label: "Converso Era (1391–1492)",  icon: "⚔" },
  canary:   { color: "#0369A1", bg: "#0C2A4A", label: "Canary Islands",            icon: "🌊" },
  florida:  { color: "#047857", bg: "#052E16", label: "Colonial Florida",           icon: "⚜" },
  america:  { color: "#B91C1C", bg: "#3B0A0A", label: "Colonial / Early America",  icon: "🦅" },
  modern:   { color: "#D97706", bg: "#3D2000", label: "Modern",                     icon: "★" },
};

const NODE_W = 152, NODE_H = 74, H_GAP = 28, V_GAP = 108;

function buildLayout(root) {
  const positions = {};
  function assignX(n, d, offsetX) {
    if (!n.children || n.children.length === 0) {
      positions[n.id] = { x: offsetX, d };
      return offsetX + NODE_W + H_GAP;
    }
    let cur = offsetX;
    for (const child of n.children) cur = assignX(child, d + 1, cur);
    const fc = positions[n.children[0].id];
    const lc = positions[n.children[n.children.length - 1].id];
    positions[n.id] = { x: (fc.x + lc.x) / 2, d };
    return cur;
  }
  assignX(root, 0, 0);
  const nodes = [];
  function collect(n) {
    nodes.push({ ...n, px: positions[n.id].x, py: positions[n.id].d });
    if (n.children) n.children.forEach(collect);
  }
  collect(root);
  return { nodes, positions };
}

function buildEdges(root, positions) {
  const edges = [];
  function walk(node) {
    if (node.children) {
      for (const child of node.children) {
        const px = positions[node.id].x + NODE_W / 2;
        const py = positions[node.id].d * (NODE_H + V_GAP) + NODE_H + 40;
        const cx = positions[child.id].x + NODE_W / 2;
        const cy = positions[child.id].d * (NODE_H + V_GAP) + 40;
        edges.push({ key: node.id + child.id, x1: px, y1: py, x2: cx, y2: cy, my: (py + cy) / 2, era: child.era });
        walk(child);
      }
    }
  }
  walk(root);
  return edges;
}

const btnStyle = {
  background: "#1a1a2a", border: "1px solid #3a3a5a", color: "#aaa",
  padding: "4px 12px", borderRadius: 4, cursor: "pointer", fontSize: 14,
};

export default function App() {
  const { nodes, positions } = buildLayout(TREE_DATA);
  const edges = buildEdges(TREE_DATA, positions);
  const [selected, setSelected] = useState(null);
  const [pan, setPan] = useState({ x: 60, y: 50 });
  const [zoom, setZoom] = useState(0.68);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const containerRef = useRef(null);

  const maxDepth = Math.max(...nodes.map(n => n.py));
  const maxX     = Math.max(...nodes.map(n => n.px));
  const svgW = maxX + NODE_W + 100;
  const svgH = (maxDepth + 1) * (NODE_H + V_GAP) + 100;

  const onMouseDown = useCallback((e) => {
    if (e.target.closest(".node-card")) return;
    setDragging(true);
    setDragStart({ mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y });
  }, [pan]);

  const onMouseMove = useCallback((e) => {
    if (!dragging || !dragStart) return;
    setPan({ x: dragStart.px + e.clientX - dragStart.mx, y: dragStart.py + e.clientY - dragStart.my });
  }, [dragging, dragStart]);

  const onMouseUp = useCallback(() => { setDragging(false); setDragStart(null); }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e) => {
      e.preventDefault();
      setZoom(z => Math.min(2.5, Math.max(0.2, z - e.deltaY * 0.001)));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  const sel = selected ? nodes.find(n => n.id === selected) : null;
  const mm  = positions["mary_solana"];

  return (
    <div style={{ width:"100%", height:"100vh", background:"#0A0A14",
      fontFamily:"Georgia,'Times New Roman',serif", display:"flex",
      flexDirection:"column", overflow:"hidden", userSelect:"none" }}>

      {/* Header */}
      <div style={{ padding:"12px 20px",
        background:"linear-gradient(90deg,#1a0a3a,#0a1a3a)", borderBottom:"1px solid #2a2a4a",
        display:"flex", alignItems:"center", gap:14, flexShrink:0, flexWrap:"wrap" }}>
        <div style={{ fontSize:20, color:"#c8a84b" }}>✡</div>
        <div>
          <div style={{ color:"#e8d5a0", fontSize:14, fontWeight:"bold", letterSpacing:2, textTransform:"uppercase" }}>
            Ha-Levi · Solana · Buchanan · Dula
          </div>
          <div style={{ color:"#7a6a40", fontSize:10, letterSpacing:1 }}>
            Sephardic Jewish Lineage · c.1227 – Present · 25 Generations
          </div>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:10, flexWrap:"wrap" }}>
          {Object.entries(ERA_CONFIG).map(([era, cfg]) => (
            <div key={era} style={{ display:"flex", alignItems:"center", gap:4, fontSize:9.5, color:"#777" }}>
              <div style={{ width:8, height:8, borderRadius:2, background:cfg.color }} />
              <span>{cfg.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:5, marginLeft:10 }}>
          <button style={btnStyle} onClick={() => setZoom(z => Math.min(2.5, z + 0.12))}>＋</button>
          <button style={btnStyle} onClick={() => setZoom(z => Math.max(0.2,  z - 0.12))}>－</button>
          <button style={{ ...btnStyle, fontSize:10, padding:"4px 10px" }}
            onClick={() => { setZoom(0.68); setPan({ x:60, y:50 }); setSelected(null); }}>Reset</button>
        </div>
      </div>

      {/* Canvas */}
      <div ref={containerRef}
        style={{ flex:1, overflow:"hidden", position:"relative", cursor: dragging ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>

        <svg width={svgW} height={svgH}
          style={{ transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
            transformOrigin:"0 0", transition: dragging ? "none" : "transform 0.08s" }}>
          <defs>
            {Object.entries(ERA_CONFIG).map(([era, cfg]) => (
              <radialGradient key={era} id={`g-${era}`} cx="50%" cy="30%" r="70%">
                <stop offset="0%"   stopColor={cfg.bg}  stopOpacity="0.96" />
                <stop offset="100%" stopColor="#070710" stopOpacity="0.99" />
              </radialGradient>
            ))}
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {edges.map(e => (
            <path key={e.key}
              d={`M ${e.x1} ${e.y1} C ${e.x1} ${e.my}, ${e.x2} ${e.my}, ${e.x2} ${e.y2}`}
              fill="none" stroke={ERA_CONFIG[e.era]?.color || "#555"}
              strokeWidth="1.5" strokeOpacity="0.32" />
          ))}

          {mm && (() => {
            const ay = mm.d * (NODE_H + V_GAP) + 40 + NODE_H / 2;
            return (
              <g>
                <line x1={mm.x - 10} y1={ay} x2={mm.x - 90} y2={ay}
                  stroke="#D97706" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.65" />
                <rect x={mm.x - 268} y={ay - 34} width={172} height={66} rx={7}
                  fill="#1c0f00" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.55" />
                <text x={mm.x - 182} y={ay - 18} textAnchor="middle" fontSize={9}
                  fill="#D97706" fontWeight="bold" fontFamily="Georgia,serif">María Manuela Solana</text>
                <text x={mm.x - 182} y={ay - 4}  textAnchor="middle" fontSize={8.5} fill="#a88040" fontFamily="Georgia,serif">→ married James Games (English)</text>
                <text x={mm.x - 182} y={ay + 9}  textAnchor="middle" fontSize={8.5} fill="#a88040" fontFamily="Georgia,serif">→ became "Mary Games"</text>
                <text x={mm.x - 182} y={ay + 22} textAnchor="middle" fontSize={8.5} fill="#a88040" fontFamily="Georgia,serif">→ moved to Maryland, c.1720</text>
              </g>
            );
          })()}

          {nodes.map(node => {
            const nx    = node.px;
            const ny    = node.py * (NODE_H + V_GAP) + 40;
            const cfg   = ERA_CONFIG[node.era] || ERA_CONFIG.medieval;
            const isSel = selected === node.id;
            const parts = node.name.split("\n");
            return (
              <g key={node.id} className="node-card" style={{ cursor:"pointer" }}
                onClick={e => { e.stopPropagation(); setSelected(isSel ? null : node.id); }}>
                {isSel && (
                  <rect x={nx-4} y={ny-4} width={NODE_W+8} height={NODE_H+8} rx={11}
                    fill="none" stroke={cfg.color} strokeWidth="2.5" opacity="0.85" filter="url(#glow)" />
                )}
                <rect x={nx} y={ny} width={NODE_W} height={NODE_H} rx={8}
                  fill={`url(#g-${node.era})`}
                  stroke={isSel ? cfg.color : cfg.color + "50"}
                  strokeWidth={isSel ? 1.8 : 0.9} />
                <rect x={nx} y={ny} width={NODE_W} height={3} rx={2} fill={cfg.color} opacity="0.85" />
                <text x={nx+11} y={ny+20} fontSize={11} fill={cfg.color} opacity="0.7">{cfg.icon}</text>
                {parts.map((part, i) => (
                  <text key={i} x={nx+NODE_W/2} y={ny+23+i*14}
                    textAnchor="middle" fontSize={10.5} fontWeight="600"
                    fill={isSel ? "#fff" : "#ddd"} fontFamily="Georgia,serif">{part}</text>
                ))}
                <text x={nx+NODE_W/2} y={ny+NODE_H-9}
                  textAnchor="middle" fontSize={8.5} fill={cfg.color} opacity="0.85" fontFamily="monospace">
                  {node.dates}
                </text>
              </g>
            );
          })}
        </svg>

        {sel && (
          <div style={{ position:"absolute", bottom:20, right:20, width:320,
            background:"linear-gradient(135deg,#12102a,#0a1020)",
            border:`1px solid ${ERA_CONFIG[sel.era]?.color||"#555"}44`,
            borderLeft:`3px solid ${ERA_CONFIG[sel.era]?.color||"#555"}`,
            borderRadius:10, padding:"15px 17px",
            boxShadow:"0 8px 40px rgba(0,0,0,0.65)", fontFamily:"Georgia,serif" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div style={{ fontSize:9, color:ERA_CONFIG[sel.era]?.color, letterSpacing:2, textTransform:"uppercase", marginBottom:6 }}>
                {ERA_CONFIG[sel.era]?.icon} {ERA_CONFIG[sel.era]?.label}
              </div>
              <button onClick={() => setSelected(null)}
                style={{ background:"none", border:"none", color:"#555", cursor:"pointer", fontSize:17, lineHeight:1, padding:0 }}>×</button>
            </div>
            <div style={{ fontSize:15, color:"#e8d5a0", fontWeight:"bold", lineHeight:1.4, marginBottom:4 }}>
              {sel.name.replace("\n", " ")}
            </div>
            <div style={{ fontSize:11, color:ERA_CONFIG[sel.era]?.color, marginBottom:7, fontFamily:"monospace" }}>{sel.dates}</div>
            {sel.location && <div style={{ fontSize:11, color:"#6a6a8a", marginBottom:7 }}>📍 {sel.location}</div>}
            {sel.note && (
              <div style={{ fontSize:11, color:"#bbb", lineHeight:1.65, borderTop:"1px solid #222232", paddingTop:8 }}>{sel.note}</div>
            )}
            <div style={{ marginTop:9, fontSize:9.5, color:"#3a3a4a" }}>Generation {sel.py+1} of {maxDepth+1}</div>
          </div>
        )}

        {!selected && (
          <div style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)",
            fontSize:11, color:"#383848", pointerEvents:"none", whiteSpace:"nowrap" }}>
            Click any card for details · Scroll to zoom · Drag to pan
          </div>
        )}
      </div>

      {/* Timeline bar */}
      <div style={{ height:30, background:"#070710", borderTop:"1px solid #181828", display:"flex", alignItems:"stretch", flexShrink:0 }}>
        {[
          ["1200s–1300s · Medieval Spain",  "#7C3AED"],
          ["1391–1492 · Converso Era",       "#B45309"],
          ["1492–1600s · Canary Islands",    "#0369A1"],
          ["1565–1700s · Colonial Florida",  "#047857"],
          ["1700s–1900s · Colonial America", "#B91C1C"],
          ["1900s–Present",                  "#D97706"],
        ].map(([label, color]) => (
          <div key={label} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center",
            borderRight:"1px solid #181828", borderTop:`2px solid ${color}` }}>
            <span style={{ fontSize:8.5, color, letterSpacing:0.4 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
