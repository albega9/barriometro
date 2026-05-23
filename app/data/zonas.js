export const zonas = [
  {
    id: 1, slug: 'ciutat-vella', nombre: 'Ciutat Vella',
    tipo: 'caro', precio: 3800, precioReal: 3500, prediccion24: 6,
    cp: ['46001', '46002', '46003'],
    calles: ['Calle Caballeros', 'Plaza de la Virgen', 'Calle del Mar', 'Calle Quart', 'Plaza Redonda'],
    resumen: 'El centro histórico de Valencia. Precio máximo de la ciudad con poco margen de revalorización. Alta demanda turística que mantiene los precios elevados.',
    descripcion: 'Ciutat Vella es el corazón histórico de Valencia, con monumentos como la Catedral, el Mercado Central y las Torres de Serranos. Es el distrito más caro de la ciudad con precios que superan los 3.800€/m² en anuncio, aunque los cierres reales rondan los 3.500€/m². La alta demanda turística y la escasez de oferta mantienen los precios elevados con poco margen de bajada pero también poco recorrido al alza.',
    estrategias: [
      { titulo: 'Alquiler turístico', descripcion: 'La única estrategia rentable aquí. Alta ocupación turística compensa el precio elevado de compra.' },
      { titulo: 'Local a vivienda', descripcion: 'Algunos bajos históricos sin uso reconvertibles. Permiso difícil pero precio interesante.' }
    ],
    perfil: 'Inversor con capital alto orientado a alquiler turístico'
  },
  {
    id: 2, slug: 'eixample', nombre: 'Eixample',
    tipo: 'caro', precio: 3100, precioReal: 2900, prediccion24: 7,
    cp: ['46004', '46005'],
    calles: ['Gran Via Marqués del Turia', 'Calle Cirilo Amorós', 'Calle Colón', 'Calle Jorge Juan', 'Avenida del Regne de Valencia'],
    resumen: 'Zona premium de Valencia con precios ya elevados. Para quien prioriza ubicación sobre rentabilidad.',
    descripcion: 'El Eixample valenciano es el barrio burgués por excelencia, con amplias avenidas, edificios modernistas y una oferta comercial de primer nivel. Los precios superan los 3.100€/m² en anuncio con cierres reales en torno a 2.900€/m². Es un barrio consolidado con poca volatilidad — un activo refugio más que una oportunidad de revalorización.',
    estrategias: [
      { titulo: 'Garaje segregable', descripcion: 'Pisos con garaje incluido. Vender el garaje recupera hasta 30k de la inversión.' },
      { titulo: 'Permuta', descripcion: 'Zona activa en permutas entre propietarios que quieren cambiar de tamaño.' }
    ],
    perfil: 'Comprador que prioriza calidad de vida y ubicación sobre rentabilidad'
  },
  {
    id: 3, slug: 'extramurs', nombre: 'Extramurs',
    tipo: 'intermedio', precio: 2750, precioReal: 2590, prediccion24: 13,
    cp: ['46008'],
    calles: ['Calle Quart', 'Calle Guillem de Castro', 'Calle Ecuador', 'Calle Blanquerías', 'Avenida del Oeste'],
    resumen: 'Limítrofe con el centro histórico. Precio razonable con regeneración urbana activa en el barrio de Velluters.',
    descripcion: 'Extramurs es uno de los distritos más interesantes de Valencia por su posición estratégica junto al centro histórico y el Jardí del Túria. El barrio de Velluters está en plena regeneración urbana, con nuevos locales, galerías y espacios culturales que atraen a un perfil joven y creativo. Los precios son razonables comparados con el Eixample con mayor potencial de subida.',
    estrategias: [
      { titulo: 'Local a vivienda', descripcion: 'Muchos bajos reconvertibles al 50% del precio de un piso equivalente.' },
      { titulo: 'Permuta', descripcion: 'Canjea tu piso actual por uno mejor ubicado en esta zona.' }
    ],
    perfil: 'Comprador joven o inversor que busca zona céntrica a precio contenido'
  },
  {
    id: 4, slug: 'campanar', nombre: 'Campanar',
    tipo: 'intermedio', precio: 2450, precioReal: 2310, prediccion24: 14,
    cp: ['46015'],
    calles: ['Avenida de Campanar', 'Calle Poetisa Leonor Romero', 'Calle Pintor Stolz', 'Calle Arabista Ambrosio Huici', 'Calle Mare de Déu del Pilar'],
    resumen: 'Buen equilibrio entre precio y calidad de vida. Crecimiento moderado y estable junto al Jardí del Túria.',
    descripcion: 'Campanar es un distrito tranquilo y familiar situado al norte del Jardí del Túria. Cuenta con el Parque de Cabecera, amplias zonas verdes y buena conectividad con el centro. Los precios son moderados con tendencia alcista estable. Es una de las mejores opciones para familias que buscan calidad de vida sin pagar los precios del centro.',
    estrategias: [
      { titulo: 'Compra con inquilino', descripcion: 'Contratos de renta antigua activos. Precio reducido y entrada diferida.' },
      { titulo: 'Garaje segregable', descripcion: 'Alta demanda de garaje. Vender el parking recupera liquidez.' }
    ],
    perfil: 'Familia que busca calidad de vida y zonas verdes a precio moderado'
  },
  {
    id: 5, slug: 'la-saidia', nombre: 'La Saïdia',
    tipo: 'intermedio', precio: 2500, precioReal: 2350, prediccion24: 12,
    cp: ['46009'],
    calles: ['Calle Sagunto', 'Calle Alboraya', 'Calle Conde de Lumiares', 'Avenida Primado Reig', 'Calle San Valero'],
    resumen: 'Distrito residencial bien comunicado al norte del centro. Precio equilibrado con crecimiento estable.',
    descripcion: 'La Saïdia es un distrito residencial tranquilo con buena oferta de servicios y transporte público. Situado entre el centro y los barrios del norte, ofrece una posición estratégica a precio razonable. La demanda es constante gracias a su perfil familiar y la proximidad a colegios y parques.',
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'Buena opción para comprador joven con servicios completos a precio contenido.' },
      { titulo: 'Compra con inquilino', descripcion: 'Alta rotación de alquiler. Rentabilidad inmediata asegurada.' }
    ],
    perfil: 'Primera compra o familia que busca barrio tranquilo bien comunicado'
  },
  {
    id: 6, slug: 'el-pla-del-real', nombre: 'El Pla del Real',
    tipo: 'intermedio', precio: 2900, precioReal: 2700, prediccion24: 9,
    cp: ['46010'],
    calles: ['Avenida Blasco Ibáñez', 'Calle Menorca', 'Calle Doctor Moliner', 'Paseo de la Alameda', 'Calle Ramón y Cajal'],
    resumen: 'Distrito universitario y residencial de alto standing junto al Jardí del Túria y la Alameda.',
    descripcion: 'El Pla del Real es uno de los distritos más elegantes de Valencia, con la Avenida Blasco Ibáñez y el Paseo de la Alameda como ejes principales. La proximidad a la Universidad de Valencia y al Jardí del Túria lo hace muy demandado. Los precios son elevados pero el barrio mantiene un perfil muy estable con baja rotación.',
    estrategias: [
      { titulo: 'Garaje segregable', descripcion: 'Zona con alta demanda de aparcamiento. El garaje tiene mucho valor aquí.' },
      { titulo: 'Nuda propiedad', descripcion: 'Propietarios mayores con pisos grandes. Descuentos del 30% con entrada diferida.' }
    ],
    perfil: 'Profesional o familia de alto poder adquisitivo que valora ubicación y prestigio'
  },
  {
    id: 7, slug: 'lolivereta', nombre: "L'Olivereta",
    tipo: 'joya', precio: 2000, precioReal: 1880, prediccion24: 22,
    cp: ['46018'],
    calles: ['Calle Arquitecto Arnau', 'Avenida del Cid', 'Calle Eolo', 'Calle Pius XII', 'Calle Murillo'],
    resumen: 'Joya oculta al oeste de Valencia. Precio muy bajo con buena conectividad y alto potencial de revalorización.',
    descripcion: "L'Olivereta es uno de los distritos más infravalorados de Valencia. Con precios por debajo de 2.000€/m² y buena conexión con el centro mediante el metro y el tranvía, ofrece una de las mejores relaciones calidad-precio de la ciudad. La regeneración urbana en marcha y la llegada de población joven están empujando los precios al alza.",
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'Precio bajo con buena conectividad al centro. Ideal para presupuesto ajustado.' },
      { titulo: 'Segregación', descripcion: 'Pisos grandes de los años 70 divisibles en dos unidades independientes.' }
    ],
    perfil: 'Comprador joven o inversor que busca máxima revalorización a precio bajo'
  },
  {
    id: 8, slug: 'patraix', nombre: 'Patraix',
    tipo: 'joya', precio: 2100, precioReal: 2020, prediccion24: 26,
    cp: ['46018'],
    calles: ['Calle Músico Peydró', 'Avenida Pérez Galdós', 'Calle Mossen Femenia', 'Calle Filipinas', 'Calle Sant Isidre'],
    resumen: 'La joya más clara de Valencia. Precio bajo, metro cerca, obras de mejora en marcha y máximo potencial de revalorización.',
    descripcion: 'Patraix es el distrito con mayor potencial de revalorización de Valencia según nuestro análisis. Con precios que rondan los 2.100€/m² en anuncio y cierres reales en torno a 2.020€/m², ofrece una entrada muy asequible en una zona bien comunicada con metro directo al centro. Las obras de rehabilitación urbana en marcha y la llegada de nuevos comercios y servicios apuntan a una subida significativa en los próximos años.',
    estrategias: [
      { titulo: 'Nuda propiedad', descripcion: 'Alta concentración de propietarios mayores. Descuentos del 30-40% con entrada diferida.' },
      { titulo: 'Segregación', descripcion: 'Pisos de 90m² divisibles en dos estudios. Doble rentabilidad por alquiler.' },
      { titulo: 'Edificio completo', descripcion: 'Plurifamiliares por debajo de 400k con alto potencial de rehabilitación.' }
    ],
    perfil: 'Inversor o comprador que busca máxima revalorización a 2-5 años'
  },
  {
    id: 9, slug: 'jesus', nombre: 'Jesús',
    tipo: 'joya', precio: 1950, precioReal: 1820, prediccion24: 31,
    cp: ['46017'],
    calles: ['Calle Arquitecto Alfaro', 'Calle Padre Méndez', 'Avenida de la Plata', 'Calle Pantà de Foix', 'Calle Doctor Serrano'],
    resumen: 'El barrio más barato con metro directo al centro. Regeneración urbana en marcha y máximo potencial de revalorización de toda Valencia.',
    descripcion: 'Jesús es el distrito con la mayor revalorización estimada de Valencia — un 31% en 2 años según nuestro modelo. Con precios que rondan los 1.950€/m² en anuncio y cierres reales en 1.820€/m², es el punto de entrada más bajo de la ciudad con metro directo al centro. La regeneración urbana activa y la llegada de población joven están transformando el barrio rápidamente.',
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'Precio de entrada más bajo de Valencia con metro directo. Ideal para presupuesto ajustado.' },
      { titulo: 'Nuda propiedad', descripcion: 'Alta concentración de propietarios mayores. Frecuentes oportunidades con descuentos del 35-40%.' },
      { titulo: 'Edificio completo', descripcion: 'Plurifamiliares por debajo de 300k. El mayor margen de rehabilitación de Valencia.' }
    ],
    perfil: 'Inversor agresivo o comprador joven que busca máxima revalorización'
  },
  {
    id: 10, slug: 'quatre-carreres', nombre: 'Quatre Carreres',
    tipo: 'intermedio', precio: 2300, precioReal: 2150, prediccion24: 16,
    cp: ['46006'],
    calles: ['CalleUnta', 'Avenida de la Plata', 'Calle Ramón Campoamor', 'Calle Pío XI', 'Calle Vicente Mortes'],
    resumen: 'Distrito sur bien comunicado con precio moderado y crecimiento constante. Zona de la Ciudad de las Artes.',
    descripcion: 'Quatre Carreres es un distrito amplio y heterogéneo que incluye zonas tan diferentes como el entorno de la Ciudad de las Artes y las Ciencias y barrios más tradicionales al sur. La proximidad al nuevo estadio del Valencia CF y a la Ciudad de las Artes genera una demanda creciente que está empujando los precios al alza de forma sostenida.',
    estrategias: [
      { titulo: 'Compra con inquilino', descripcion: 'Alta demanda de alquiler en la zona. Rentabilidad inmediata garantizada.' },
      { titulo: 'Nuda propiedad', descripcion: 'Descuentos del 30% con entrada diferida en zona de alta demanda.' }
    ],
    perfil: 'Inversor que busca rentabilidad por alquiler en zona con proyección'
  },
  {
    id: 11, slug: 'poblats-maritims', nombre: 'Poblats Marítims',
    tipo: 'joya', precio: 2150, precioReal: 2000, prediccion24: 24,
    cp: ['46011', '46024'],
    calles: ['Calle Eugenia Viñes', 'Calle del Mediterráneo', 'Avenida del Puerto', 'Calle de la Reina', 'Calle Escalante'],
    resumen: 'El SoHo valenciano emergente. Playa, puerto y transformación urbana a precio todavía asequible.',
    descripcion: 'Poblats Marítims es uno de los distritos con mayor proyección de Valencia. La transformación del puerto deportivo, la proximidad a la playa de la Malvarrosa y la llegada de nuevos restaurantes, galerías y espacios creativos están convirtiendo esta zona en el nuevo barrio de moda. Los precios siguen siendo asequibles comparados con zonas similares en otras ciudades costeras españolas.',
    estrategias: [
      { titulo: 'Alquiler turístico', descripcion: 'Proximidad al puerto y la playa. Alta demanda vacacional internacional.' },
      { titulo: 'Local a vivienda', descripcion: 'Abundantes locales comerciales vacíos reconvertibles a precio muy bajo.' },
      { titulo: 'Compra conjunta', descripcion: 'Pisos grandes cerca de la playa ideales para dos compradores que comparten inversión.' }
    ],
    perfil: 'Inversor orientado a alquiler turístico o comprador que busca vida de barrio junto al mar'
  },
  {
    id: 12, slug: 'camins-al-grau', nombre: 'Camins al Grau',
    tipo: 'intermedio', precio: 2600, precioReal: 2430, prediccion24: 13,
    cp: ['46013'],
    calles: ['Avenida del Puerto', 'Calle Serrería', 'Calle Jerónimo de Monsoriu', 'Calle Menorca', 'Calle Ciudad de Mula'],
    resumen: 'Distrito universitario y bien comunicado junto al final del Jardí del Túria y la Ciudad de las Artes.',
    descripcion: 'Camins al Grau es un distrito dinámico y bien comunicado que se beneficia de su proximidad a la Universidad Politécnica, la Ciudad de las Artes y el puerto deportivo. La alta densidad universitaria garantiza una demanda constante de alquiler mientras que la transformación del entorno portuario está atrayendo nueva inversión.',
    estrategias: [
      { titulo: 'Compra con inquilino', descripcion: 'Alta rotación universitaria. Comprar ya alquilado garantiza rentabilidad inmediata.' },
      { titulo: 'Garaje segregable', descripcion: 'Alta demanda de garaje en zona universitaria. Recupera hasta 20k vendiendo el parking.' }
    ],
    perfil: 'Inversor orientado a alquiler universitario con rentabilidad estable'
  },
  {
    id: 13, slug: 'algiros', nombre: 'Algirós',
    tipo: 'intermedio', precio: 2650, precioReal: 2480, prediccion24: 15,
    cp: ['46021', '46022'],
    calles: ['Avenida Blasco Ibáñez', 'Calle Doctor Moliner', 'Calle Jerónimo de Monsoriu', 'Calle Serrería', 'Calle Menorca'],
    resumen: 'Barrio universitario consolidado junto a la UV. Demanda estable y precio equilibrado.',
    descripcion: 'Algirós es un distrito eminentemente universitario, con la Universidad de Valencia como eje central. La demanda de alquiler es muy alta y constante, lo que garantiza una rentabilidad estable para el inversor. Los precios son moderados para la calidad del barrio y la ubicación.',
    estrategias: [
      { titulo: 'Compra con inquilino', descripcion: 'Alquiler universitario estable. Comprar ya alquilado es la estrategia más segura.' },
      { titulo: 'Garaje segregable', descripcion: 'Vender el parking recupera hasta 20k de la inversión inicial.' }
    ],
    perfil: 'Inversor que busca rentabilidad estable por alquiler universitario'
  },
  {
    id: 14, slug: 'benimaclet', nombre: 'Benimaclet',
    tipo: 'joya', precio: 2580, precioReal: 2450, prediccion24: 19,
    cp: ['46020'],
    calles: ['Calle Murta', 'Calle Emilio Baró', 'Avenida Primado Reig', 'Calle Benicolet', 'Plaza de Benimaclet'],
    resumen: 'Barrio universitario con alma de pueblo en plena transformación. Precio contenido con alto recorrido al alza.',
    descripcion: 'Benimaclet es uno de los barrios más queridos de Valencia por su ambiente de pueblo dentro de la ciudad. La alta densidad universitaria, los mercadillos, la vida cultural activa y la llegada de nueva población creativa están impulsando los precios. El nuevo parque urbano aprobado para la zona norte del barrio añade un catalizador adicional de revalorización.',
    estrategias: [
      { titulo: 'Local a vivienda', descripcion: 'Bajos comerciales convertibles a vivienda a mitad de precio del piso equivalente.' },
      { titulo: 'Compra conjunta', descripcion: 'Compras con otro, alquilas habitaciones. La hipoteca se paga sola.' },
      { titulo: 'Primera compra', descripcion: 'Ideal para comprador joven que valora ambiente y comunidad.' }
    ],
    perfil: 'Comprador joven que valora comunidad y ambiente o inversor orientado al alquiler'
  },
  {
    id: 15, slug: 'rascanya', nombre: 'Rascanya',
    tipo: 'joya', precio: 2050, precioReal: 1920, prediccion24: 23,
    cp: ['46019'],
    calles: ['Avenida Cataluña', 'Calle Tres Forques', 'Calle Algirós', 'Calle Antonio Suárez', 'Calle Músico Vert'],
    resumen: 'Distrito norte con precio muy contenido y buena conectividad. Alto potencial de revalorización.',
    descripcion: 'Rascanya es un distrito tranquilo y residencial con precios muy por debajo de la media de Valencia. La buena conexión con el centro mediante metro y autobús y la comunidad consolidada lo hacen atractivo para compradores que buscan precio de entrada bajo con potencial de subida.',
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'Precio contenido con buenas conexiones. Ideal para primer piso.' },
      { titulo: 'Rehabilitación', descripcion: 'Stock antiguo a precios bajos. Reformar y vender puede generar un 40% de margen.' }
    ],
    perfil: 'Primera compra o inversor que busca rehabilitación y venta'
  },
  {
    id: 16, slug: 'benicalap', nombre: 'Benicalap',
    tipo: 'joya', precio: 1980, precioReal: 1850, prediccion24: 27,
    cp: ['46025'],
    calles: ['Calle Alcalde Reig', 'Avenida Pío XII', 'Calle Arturo Ballester', 'Calle Teodoro Llorente', 'Calle Compositor Lehmberg Ruiz'],
    resumen: 'Barrio norte infravalorado con nueva línea de metro. Regeneración activa y precios todavía muy bajos.',
    descripcion: 'Benicalap es uno de los distritos con mayor potencial sin descubrir de Valencia. La nueva línea de metro, la regeneración urbana activa y los precios todavía muy bajos crean una oportunidad de entrada clara. La llegada de nueva población joven está transformando el barrio rápidamente.',
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'Uno de los precios más bajos de Valencia con metro. Revalorización muy alta a 3-5 años.' },
      { titulo: 'Segregación', descripcion: 'Viviendas grandes de los 80 ideales para convertir en dos pisos modernos.' },
      { titulo: 'Edificio completo', descripcion: 'Pequeños plurifamiliares por debajo de 350k con alto potencial de rehabilitación.' }
    ],
    perfil: 'Inversor que busca máxima revalorización a largo plazo con precio de entrada bajo'
  },
  {
    id: 17, slug: 'pobles-del-nord', nombre: 'Pobles del Nord',
    tipo: 'joya', precio: 1600, precioReal: 1500, prediccion24: 20,
    cp: ['46113', '46136'],
    calles: ['Calle Mayor de Borbotó', 'Calle Trinitat', 'Calle San Miguel de Borbotó', 'Calle Les Carolines', 'Camino de Carpesa'],
    resumen: 'Los pueblos del norte de Valencia. Precio mínimo, tranquilidad y conexión con la ciudad.',
    descripcion: 'Pobles del Nord agrupa varios núcleos rurales integrados en el municipio de Valencia como Borbotó, Carpesa y Cases de Bàrcena. Ofrecen el precio más bajo de Valencia con un entorno tranquilo y verde. La mejora de las conexiones con el centro está atrayendo a compradores que buscan calidad de vida a precio mínimo.',
    estrategias: [
      { titulo: 'Edificio completo', descripcion: 'Plurifamiliares muy baratos con alto potencial de rehabilitación.' },
      { titulo: 'Nuda propiedad', descripcion: 'Población envejecida con alta disposición a vender en nuda propiedad.' }
    ],
    perfil: 'Comprador que busca tranquilidad y precio mínimo o inversor en rehabilitación'
  },
  {
    id: 18, slug: 'pobles-de-loest', nombre: "Pobles de l'Oest",
    tipo: 'joya', precio: 1500, precioReal: 1400, prediccion24: 18,
    cp: ['46980', '46900'],
    calles: ['Calle Mayor de Mislata', 'Calle Historiador Diago', 'Avenida del Cid', 'Calle San Roc', 'Calle Lepanto'],
    resumen: 'El precio más bajo de Valencia con buena conexión al centro. Máximo margen de revalorización.',
    descripcion: "Pobles de l'Oest agrupa los núcleos de Mislata y Xirivella integrados en el área metropolitana de Valencia. Con el precio más bajo de toda la ciudad y buena conexión mediante metro y tranvía, ofrece el mayor margen de entrada para compradores con presupuesto ajustado.",
    estrategias: [
      { titulo: 'Primera compra', descripcion: 'El precio más bajo de Valencia. Ideal para quien tiene presupuesto muy ajustado.' },
      { titulo: 'Rehabilitación', descripcion: 'Margen enorme entre precio de compra y valor potencial tras reforma.' }
    ],
    perfil: 'Primera compra con presupuesto muy ajustado o inversor en rehabilitación'
  },
  {
    id: 19, slug: 'pobles-del-sud', nombre: 'Pobles del Sud',
    tipo: 'intermedio', precio: 1800, precioReal: 1680, prediccion24: 15,
    cp: ['46012', '46026'],
    calles: ['Calle Mare de Déu dels Àngels', 'Avenida del Saler', 'Calle Pintor Benedito', 'Camino del Canal', 'Calle San Pedro'],
    resumen: 'Los pueblos del sur con acceso a la Albufera y las playas del sur de Valencia.',
    descripcion: 'Pobles del Sud agrupa varios núcleos al sur de Valencia con acceso a la Albufera y las playas del sur. La demanda de alquiler vacacional es creciente y los precios siguen siendo moderados. La mejora de infraestructuras y la proximidad a la naturaleza atraen a un perfil de comprador que busca calidad de vida.',
    estrategias: [
      { titulo: 'Alquiler turístico', descripcion: 'Acceso a playas y Albufera. Demanda vacacional creciente.' },
      { titulo: 'Compra conjunta', descripcion: 'Pisos grandes y baratos ideales para dos compradores que comparten inversión.' }
    ],
    perfil: 'Inversor orientado a alquiler turístico o comprador que busca naturaleza y playa'
  },
]

export const colores = {
  joya: "#4CAF50",
  intermedio: "#FF9800",
  caro: "#F44336"
}

export const etiquetas = {
  joya: "Joya oculta",
  intermedio: "Precio intermedio",
  caro: "Ya esta caro"
}