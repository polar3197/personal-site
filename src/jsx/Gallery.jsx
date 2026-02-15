import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Page.css';
import '../css/Paintings.css';
import { galleryLayout } from './data/galleryLayout';

const paintingImages = import.meta.glob('../../assets/imgs/best-paintings/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const imagesByFilename = Object.fromEntries(
  Object.entries(paintingImages).map(([path, src]) => [path.split('/').pop(), src])
);

const DEFAULT_RATIO = 1;

const Gallery = () => {
  const paintings = useMemo(
    () => [
      ...galleryLayout
        .filter((item) => imagesByFilename[item.filename])
        .map((item, index) => ({
          id: `${item.filename}-${index}`,
          filename: item.filename,
          title: item.title ?? item.filename,
          image: imagesByFilename[item.filename],
        })),
      ...Object.entries(imagesByFilename)
        .filter(([filename]) => !galleryLayout.some((item) => item.filename === filename))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([filename, src], index) => ({
          id: `auto-${filename}-${index}`,
          filename,
          title: filename,
          image: src,
        })),
    ],
    []
  );

  const contentRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [ratios, setRatios] = useState({});

  useEffect(() => {
    if (!contentRef.current) {
      return undefined;
    }

    const updateWidth = () => {
      const width = contentRef.current?.clientWidth ?? 0;
      setContainerWidth(width);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(contentRef.current);
    window.addEventListener('resize', updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    Promise.all(
      paintings.map(
        (painting) =>
          new Promise((resolve) => {
            const probe = new Image();
            probe.onload = () => {
              const ratio = probe.naturalWidth / probe.naturalHeight || DEFAULT_RATIO;
              resolve([painting.id, ratio]);
            };
            probe.onerror = () => resolve([painting.id, DEFAULT_RATIO]);
            probe.src = painting.image;
          })
      )
    ).then((nextSpans) => {
      if (isMounted) {
        setRatios(Object.fromEntries(nextSpans));
      }
    });

    return () => {
      isMounted = false;
    };
  }, [paintings]);

  const rows = useMemo(() => {
    if (!containerWidth || !paintings.length) {
      return [];
    }

    const targetRowHeight = containerWidth < 900 ? 240 : 340;
    const gap = 2;
    const flushThreshold = 0.94;
    const nextRows = [];

    let rowItems = [];
    let rowRatioSum = 0;

    paintings.forEach((painting) => {
      const ratio = ratios[painting.id] ?? DEFAULT_RATIO;
      rowItems.push({ ...painting, ratio });
      rowRatioSum += ratio;

      const rowWidthAtTarget = rowRatioSum * targetRowHeight + gap * (rowItems.length - 1);
      if (rowWidthAtTarget >= containerWidth * flushThreshold) {
        const rowHeight = (containerWidth - gap * (rowItems.length - 1)) / rowRatioSum;
        nextRows.push(
          rowItems.map((item) => ({
            ...item,
            width: Math.max(1, rowHeight * item.ratio),
            height: Math.max(1, rowHeight),
          }))
        );
        rowItems = [];
        rowRatioSum = 0;
      }
    });

    if (rowItems.length) {
      const rowHeight = (containerWidth - gap * (rowItems.length - 1)) / rowRatioSum;
      nextRows.push(
        rowItems.map((item) => ({
          ...item,
          width: Math.max(1, rowHeight * item.ratio),
          height: Math.max(1, rowHeight),
        }))
      );
    }

    return nextRows;
  }, [containerWidth, paintings, ratios]);

  return (
    <div className="Gallery-fullscreen">
      <div className="Gallery-toolbar">
        <h1 className="Gallery-title">Gallery</h1>
        <Link to="/" className="Gallery-exit-button">
          Exit
        </Link>
      </div>
      <div className="Gallery-content" ref={contentRef}>
        <div className="Image-board">
          {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="Justified-row">
              {row.map((painting) => (
                <div
                  key={painting.id}
                  className="Painting"
                  style={{ width: `${painting.width}px`, height: `${painting.height}px` }}
                >
                  <img src={painting.image} alt={painting.title} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
