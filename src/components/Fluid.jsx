import React from 'react';

export default class Fluid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: 'transparent',
        opacity: 0.7,
        pointerEvents: 'none'
      }
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/fluid-init.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const script = document.querySelector('script[src="/fluid-init.js"]');
    if (script) {
      document.body.removeChild(script);
    }
  }

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