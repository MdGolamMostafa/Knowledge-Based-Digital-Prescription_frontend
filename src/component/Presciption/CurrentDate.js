import React from 'react';

const CurrentDate = () => {

    const showDate = new Date();
    const displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1) +'/'+showDate.getFullYear();
    const display = showDate.toDateString();
    return (
        <div>
            {display} = {displayTodaysDate}
        </div>
    );
};

export default CurrentDate;