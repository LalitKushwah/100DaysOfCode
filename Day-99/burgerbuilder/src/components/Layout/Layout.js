import React from 'react';
import  classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
};

export default Layout;