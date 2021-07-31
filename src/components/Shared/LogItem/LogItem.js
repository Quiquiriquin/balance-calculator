import React from 'react';
import './LogItem.scss';

const LogItem = ({ date, platform, type }) => {
  return (
    <div className={'log-item flex justify-between relative items-center'}>
      <div>
        { date }
      </div>
      <div className={''}>
        <div className={'text-xs'}>
          Tipo
        </div>
        <div className={''}>
          { type }
        </div>
      </div>
      <div className={''}>
        <div className={'text-xs'}>
          Plataforma
        </div>
        <div className={''}>
          { platform }
        </div>
      </div>
    </div>
  );
};

export default LogItem;
