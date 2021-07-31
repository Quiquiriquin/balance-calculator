import React from 'react';
import {formatter} from "../../../utils/GeneralUtils";
import './DashboardAccount.scss';

const DashboardAccount = ({ name, balance, styles }) => {
  return (
    <div style={styles} className={'dashboard-account'}>
      <div className={'flex justify-between'}>
        <div>
          { name }
        </div>
        <div className={''}>
          { formatter.format(balance || 0) }
        </div>
      </div>
      <div className={'flex text-xs justify-between'}>
        <div>
          Último movimiento:
        </div>
        <div className={'flex'}>
          <div>
            { formatter.format(100) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAccount;
