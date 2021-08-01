import React, { useEffect, useState } from 'react';
import './AccountItem.scss';
import {formatter} from "../../../utils/GeneralUtils";

const AccountItem = ({ name, balance, last4, color }) => {
  const [state, setState] = useState({
    name: '',
    balance: '',
    last4: '',
    color: '#bfe1f1',
  })
  useEffect(() => {
    if (name) {
      switch (name) {
        case 'cash':
          state.name = 'Efectivo';
          setState(() => {
            return {
              ...state,
            };
          })
          break;
        case 'credit':
          state.name = 'T. Crédito';
          setState(() => {
            return {
              ...state,
            };
          });
          break;
        case 'debit':
          state.name = 'T. Débito';
          setState(() => {
            return {
              ...state,
            };
          });
          break;
        default:
          break;
      }
    }
    if (balance) {
      state.balance = formatter.format(balance || 0);
      setState(() => {
        return {
          ...state,
        };
      });
    }
    if (last4) {
      state.last4 = last4
      setState(() => {
        return {
          ...state,
        };
      });
    }
    if (color) {
      state.color = color
      setState(() => {
        return {
          ...state,
        };
      });
    }
    return () => {};
  }, []);

  return (
    <div className={'account-item'} style={{
      background: state.color
    }}>
      <div className={'flex justify-between'}>
        <div className={'header-account'}>
          <div className={'text-xs'} >
            Nombre
          </div>
          <div className={'text-2xl bold'}>
            { state.name }
          </div>
        </div>
        <div className={'header-account'}>
          <div className={'text-xs'} >
            Saldo
          </div>
          <div className={'text-2xl bold'}>
            { formatter.format(100) }
          </div>
        </div>
      </div>
      <div className={'info flex mt-4'}>
        <div className={'mr-2'}>
          {
            name === 'cash' ? <box-icon name={'wallet'} type={'solid'} /> : <box-icon name={'credit-card-alt'} type={'solid'} />
          }
        </div>
        <div className={''}>
          {
            state.last4 ? state.last4 : '-'
          }
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
