import { ElementProps, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import deleteIcon from "../../../assets/delete-icon.svg";
import React from 'react';
import './DeleteButton.scss'
import classNames from 'classnames';

interface DeleteButtonProps extends UnstyledButtonProps, ElementProps<'button', keyof UnstyledButtonProps>{}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
    return (
        <UnstyledButton {...props} className={classNames('deleteBtn', props.className)}>
            <img src={deleteIcon} alt="Удалить" width={12} height={12}/>
        </UnstyledButton>
    );
};
export default DeleteButton;
