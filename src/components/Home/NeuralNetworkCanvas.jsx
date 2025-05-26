import React, { useEffect, useRef, useState } from "react";

const layers = [3, 5, 4, 2];

const getColor = (activation, layerIndex) => {
  const hue = (layerIndex * 70 + activation * 100) % 360;
  return `hsl(${hue}, 100%, ${40 + activation * 30}%)`;
};

const layerLabels = ["Input Layer", "Hidden Layer 1", "Hidden Layer 2", "Output Layer"];

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef();
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });
  const [hoveredNeuron, setHoveredNeuron] = useState(null);
  const hoveredNeuronRef = useRef(null); // NEW

  // Sync hoveredNeuron to ref
  useEffect(() => {
    hoveredNeuronRef.current = hoveredNeuron;
  }, [hoveredNeuron]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const radius = 23;

    const layerSpacing = width / (layers.length + 1);

    const neuronPositions = [];
    layers.forEach((count, i) => {
      const x = (i + 1) * layerSpacing;
      const ySpacing = height / (count + 1);
      const layerY = [];
      for (let j = 0; j < count; j++) {
        const y = (j + 1) * ySpacing;
        layerY.push({ x, y, activation: Math.random(), phase: Math.random() * Math.PI * 2 });
      }
      neuronPositions.push(layerY);
    });

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < neuronPositions.length - 1; i++) {
        const fromLayer = neuronPositions[i];
        const toLayer = neuronPositions[i + 1];
        fromLayer.forEach((fromNeuron, fromIndex) => {
          toLayer.forEach((toNeuron, toIndex) => {
            ctx.beginPath();
            ctx.moveTo(fromNeuron.x, fromNeuron.y);
            ctx.lineTo(toNeuron.x, toNeuron.y);

            const isHoveredConnection =
              hoveredNeuronRef.current &&
              ((hoveredNeuronRef.current.layer === i && hoveredNeuronRef.current.index === fromIndex) ||
               (hoveredNeuronRef.current.layer === i + 1 && hoveredNeuronRef.current.index === toIndex));

            ctx.strokeStyle = isHoveredConnection
              ? "rgba(255, 255, 255, 0.9)" 
              : "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = isHoveredConnection ? 3 : 1;
            ctx.shadowColor = isHoveredConnection ? "#fff" : "transparent";
            ctx.shadowBlur = isHoveredConnection ? 10 : 0;

            ctx.stroke();
          });
        });
      }

      // Draw neurons
      neuronPositions.forEach((layer, layerIndex) => {
        layer.forEach((neuron, neuronIndex) => {
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, radius, 0, 2 * Math.PI);
          const pulse = 0.5 + 0.5 * Math.sin(time / 600 + neuron.phase);
          neuron.activation = pulse;

          const isHovered =
            hoveredNeuronRef.current &&
            hoveredNeuronRef.current.layer === layerIndex &&
            hoveredNeuronRef.current.index === neuronIndex;

          ctx.fillStyle = isHovered ? "#fff" : getColor(pulse, layerIndex);
          ctx.fill();
          ctx.strokeStyle = "#222";
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Draw neuron label: LxNy
          ctx.fillStyle = "#000";
          ctx.font = "15px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`L${layerIndex + 1}N${neuronIndex + 1}`, neuron.x, neuron.y);
        });

        // Draw layer labels
        ctx.font = "25px Arial";
        ctx.fillStyle = "#aaa";
        ctx.textAlign = "center";
        ctx.fillText(layerLabels[layerIndex], (layer[0]?.x || 0), 20);
      });
    }

    function animate(time) {
      draw(time);
      requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = false;
      for (let i = 0; i < neuronPositions.length; i++) {
        for (let j = 0; j < neuronPositions[i].length; j++) {
          const neuron = neuronPositions[i][j];
          const dx = neuron.x - mouseX;
          const dy = neuron.y - mouseY;
          if (dx * dx + dy * dy < radius * radius) {
            setHoveredNeuron({ layer: i, index: j });
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) {
        setTooltip({ visible: false, text: "", x: 0, y: 0 });
        setHoveredNeuron(null);
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={1000}
        height={500}
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "block",
        }}
      />
      {tooltip.visible && (
        <div
          ref={tooltipRef}
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            background: "#111",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};

export default NeuralNetworkCanvas;
