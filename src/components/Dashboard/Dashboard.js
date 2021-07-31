import React, { useContext } from 'react';
import {GeneralContext} from "../../contexts/GeneralContext";
import {formatter} from "../../utils/GeneralUtils";

const Dashboard = () => {
  const { user } = useContext(GeneralContext);
  return (
    <div className={'dashboard-container'}>
      <div className={'header flex justify-between'}>
        <div className={'text-xl bold'}>
          Buenas noches { user && (user.name || '') }
        </div>
        <div className={'text-xl flex'}>
          <div className={'mr-2'}>
            Saldo
          </div>
          <div className={'bold'}>
            { user && formatter.format(user.currentBalance || 0) }
          </div>
        </div>
      </div>
      <div className={'grid grid-flow-col grid-cols-2 grid-rows-3 gap-6 h-full mt-6 grid-container'}>
        <div className={'movements row-span-3'}>
          <div className={'bold text-lg'}>
            Movimientos
          </div>
        </div>
        <div className={'accounts'}>
          <div className={'bold text-lg'}>
            Cuentas
          </div>
        </div>
        <div className={'operations row-span-2'}>
          <div className={'bold text-lg'}>
            Operaciones
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
