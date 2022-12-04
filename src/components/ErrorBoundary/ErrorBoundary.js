import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        error: null, 
        errorInfo: null 
      };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }

    render() {
        if (this.state.error) {
            return (
              <div className="pa3 ma3 center bg-washed-green w-50-ns br4">
                <h2 className="tc">Ooops, something went wrong!</h2>
                <div className="tc">
                  <details className="tl" style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </details>
                  <Link to="/" className='text-link'>
                    <button className="ma2">
                      Return to home page
                    </button>
                  </Link>
                </div>
                
              </div>
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary;