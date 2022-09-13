import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "components/Button";
import s from './contacts-item.module.css';


export default class ContactsItem extends Component {
    onItemMouseOver = (e) => {
        e.currentTarget.classList.toggle(s.focus);
    }
    onItemMouseleave = (e) => {
        e.currentTarget.classList.toggle(s.focus);
    }
    render(){ 
        const { name, number, deleteHandler } = this.props;
    return (
        <li onMouseOut={this.onItemMouseleave} onMouseOver={this.onItemMouseOver} className={s.item}>
            <span className={s.name}>{name}:</span>
            <span className='contact-num'>{number}</span>
            <Button dlt type="button" onClickHandler={deleteHandler}>Delete</Button>
        </li>
    )
}
}
ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}