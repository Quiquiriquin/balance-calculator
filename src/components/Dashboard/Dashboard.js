import React, { useContext } from 'react';
import {GeneralContext} from "../../contexts/GeneralContext";
import {formatter} from "../../utils/GeneralUtils";
import MovementItem from "../Shared/MovementItem/MovementItem";
import DashboardAccount from "../Shared/DashboardAccount/DashboardAccount";
import LogItem from "../Shared/LogItem/LogItem";
import moment from "moment";
import SiteHeader from "../Shared/SiteHeader";

const Dashboard = () => {
  const { user } = useContext(GeneralContext);
  return (
    <div className={'dashboard-container'}>
      <SiteHeader title={`Buenas noches ${ user && (user.name || '') }`} right={{
        title: 'Saldo',
        data: formatter.format(user.currentBalance || 0),
      }} />

      <div className={'grid grid-flow-col grid-cols-2 grid-rows-3 gap-6 h-full grid-container'}>
        <div className={'movements row-span-3'}>
          <div className={'bold text-lg'}>
            Movimientos de la semana
          </div>
          <div className={'mt-4'}>
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
            <MovementItem amount={100} category={'Diversión'} concept={'Cine'} />
          </div>
        </div>
        <div className={'accounts'}>
          <div className={'bold text-lg'}>
            Cuentas
          </div>
          <div className={'mt-4 flex flex-wrap'}>
            <DashboardAccount name={'Efectivo'} balance={2000} styles={{
              borderRight: '1px solid #b3b3b3',
            }} />
            <DashboardAccount name={'Efectivo'} balance={2000} />
            <DashboardAccount name={'Efectivo'} balance={2000} styles={{
              borderRight: '1px solid #b3b3b3',
            }} />
            <DashboardAccount name={'Efectivo'} balance={2000} />
            <DashboardAccount name={'Efectivo'} balance={2000} styles={{
              borderRight: '1px solid #b3b3b3',
            }} />
            <DashboardAccount name={'Efectivo'} balance={2000} />
          </div>
        </div>
        <div className={'operations row-span-2'}>
          <div className={'bold text-lg'}>
            Operaciones
          </div>
          <div className={'mt-4'}>
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />
            <LogItem type={'Retiro'} platform={'Telegram'} date={moment().format('DD/MM/YY')} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
