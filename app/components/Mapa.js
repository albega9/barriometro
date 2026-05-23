'use client'
import { useState } from 'react'
import { colores, etiquetas } from '../data/zonas'
import { t } from '../data/traducciones'

const distritos = [
  // NORTE DEL RÍO
  { id: 18, nombre: "Pobles de l'Oest", tipo: 'joya',       precio: 1500, precioReal: 1400, prediccion24: 18, x: 55,  y: 100,  r: 38, rio: 'norte-lejano', estrategias: [{ titulo: 'Primera compra', descripcion: 'El precio más bajo de Valencia. Ideal para presupuesto ajustado.' }, { titulo: 'Rehabilitación', descripcion: 'Margen enorme entre precio de compra y valor potencial.' }] },
  { id: 17, nombre: 'Pobles del Nord',  tipo: 'joya',       precio: 1600, precioReal: 1500, prediccion24: 20, x: 185, y: 100,  r: 40, rio: 'norte-lejano', estrategias: [{ titulo: 'Edificio completo', descripcion: 'Plurifamiliares muy baratos. Alto potencial de rehabilitación.' }, { titulo: 'Nuda propiedad', descripcion: 'Población envejecida. Frecuentes oportunidades.' }] },
  { id: 16, nombre: 'Benicalap',        tipo: 'joya',       precio: 1980, precioReal: 1850, prediccion24: 27, x: 115, y: 155, r: 40, rio: 'norte-medio',  estrategias: [{ titulo: 'Primera compra', descripcion: 'Precio muy bajo con metro. Revalorización alta a 3-5 años.' }, { titulo: 'Segregación', descripcion: 'Viviendas grandes de los 80 convertibles en dos pisos.' }] },
  { id: 15, nombre: 'Rascanya',         tipo: 'joya',       precio: 2050, precioReal: 1920, prediccion24: 23, x: 255, y: 180, r: 38, rio: 'norte-medio',  estrategias: [{ titulo: 'Primera compra', descripcion: 'Precio contenido con buenas conexiones.' }, { titulo: 'Rehabilitación', descripcion: 'Stock antiguo barato. Reformar y vender genera 40% margen.' }] },
  { id: 14, nombre: 'Benimaclet',       tipo: 'joya',       precio: 2580, precioReal: 2450, prediccion24: 19, x: 385, y: 220, r: 40, rio: 'norte-medio',  estrategias: [{ titulo: 'Local a vivienda', descripcion: 'Bajos comerciales convertibles a mitad de precio.' }, { titulo: 'Compra conjunta', descripcion: 'Compras con otro, alquilas habitaciones. Hipoteca pagada.' }] },
  { id: 13, nombre: 'Algirós',          tipo: 'intermedio', precio: 2650, precioReal: 2480, prediccion24: 15, x: 465, y: 190, r: 38, rio: 'norte-medio',  estrategias: [{ titulo: 'Compra con inquilino', descripcion: 'Alquiler universitario estable. Comprar ya alquilado.' }, { titulo: 'Garaje segregable', descripcion: 'Vender parking recupera hasta 20k.' }] },
  // Bordean el jardín NORTE — bien por encima del recorrido
  { id: 4,  nombre: 'Campanar',         tipo: 'intermedio', precio: 2450, precioReal: 2310, prediccion24: 14, x: 60,  y: 215, r: 38, rio: 'norte-rio',    estrategias: [{ titulo: 'Compra con inquilino', descripcion: 'Contratos de renta antigua activos. Precio reducido.' }, { titulo: 'Garaje segregable', descripcion: 'Alta demanda de garaje. Vender el parking recupera liquidez.' }] },
  { id: 5,  nombre: 'La Saïdia',        tipo: 'intermedio', precio: 2500, precioReal: 2350, prediccion24: 12, x: 205, y: 250, r: 40, rio: 'norte-rio',    estrategias: [{ titulo: 'Primera compra', descripcion: 'Buena opción para comprador joven con servicios completos.' }, { titulo: 'Compra con inquilino', descripcion: 'Alta rotación de alquiler. Rentabilidad inmediata.' }] },
  { id: 6,  nombre: 'El Pla del Real',  tipo: 'intermedio', precio: 2900, precioReal: 2700, prediccion24: 9,  x: 340, y: 290, r: 38, rio: 'norte-rio',    estrategias: [{ titulo: 'Garaje segregable', descripcion: 'Zona con alta demanda de aparcamiento.' }, { titulo: 'Nuda propiedad', descripcion: 'Propietarios mayores con pisos grandes. Descuentos del 30%.' }] },
  // Bordean el jardín SUR — bien por debajo del recorrido
  { id: 3,  nombre: 'Extramurs',        tipo: 'intermedio', precio: 2750, precioReal: 2590, prediccion24: 13, x: 115, y: 350, r: 38, rio: 'sur-rio',      estrategias: [{ titulo: 'Local a vivienda', descripcion: 'Muchos bajos reconvertibles al 50% del precio de un piso.' }, { titulo: 'Permuta', descripcion: 'Canjea tu piso actual por uno mejor ubicado aquí.' }] },
  { id: 1,  nombre: 'Ciutat Vella',     tipo: 'caro',       precio: 3800, precioReal: 3500, prediccion24: 6,  x: 230, y: 390, r: 38, rio: 'sur-rio',      estrategias: [{ titulo: 'Alquiler turístico', descripcion: 'Alta ocupación turística compensa el precio elevado.' }, { titulo: 'Local a vivienda', descripcion: 'Bajos históricos reconvertibles a precio interesante.' }] },
  { id: 2,  nombre: 'Eixample',         tipo: 'caro',       precio: 3100, precioReal: 2900, prediccion24: 7,  x: 335, y: 410, r: 40, rio: 'sur-rio',      estrategias: [{ titulo: 'Garaje segregable', descripcion: 'Vender el garaje recupera hasta 30k de la inversión.' }, { titulo: 'Permuta', descripcion: 'Zona activa en permutas entre propietarios.' }] },
  { id: 12, nombre: 'Camins al Grau',   tipo: 'intermedio', precio: 2600, precioReal: 2430, prediccion24: 13, x: 445, y: 290, r: 38, rio: 'sur-rio',      estrategias: [{ titulo: 'Compra con inquilino', descripcion: 'Zona universitaria. Rentabilidad inmediata asegurada.' }, { titulo: 'Garaje segregable', descripcion: 'Alta demanda de garaje en la zona.' }] },
  // Sur medio
  { id: 7,  nombre: "L'Olivereta",      tipo: 'joya',       precio: 2000, precioReal: 1880, prediccion24: 22, x: 65,  y: 420, r: 40, rio: 'sur-medio',    estrategias: [{ titulo: 'Primera compra', descripcion: 'Precio bajo con buena conectividad al centro.' }, { titulo: 'Segregación', descripcion: 'Pisos grandes divisibles en dos unidades.' }] },
  { id: 8,  nombre: 'Patraix',          tipo: 'joya',       precio: 2100, precioReal: 2020, prediccion24: 26, x: 185, y: 460, r: 40, rio: 'sur-medio',    estrategias: [{ titulo: 'Nuda propiedad', descripcion: 'Precio 30-40% menor. Entras al fallecer el propietario.' }, { titulo: 'Segregación', descripcion: 'Pisos de 90m² divisibles en dos estudios rentables.' }] },
  { id: 10, nombre: 'Quatre Carreres',  tipo: 'intermedio', precio: 2300, precioReal: 2150, prediccion24: 16, x: 318, y: 495, r: 40, rio: 'sur-medio',    estrategias: [{ titulo: 'Compra con inquilino', descripcion: 'Alta demanda de alquiler. Rentabilidad inmediata.' }, { titulo: 'Nuda propiedad', descripcion: 'Descuentos del 30% con entrada diferida.' }] },
  { id: 11, nombre: 'Poblats Marítims', tipo: 'joya',       precio: 2150, precioReal: 2000, prediccion24: 24, x: 445, y: 410, r: 40, rio: 'sur-medio',    estrategias: [{ titulo: 'Alquiler turístico', descripcion: 'Proximidad al puerto y playa. Alta demanda vacacional.' }, { titulo: 'Local a vivienda', descripcion: 'Locales vacíos reconvertibles a precio muy bajo.' }] },
  // Sur lejano
  { id: 9,  nombre: 'Jesús',            tipo: 'joya',       precio: 1950, precioReal: 1820, prediccion24: 31, x: 175, y: 540, r: 40, rio: 'sur-lejano',   estrategias: [{ titulo: 'Primera compra', descripcion: 'Precio más bajo con metro directo al centro.' }, { titulo: 'Edificio completo', descripcion: 'Plurifamiliares por debajo de 300k. Máximo margen.' }] },
  { id: 19, nombre: 'Pobles del Sud',   tipo: 'intermedio', precio: 1800, precioReal: 1680, prediccion24: 15, x: 318, y: 575, r: 40, rio: 'sur-lejano',   estrategias: [{ titulo: 'Alquiler turístico', descripcion: 'Zona sur con acceso a playas. Demanda vacacional creciente.' }, { titulo: 'Compra conjunta', descripcion: 'Pisos grandes baratos ideales para dos compradores.' }] },
]

