import {
  Brush,
  Download,
  Eraser,
  PaintBucket,
  Printer,
  RotateCcw,
  Sparkles,
  Undo2,
} from "lucide-react";
import { PointerEvent, useMemo, useRef, useState } from "react";
import { Artwork, artworks, categories } from "./artworks";

type Tool = "fill" | "brush" | "eraser";
type PaintMap = Record<string, string>;
type Stroke = {
  color: string;
  points: string;
};

const palette = [
  "#ff595e",
  "#ff924c",
  "#ffca3a",
  "#8ac926",
  "#52b788",
  "#1982c4",
  "#6a4c93",
  "#f15bb5",
  "#a6e9ff",
  "#f7ede2",
  "#ffffff",
  "#2f3437",
];

const defaultPaints = (artwork: Artwork): PaintMap =>
  Object.fromEntries(artwork.regions.map((region) => [region.id, "#ffffff"]));

function App() {
  const [selectedArtworkId, setSelectedArtworkId] = useState(artworks[0].id);
  const [category, setCategory] = useState<string>("Todos");
  const [tool, setTool] = useState<Tool>("fill");
  const [color, setColor] = useState(palette[0]);
  const [paintsByArtwork, setPaintsByArtwork] = useState<Record<string, PaintMap>>(
    () => Object.fromEntries(artworks.map((art) => [art.id, defaultPaints(art)])),
  );
  const [historyByArtwork, setHistoryByArtwork] = useState<Record<string, PaintMap[]>>(
    () => Object.fromEntries(artworks.map((art) => [art.id, []])),
  );
  const [strokes, setStrokes] = useState<Record<string, Stroke[]>>(
    () => Object.fromEntries(artworks.map((art) => [art.id, []])),
  );
  const [draftStroke, setDraftStroke] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const selectedArtwork = artworks.find((art) => art.id === selectedArtworkId) ?? artworks[0];
  const paints = paintsByArtwork[selectedArtwork.id] ?? defaultPaints(selectedArtwork);
  const currentStrokes = strokes[selectedArtwork.id] ?? [];

  const filteredArtworks = useMemo(() => {
    if (category === "Todos") {
      return artworks;
    }

    return artworks.filter((art) => art.category === category);
  }, [category]);

  const pushHistory = () => {
    setHistoryByArtwork((current) => ({
      ...current,
      [selectedArtwork.id]: [...(current[selectedArtwork.id] ?? []), paints],
    }));
  };

  const paintRegion = (regionId: string) => {
    if (tool !== "fill") {
      return;
    }

    pushHistory();
    setPaintsByArtwork((current) => ({
      ...current,
      [selectedArtwork.id]: {
        ...paints,
        [regionId]: color,
      },
    }));
  };

  const undo = () => {
    const history = historyByArtwork[selectedArtwork.id] ?? [];

    if (draftStroke || currentStrokes.length) {
      setDraftStroke("");
      setStrokes((current) => ({
        ...current,
        [selectedArtwork.id]: currentStrokes.slice(0, -1),
      }));
      return;
    }

    if (!history.length) {
      return;
    }

    const previous = history[history.length - 1];
    setPaintsByArtwork((current) => ({
      ...current,
      [selectedArtwork.id]: previous,
    }));
    setHistoryByArtwork((current) => ({
      ...current,
      [selectedArtwork.id]: history.slice(0, -1),
    }));
  };

  const restart = () => {
    pushHistory();
    setPaintsByArtwork((current) => ({
      ...current,
      [selectedArtwork.id]: defaultPaints(selectedArtwork),
    }));
    setStrokes((current) => ({
      ...current,
      [selectedArtwork.id]: [],
    }));
    setDraftStroke("");
  };

  const getPoint = (event: PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) {
      return null;
    }

    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const transformed = point.matrixTransform(svg.getScreenCTM()?.inverse());
    return `${transformed.x.toFixed(1)},${transformed.y.toFixed(1)}`;
  };

  const beginDraw = (event: PointerEvent<SVGSVGElement>) => {
    if (tool === "fill") {
      return;
    }

    const point = getPoint(event);
    if (!point) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDrawing(true);
    setDraftStroke(point);
  };

  const continueDraw = (event: PointerEvent<SVGSVGElement>) => {
    if (!isDrawing || tool === "fill") {
      return;
    }

    const point = getPoint(event);
    if (!point) {
      return;
    }

    setDraftStroke((current) => `${current} ${point}`);
  };

  const finishDraw = () => {
    if (!isDrawing || !draftStroke) {
      setIsDrawing(false);
      return;
    }

    setStrokes((current) => ({
      ...current,
      [selectedArtwork.id]: [
        ...currentStrokes,
        { color: tool === "eraser" ? "#ffffff" : color, points: draftStroke },
      ],
    }));
    setDraftStroke("");
    setIsDrawing(false);
  };

  const download = () => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }

    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const svgData = new XMLSerializer().serializeToString(clone);
    const image = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 1200;
      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(url);
        return;
      }

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.download = `${selectedArtwork.id}-colorido.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    image.src = url;
  };

  const print = () => {
    window.print();
  };

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <Sparkles size={27} />
          </div>
          <div>
            <p>Colorir Kids</p>
            <span>Pintura online para criancas</span>
          </div>
        </div>

        <div className="category-tabs" aria-label="Categorias">
          {["Todos", ...categories].map((item) => (
            <button
              className={item === category ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <section className="workspace" aria-label="Area de colorir">
        <aside className="gallery" aria-label="Desenhos">
          {filteredArtworks.map((artwork) => (
            <button
              className={artwork.id === selectedArtwork.id ? "art-card selected" : "art-card"}
              key={artwork.id}
              onClick={() => setSelectedArtworkId(artwork.id)}
              type="button"
            >
              <MiniArtwork artwork={artwork} />
              <span>{artwork.title}</span>
              <small>{artwork.category} · {artwork.age}</small>
            </button>
          ))}
        </aside>

        <section className="studio">
          <div className="toolstrip" aria-label="Ferramentas">
            <button
              aria-label="Balde"
              className={tool === "fill" ? "icon-button active" : "icon-button"}
              onClick={() => setTool("fill")}
              title="Balde"
              type="button"
            >
              <PaintBucket size={22} />
            </button>
            <button
              aria-label="Pincel"
              className={tool === "brush" ? "icon-button active" : "icon-button"}
              onClick={() => setTool("brush")}
              title="Pincel"
              type="button"
            >
              <Brush size={22} />
            </button>
            <button
              aria-label="Borracha"
              className={tool === "eraser" ? "icon-button active" : "icon-button"}
              onClick={() => setTool("eraser")}
              title="Borracha"
              type="button"
            >
              <Eraser size={22} />
            </button>
            <span className="divider" />
            <button aria-label="Voltar" className="icon-button" onClick={undo} title="Voltar" type="button">
              <Undo2 size={22} />
            </button>
            <button aria-label="Recomecar" className="icon-button" onClick={restart} title="Recomecar" type="button">
              <RotateCcw size={22} />
            </button>
            <button aria-label="Baixar PNG" className="icon-button" onClick={download} title="Baixar PNG" type="button">
              <Download size={22} />
            </button>
            <button aria-label="Imprimir" className="icon-button" onClick={print} title="Imprimir" type="button">
              <Printer size={22} />
            </button>
          </div>

          <div className="canvas-shell">
            <svg
              className={tool === "fill" ? "coloring-page fill-mode" : "coloring-page draw-mode"}
              ref={svgRef}
              role="img"
              aria-label={selectedArtwork.title}
              viewBox={selectedArtwork.viewBox}
              onPointerDown={beginDraw}
              onPointerMove={continueDraw}
              onPointerUp={finishDraw}
              onPointerCancel={finishDraw}
              onPointerLeave={finishDraw}
            >
              <rect x="0" y="0" width="320" height="320" fill="#ffffff" rx="18" />
              {selectedArtwork.regions.map((region) => (
                <path
                  d={region.path}
                  fill={paints[region.id] ?? "#ffffff"}
                  key={region.id}
                  onPointerDown={() => paintRegion(region.id)}
                  tabIndex={0}
                >
                  <title>{region.label}</title>
                </path>
              ))}
              {currentStrokes.map((stroke, index) => (
                <polyline
                  fill="none"
                  key={`${selectedArtwork.id}-${index}`}
                  points={stroke.points}
                  stroke={stroke.color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="13"
                />
              ))}
              {draftStroke ? (
                <polyline
                  fill="none"
                  points={draftStroke}
                  stroke={tool === "eraser" ? "#ffffff" : color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="13"
                />
              ) : null}
              <g className="linework">
                {selectedArtwork.regions.map((region) => (
                  <path d={region.path} fill="none" key={`line-${region.id}`} />
                ))}
              </g>
              {selectedArtwork.details?.length ? (
                <g className="details">
                  {selectedArtwork.details.map((detail) => (
                    <path
                      d={detail.path}
                      fill="none"
                      key={`detail-${detail.id}`}
                      style={{ strokeWidth: detail.width }}
                    />
                  ))}
                </g>
              ) : null}
            </svg>
          </div>
        </section>

        <aside className="palette-panel" aria-label="Cores">
          <label htmlFor="custom-color">Cor</label>
          <input
            id="custom-color"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <div className="palette">
            {palette.map((paint) => (
              <button
                aria-label={`Selecionar ${paint}`}
                className={paint === color ? "swatch selected" : "swatch"}
                key={paint}
                onClick={() => setColor(paint)}
                style={{ backgroundColor: paint }}
                title={paint}
                type="button"
              />
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

function MiniArtwork({ artwork }: { artwork: Artwork }) {
  return (
    <svg viewBox={artwork.viewBox} aria-hidden="true">
      <rect x="0" y="0" width="320" height="320" rx="22" fill="#ffffff" />
      {artwork.regions.slice(0, 7).map((region) => (
        <path d={region.path} fill="#ffffff" key={region.id} />
      ))}
      <g className="linework">
        {artwork.regions.slice(0, 7).map((region) => (
          <path d={region.path} fill="none" key={region.id} />
        ))}
      </g>
      {artwork.details?.length ? (
        <g className="details">
          {artwork.details.slice(0, 5).map((detail) => (
            <path
              d={detail.path}
              fill="none"
              key={detail.id}
              style={{ strokeWidth: detail.width }}
            />
          ))}
        </g>
      ) : null}
    </svg>
  );
}

export default App;
