import React, { Component } from 'react';


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
                  <button className="ma2" onClick={()=> window.location.reload()}>
                    Return to home page
                  </button>
                </div>
                
              </div>
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary;