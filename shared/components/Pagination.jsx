import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';

import styles from './Pagination.scss';

export default props => {
    const {
        currentPage,
        pagesTotal,
        onPageChange,
    } = props;

    return (
        <div
            className={styles.root}
        >
            {
                currentPage > 1 && pagesTotal >= currentPage &&
                <FlatButton
                    icon={<NavigateBefore />}
                    onTouchTap={() => onPageChange(currentPage - 1)}
                />
            }
            {
                currentPage < pagesTotal &&
                <FlatButton
                    icon={<NavigateNext />}
                    onTouchTap={() => onPageChange(currentPage + 1)}
                />
            }
        </div>
    );
};
