import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false // Initially no error
    };
  }

  // This method is called when an error occurs in a child component
  static getDerivedStateFromError(error) {
    // Set the state to indicate that an error occurred
    return {
      hasError: true
    };
  }

  // This method is called after the error is thrown
  componentDidCatch(error, info) {
    // You can log the error to an external logging service here
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error occurred
      return <div>Something went wrong. Contact Admin.</div>;
    }
    // Render children if no error occurred
    return this.props.children;
  }
}
