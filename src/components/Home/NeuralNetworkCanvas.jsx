import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const tooltipRef = useRef(null);
  const [draggingNode, setDraggingNode] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 30 });
  const [selectedNeuron, setSelectedNeuron] = useState(null);
  const [signalProgress, setSignalProgress] = useState(0);

  const layers = useMemo(() => [3, 5, 4, 2], []);
  const neuronRadius = 20;
  const spacingX = 155;
  const spacingY = 65;
  const neuronPositionsRef = useRef([]);
  const neuronColorsRef = useRef([]);

  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

  const generateNeuronPositions = useCallback((canvasWidth, canvasHeight) => {
    if (neuronPositionsRef.current.length > 0) return;
    const newPositions = [];
    const totalWidth = (layers.length - 1) * spacingX;

    layers.forEach((count, layerIndex) => {
      const layer = [];
      const layerHeight = (count - 1) * spacingY;
      const x = canvasWidth / 2 - totalWidth / 2 + layerIndex * spacingX;
      for (let i = 0; i < count; i++) {
        const y = canvasHeight / 2 - layerHeight / 2 + i * spacingY;
        layer.push({ x, y, label: `L${layerIndex + 1}N${i + 1}` });
      }
      newPositions.push(layer);
    });

    neuronPositionsRef.current = newPositions;
    neuronColorsRef.current = newPositions.map(layer =>
      layer.map(() => randomColor())
    );
  }, [layers]);

  const drawStars = (ctx, count = 50) => {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;
      const radius = Math.random();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  };

  const draw = useCallback((ctx) => {
    const neuronPositions = neuronPositionsRef.current;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawStars(ctx);

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.scale(scale, scale);

    // Draw connections with animation
    neuronPositions.forEach((layer, i) => {
      if (i < neuronPositions.length - 1) {
        layer.forEach((fromNeuron) => {
          neuronPositions[i + 1].forEach((toNeuron) => {
            const dx = toNeuron.x - fromNeuron.x;
            const dy = toNeuron.y - fromNeuron.y;
            const progressX = fromNeuron.x + dx * signalProgress;
            const progressY = fromNeuron.y + dy * signalProgress;

            ctx.beginPath();
            ctx.moveTo(fromNeuron.x, fromNeuron.y);
            ctx.lineTo(toNeuron.x, toNeuron.y);
            ctx.strokeStyle = (selectedNeuron === fromNeuron || selectedNeuron === toNeuron)
              ? "orange" : "#555";
            ctx.lineWidth = (selectedNeuron === fromNeuron || selectedNeuron === toNeuron) ? 3 : 1;
            ctx.stroke();

            // Draw moving signal dot
            ctx.beginPath();
            ctx.arc(progressX, progressY, 3, 0, 2 * Math.PI);
            ctx.fillStyle = "lime";
            ctx.fill();
          });
        });
      }
    });

    // Draw neurons
    neuronPositions.forEach((layer, i) => {
      layer.forEach((neuron, j) => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuronRadius, 0, 2 * Math.PI);
        ctx.fillStyle =
          draggingNode === neuron || selectedNeuron === neuron
            ? "orange"
            : neuronColorsRef.current[i][j];
        ctx.fill();
        ctx.strokeStyle = "rgb(74 1 159 / 45%)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.fillStyle = "black";
        ctx.font = "13px Arial";
        ctx.textAlign = "center";
        ctx.fillText(neuron.label, neuron.x, neuron.y + 5);
      });
    });

    // Layer titles
    const layerNames = ["Input Layer", "Hidden Layer 1", "Hidden Layer 2", "Output Layer"];
    neuronPositions.forEach((layer, i) => {
      if (layer.length > 0) {
        const x = layer[0].x;
        const y = layer[0].y - 40;
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.fillText(layerNames[i] || `Layer ${i + 1}`, x, y);
      }
    });

    ctx.restore();
  }, [position, scale, selectedNeuron, draggingNode, signalProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    generateNeuronPositions(canvas.width, canvas.height);
    draw(ctx);
  }, [draw, generateNeuronPositions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }, [scale, position, selectedNeuron, draggingNode, draw]);

  useEffect(() => {
    const interval = setInterval(() => {
      neuronColorsRef.current = neuronColorsRef.current.map(layer =>
        layer.map(() => randomColor())
      );
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      draw(ctx);
    }, 20);

    return () => clearInterval(interval);
  }, [draw]);

  useEffect(() => {
    const anim = setInterval(() => {
      setSignalProgress(prev => (prev >= 1 ? 0 : prev + 0.02));
    }, 25);
    return () => clearInterval(anim);
  }, []);

  const getNeuronAtMouse = (x, y) => {
    for (const layer of neuronPositionsRef.current) {
      for (const neuron of layer) {
        const dx = x - neuron.x;
        const dy = y - neuron.y;
        if (Math.sqrt(dx * dx + dy * dy) < neuronRadius) return neuron;
      }
    }
    return null;
  };

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - position.x) / scale;
    const y = (e.clientY - rect.top - position.y) / scale;
    const clickedNeuron = getNeuronAtMouse(x, y);
    if (clickedNeuron) {
      setDraggingNode(clickedNeuron);
      setSelectedNeuron(clickedNeuron);
    } else {
      setDraggingNode(null);
      setSelectedNeuron(null);
      setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - position.x) / scale;
    const y = (e.clientY - rect.top - position.y) / scale;

    const hover = getNeuronAtMouse(x, y);
    if (tooltipRef.current) {
      tooltipRef.current.style.display = hover ? "block" : "none";
      if (hover) {
        tooltipRef.current.style.left = `${e.clientX + 10}px`;
        tooltipRef.current.style.top = `${e.clientY + 10}px`;
        tooltipRef.current.textContent = hover.label;
      }
    }

    if (draggingNode) {
      draggingNode.x = x;
      draggingNode.y = y;
    } else if (e.buttons === 1) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
    draw(ctx);
  };

  const handleMouseUp = () => setDraggingNode(null);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          border: "1px solid rgb(74 1 159 / 45%)",
          borderRadius: "30px",
          backgroundColor: "#000",
          cursor: "pointer",
        }}
      />
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          backgroundColor: "#333",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "12px",
          pointerEvents: "none",
          display: "none",
        }}
      />
    </div>
  );
};

export default NeuralNetworkCanvas;
