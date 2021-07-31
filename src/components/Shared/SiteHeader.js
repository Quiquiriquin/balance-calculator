import React from 'react';

const SiteHeader = ({ title, right }) => {
  return (
    <div className={'header flex justify-between'}>
      <div className={'text-xl bold'}>
        { title }
      </div>
      {
        right &&
          <div className={'text-xl flex'}>
            <div className={'mr-2'}>
              { right.title }
            </div>
            <div className={'bold'}>
              { right.data }
            </div>
          </div>
      }
    </div>
  );
};

export default SiteHeader;
