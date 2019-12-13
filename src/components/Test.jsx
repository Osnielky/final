import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, } from 'reactstrap';
import Log from './Login';
import '../../src/App.css';

export default function Example1() {
    return (
        <UncontrolledDropdown id="UncontrolledDropdown">
            <DropdownToggle caret>
                Login
      </DropdownToggle>
            <DropdownMenu id="DropdownMenu">

                <Log />
            </DropdownMenu>

            <img id="img1" src="https://icon-library.net/images/shopping-cart-icon-vector/shopping-cart-icon-vector-21.jpg" alt="" />

        </UncontrolledDropdown>
    );
}