import React from 'react';
export default class Error404 extends React.Component {
    render() {
        return (
            <div className="error-404">
                <div className="error-404__content">
                    <h1 className="error-404__title">404</h1>
                    <h2 className="error-404__subtitle">Page not found</h2>
                    <p className="error-404__text">
                        The page you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }
}