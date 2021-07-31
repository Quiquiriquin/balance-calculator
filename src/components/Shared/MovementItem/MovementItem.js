import React from 'react';
import moment from 'moment';
import './MovementItem.scss';
import {formatter} from "../../../utils/GeneralUtils";

const MovementItem = ({ category, amount, concept }) => {
  return (
    <div className={'movement-item flex justify-between'}>
      <div>
        <div className={'bold text-lg'}>
          { concept }
        </div>
        <div className={'text-xs mt-1'}>
          { category }
        </div>
      </div>
      <div className={'text-right'}>
        <div className={'bold text-lg'}>
          { formatter.format(amount || 0 ) }
        </div>
        <div className={'text-xs mt-1'}>
          { moment().format('DD/MM/YYYY') }
        </div>
      </div>
    </div>
  );
};

export default MovementItem;
