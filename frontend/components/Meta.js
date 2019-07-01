import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

const Meta = props => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale-1"/>
            <meta charSet="utf-8" />
            <link rel="shorcut icon" href="/static/favicon.png" />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
            <title>Sick Fits</title> 
        </Head>
    );
};

Meta.propTypes = {
    
};

export default Meta;