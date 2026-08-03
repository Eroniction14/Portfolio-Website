import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='w-full h-full flex items-center justify-center text-secondary text-[14px]'>
            Something didn't load correctly.
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;