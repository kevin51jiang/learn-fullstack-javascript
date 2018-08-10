import React from 'react';

const ContestPreview = ( contest ) => (
    <div className="ContestPreview">

        <div className="category-name">
            {contest.categoryName}
        </div>
        <div className="contestName">
            {contest.contestName}
        </div>
    </div>
)

export default ContestPreview;