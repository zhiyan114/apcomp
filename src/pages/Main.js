import React from 'react';
import Helmet from 'react-helmet';
import HexBody from './Global_Resources/BodyHex.png';
export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Main - JS & PY</title>
                    <style>
                        {`
                            body {
                                background-color: #020f23;
                                background-image: url(${HexBody});
                            }
                            
                        `}
                    </style>
                </Helmet>
            </React.Fragment>
        )
    }
}