const bordeRio = { 'norte-rio': '#7ab648', 'sur-rio': '#7ab648', 'norte-medio': '#fff', 'sur-medio': '#fff', 'norte-lejano': '#ddd', 'sur-lejano': '#ddd' }
const grosorRio = { 'norte-rio': 3, 'sur-rio': 3, 'norte-medio': 1.5, 'sur-medio': 1.5, 'norte-lejano': 1, 'sur-lejano': 1 }

export default function Mapa({ idioma = 'es' }) {
  const [seleccionado, setSeleccionado] = useState(null)
  const [hover, setHover] = useState(null)
  const d = seleccionado
  const tr = t[idioma]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: d ? '1fr 360px' : '1fr', gap: '16px', alignItems: 'start' }}>
      <div style={{ background: '#eaf4ea', borderRadius: '16px', border: '1px solid #c5d8c5', padding: '12px' }}>
        <svg viewBox="0 0 540 660" style={{ width: '100%', height: '660px' }}>
          <rect width="540" height="660" fill="#eaf4ea" rx="12" />

          {/* Mar mediterráneo */}
          <rect x="500" y="300" width="40" height="220" fill="#aed6f1" opacity="0.7" rx="4" />
          <text x="520" y="420" fontSize="8" fill="#2a7fa5" textAnchor="middle" transform="rotate(90,520,420)">Mar Mediterráneo</text>

          {/* JARDÍ DEL TÚRIA
              Entra noroeste (Campanar arriba izq),
              baja diagonal al centro (entre Extramurs y Ciutat Vella),
              gira sureste hacia Ciudad de las Artes y Puerto
          */}
          <path d="M 15,265 Q 55,260 100,278 Q 145,296 185,318 Q 225,340 268,352 Q 315,362 360,352 Q 400,342 435,348 Q 462,354 480,375" stroke="#5a9e2f" strokeWidth="26" fill="none" strokeLinecap="round" opacity="0.65" />
          <path d="M 15,265 Q 55,260 100,278 Q 145,296 185,318 Q 225,340 268,352 Q 315,362 360,352 Q 400,342 435,348 Q 462,354 480,375" stroke="#8dc63f" strokeWidth="15" fill="none" strokeLinecap="round" opacity="0.6" />
          <path d="M 15,265 Q 55,260 100,278 Q 145,296 185,318 Q 225,340 268,352 Q 315,362 360,352 Q 400,342 435,348 Q 462,354 480,375" stroke="#c5e88a" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />

          {/* Textos jardín */}
          <text x="90" y="268" fontSize="8" fill="#2d5a0e" fontWeight="700" textAnchor="middle" transform="rotate(18,90,268)">🌿 Jardí del Túria</text>
          <text x="255" y="342" fontSize="8" fill="#2d5a0e" fontWeight="700" textAnchor="middle" transform="rotate(10,255,342)">🌿 Jardí del Túria</text>
          <text x="415" y="344" fontSize="8" fill="#2d5a0e" fontWeight="700" textAnchor="middle" transform="rotate(15,415,344)">🌿 Jardí del Túria</text>

         
          {/* Etiquetas norte/sur */}
          <text x="28" y="30" fontSize="10" fill="#3a6b10" fontWeight="700" opacity="0.85">↑ NORTE DEL RÍO</text>
          <text x="28" y="490" fontSize="10" fill="#3a6b10" fontWeight="700" opacity="0.85">↓ SUR DEL RÍO</text>

          {/* DISTRITOS */}
          {distritos.map(dist => {
            const esSel = seleccionado?.id === dist.id
            const esHover = hover === dist.id
            const color = colores[dist.tipo]
            return (
              <g key={dist.id}
                onClick={() => setSeleccionado(esSel ? null : dist)}
                onMouseEnter={() => setHover(dist.id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle cx={dist.x + 2} cy={dist.y + 2} r={dist.r} fill="rgba(0,0,0,0.1)" />
                <circle
                  cx={dist.x} cy={dist.y}
                  r={esSel ? dist.r + 5 : esHover ? dist.r + 2 : dist.r}
                  fill={color}
                  fillOpacity={esSel ? 1 : esHover ? 0.95 : 0.88}
                  stroke={esSel ? '#1a1a1a' : bordeRio[dist.rio]}
                  strokeWidth={esSel ? 3 : grosorRio[dist.rio]}
                />
                {(dist.rio === 'norte-rio' || dist.rio === 'sur-rio') && (
                  <circle cx={dist.x + dist.r - 4} cy={dist.y - dist.r + 4} r="5" fill="#7ab648" stroke="#fff" strokeWidth="1.2" />
                )}
                {dist.nombre.split(' ').map((w, i, arr) => (
                  <text key={i} x={dist.x} y={dist.y - 7 + (i - (arr.length - 1) / 2) * 10}
                    textAnchor="middle" fontSize={dist.r > 39 ? '8.5' : '7.5'} fontWeight="700" fill="#fff"
                    style={{ pointerEvents: 'none' }}>{w}</text>
                ))}
                <text x={dist.x} y={dist.y + dist.nombre.split(' ').length * 5 + 3}
                  textAnchor="middle" fontSize="7.5" fill="#fff" opacity="0.95" fontWeight="500"
                  style={{ pointerEvents: 'none' }}>{dist.precioReal.toLocaleString()}€/m²</text>
                <text x={dist.x} y={dist.y + dist.nombre.split(' ').length * 5 + 13}
                  textAnchor="middle" fontSize="7" fill="#fff" opacity="0.85"
                  style={{ pointerEvents: 'none' }}>+{dist.prediccion24}% en 2 años</text>
              </g>
            )
          })}

          {/* LEYENDA */}
          <rect x="10" y="618" width="450" height="34" fill="white" fillOpacity="0.92" rx="8" />
          <circle cx="26" cy="632" r="6" fill="#4CAF50" /><text x="36" y="636" fontSize="10" fill="#333">Joya oculta</text>
          <circle cx="115" cy="632" r="6" fill="#FF9800" /><text x="125" y="636" fontSize="10" fill="#333">Precio intermedio</text>
          <circle cx="240" cy="632" r="6" fill="#F44336" /><text x="250" y="636" fontSize="10" fill="#333">Caro</text>
          <circle cx="295" cy="632" r="5" fill="#7ab648" stroke="#fff" strokeWidth="1" /><text x="304" y="636" fontSize="10" fill="#3a6b10">Bordea el Jardí</text>
          <text x="16" y="648" fontSize="9" fill="#888">Clica cualquier distrito para ver el análisis detallado</text>
        </svg>
      </div>

      {d && (
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e0e0e0', padding: '20px', overflowY: 'auto', maxHeight: '660px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '2px' }}>Distrito {d.id}</div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px' }}>{d.nombre}</h2>
              <span style={{ background: colores[d.tipo], color: '#fff', padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{etiquetas[d.tipo]}</span>
              {(d.rio === 'norte-rio' || d.rio === 'sur-rio') && (
                <span style={{ background: '#eaf4db', color: '#3a6b10', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '500', marginLeft: '6px' }}>🌿 Bordea el Jardí</span>
              )}
            </div>
            <button onClick={() => setSeleccionado(null)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#aaa' }}>✕</button>
          </div>

          <div style={{ background: '#fff8f0', border: '1px solid #ffe0b2', borderRadius: '12px', padding: '14px', marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Precio anunciado vs cierre real</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#aaa', textDecoration: 'line-through' }}>{d.precio.toLocaleString()} €/m² anunciado</div>
                <div style={{ fontSize: '22px', fontWeight: '700', color: '#e65100' }}>{d.precioReal.toLocaleString()} €/m²</div>
                <div style={{ fontSize: '11px', color: '#888' }}>precio real de cierre</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#e65100' }}>-{Math.round((d.precio - d.precioReal) / d.precio * 100)}%</div>
                <div style={{ fontSize: '11px', color: '#888' }}>margen negociación</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#e65100' }}>-{(d.precio - d.precioReal).toLocaleString()} €/m²</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#f0faf0', border: '1px solid #c8e6c9', borderRadius: '12px', padding: '14px', marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revalorización estimada</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#2e7d32' }}>+{d.prediccion24}%</div>
                <div style={{ fontSize: '13px', color: '#2e7d32', fontWeight: '500' }}>+{Math.round(d.precioReal * d.prediccion24 / 100)} €/m² de ganancia</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Total: {Math.round(d.precioReal * (1 + d.prediccion24 / 100)).toLocaleString()} €/m²</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '11px', color: '#888' }}>en 2 años<br />estimado</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: '500', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estrategias de compra</div>
            {d.estrategias && d.estrategias.map((e, i) => (
              <div key={i} style={{ background: '#fff8e1', borderLeft: '3px solid #FF9800', borderRadius: '0 8px 8px 0', padding: '10px 12px', marginBottom: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '3px' }}>{e.titulo}</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>{e.descripcion}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
