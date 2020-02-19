import * as React from 'react';

import './PageLayout.module.scss';

interface Props {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}

const PageLayout = (props: Props) => {
    return (
        <div className="page-layout">
            <div className="page-layout__header">{props.header}</div>
            <div className="page-layout__body">{props.body}</div>
            <div className="page-layout__footer">{props.footer}</div>
        </div>
    );
};

export default PageLayout;
