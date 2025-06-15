import React from 'react';

export default class Fluid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'auto'
      }
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/fluid-init.js";
    script.async = true;
    script.onload = () => {
      // Attach mousemove event to this canvas only
      const canvas = this.canvasRef.current;
      if (canvas) {
        canvas.addEventListener('mousemove', this.handleMouseMove);
      }
    };
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      canvas.removeEventListener('mousemove', this.handleMouseMove);
    }
    const script = document.querySelector('script[src="/fluid-init.js"]');
    if (script) {
      document.body.removeChild(script);
    }
  }

  handleMouseMove = (e) => {
    if (window.splatPointer) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const pointer = {
        id: 0,
        texcoordX: x / rect.width,
        texcoordY: 1.0 - y / rect.height,
        prevTexcoordX: x / rect.width,
        prevTexcoordY: 1.0 - y / rect.height,
        deltaX: e.movementX,
        deltaY: e.movementY,
        down: true,
        moved: true,
        color: [59, 130, 246]
      };
      window.splatPointer(pointer);
    }
  };

  render() {
    return (
      <canvas 
        ref={this.canvasRef}
        className="fluid-canvas" 
        style={this.state.style}
      />
    );
  }
} 