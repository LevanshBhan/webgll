import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadingSteps = [
    "Initializing system...",
    "Loading portfolio components...",
    "Setting up animations...",
    "Portfolio ready!"
  ];

  useEffect(() => {
    const loadSteps = async () => {
      for (let i = 0; i < loadingSteps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setCurrentStep(i + 1);
      }
      
      // Wait a bit more before completing
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      onComplete();
    };

    loadSteps();
  }, [onComplete]);

  // Skip loading on any key press
  useEffect(() => {
    const handleKeyPress = () => {
      if (isLoading) {
        setIsLoading(false);
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLoading, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono" style={{ minHeight: '100vh' }}>
      <div className="max-w-2xl w-full p-8 mx-auto">
        {/* Terminal Header */}
        <div className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-t-lg px-4 py-2 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-cream text-sm ml-3">Terminal - Portfolio</span>
          </div>
          <div className="text-cream/60 text-xs">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-b-lg p-6 h-64 overflow-hidden">
          <div className="space-y-2">
            {/* Welcome Message */}
            <div className="text-cream mb-4">
              <div className="text-lg font-bold">Levansh Bhan Portfolio</div>
              <div className="text-sm text-cream/60">System Boot Sequence</div>
            </div>

            {/* Loading Steps */}
            <div className="space-y-2">
              {loadingSteps.slice(0, currentStep).map((step, index) => (
                <div key={index} className="text-white">
                  <span className="text-cream">&gt;</span> {step}
                </div>
              ))}
              
              {/* Current loading indicator */}
              {isLoading && currentStep < loadingSteps.length && (
                <div className="text-white">
                  <span className="text-cream">&gt;</span> {loadingSteps[currentStep]}
                  <span className="text-cream animate-pulse">...</span>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-cream/60 text-sm">Progress:</span>
                <span className="text-cream text-sm font-bold">
                  {Math.round((currentStep / loadingSteps.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2 border border-cream/20">
                <div 
                  className="bg-gradient-to-r from-cream to-white h-full rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Skip Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setIsLoading(false);
                  onComplete();
                }}
                className="px-4 py-2 text-xs text-cream/60 border border-cream/30 rounded hover:border-cream/60 hover:text-cream/80 transition-all duration-200"
              >
                Press any key to skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
