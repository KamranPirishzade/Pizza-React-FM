import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // This method is automatically called by React when a descendant component throws an error
  // during rendering, in lifecycle methods, or in constructors.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.error("ErrorBoundary catches error ", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Ops...</h2>
          <p>
            There was an error with this listing. <Link to="/">Click here</Link>
            to back to the home page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
