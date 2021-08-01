import React from 'react';
import SiteHeader from "../Shared/SiteHeader";
import AccountItem from "../Shared/AccountItem/AccountItem";
import {Button} from "../Shared/Buttons/Button";
import {ActionButton} from "../Shared/Buttons/ActionButton";
import {ConfirmButton} from "../Shared/Buttons/ConfirmButton";
import {CancelButton} from "../Shared/Buttons/CancelButton";

const Accounts = () => {
  return (
    <div className={'accounts'}>
      <SiteHeader title={'Cuentas'} />
      <div className={'mt-6'}>
        <div className={'mb-4'}>
          <ActionButton>
            <box-icon height={'1rem'} name={'plus-circle'} type={'solid'} style={{marginRight: '0.25rem', fill: '#fff'}}/> Agregar cuenta
          </ActionButton>
        </div>
        <div className={'flex flex-warp'}>
          <AccountItem name={'cash'} balance={1000} color={'#c4e9af'} />
          <AccountItem name={'debit'} balance={1000} last4={4847} />
          <AccountItem name={'credit'} balance={1000} last4={2933}/>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
