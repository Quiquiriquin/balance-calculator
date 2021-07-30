import React, { useEffect } from 'react';
import './Navbar.scss';
import 'boxicons';

const Navbar = () => {
  const openNavbar = () => {
    const menu = document.querySelector('#menu');
    const sidebar = document.querySelector('.sidebar');
    menu.onclick = () => {
      sidebar.classList.toggle('active');
    }
  }

  return (
    <div className={'sidebar'}>
      <div className={'logo_content'}>
        <div className={'logo'}>
          <box-icon name={'rocket'} />
          <div className={'logo_name'}>
            Balance
          </div>
        </div>
        <box-icon onClick={openNavbar} id={'menu'} name={'menu'} />
        <ul className={'nav-list'}>
          <li>
            <a href={'#'}>
              <box-icon type={'solid'} name={'grid-alt'} />
              <span className={'links_name'}>Dashboard</span>
            </a>
            <span className={'tooltip'}>Dashboard</span>
          </li>
          <li>
            <a href={'#'}>
              <box-icon type={'solid'} name={'credit-card-alt'} />
              <span className={'links_name'}>Tarjetas</span>
            </a>
            <span className={'tooltip'}>Tarjetas</span>
          </li>
          <li>
            <a href={'#'}>
              <box-icon type={'solid'} name={'spreadsheet'} />
              <span className={'links_name'}>Movimientos</span>
            </a>
            <span className={'tooltip'}>Movimientos</span>
          </li>
          <li>
            <a href={'#'}>
              <box-icon type={'solid'} name={'user-circle'} />
              <span className={'links_name'}>Usuario</span>
            </a>
            <span className={'tooltip'}>Usuario</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
