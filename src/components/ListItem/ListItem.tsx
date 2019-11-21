import React from 'react';
import { Button } from '../Button';
import styles from './ListItem.module.css';

interface ListItemProps {
    id: string;
    state: string;
    reportType: string;
    message: string;
    onBlockClick: Function;
    onResolveClick: Function;
}

enum Buttons {
    BLOCK = 'Block',
    RESOLVE = 'Resolve',
}

enum Labels {
    ID = 'Id:',
    TYPE = 'Type:',
    STATE = 'State:',
    MESSAGE = 'Message:',
    DETAILS = 'Details',
}

enum Url {
    URL = 'http://localhost:3000',
}

export const ListItem = ({
    id,
    state,
    reportType,
    message,
    onBlockClick,
    onResolveClick,
}: ListItemProps): JSX.Element => {
    const { gridContainer, gridItem, gridItemRight } = styles;
    return (
        <div>
            <div className={gridContainer}>
                <div className={gridItem}>{`${Labels.ID} ${id}`}</div>
                <div className={gridItem}>{`${Labels.TYPE} ${reportType}`}</div>
                <div className={`${gridItem} ${gridItemRight}`}>
                    <Button
                        id={id}
                        name={Buttons.BLOCK}
                        clickHandler={onBlockClick}
                    />
                </div>
                <div className={gridItem}>{`${Labels.STATE} ${state}`}</div>
                <div className={gridItem}>{`${Labels.MESSAGE} ${message}`}</div>
                <div className={`${gridItem} ${gridItemRight}`}>
                    <Button
                        id={id}
                        name={Buttons.RESOLVE}
                        clickHandler={onResolveClick}
                    />
                </div>
                <div className={gridItem}>
                    <a href={Url.URL}>{Labels.DETAILS}</a>
                </div>
                <div className={gridItem}></div>
                <div className={gridItem}></div>
            </div>
        </div>
    );
};
