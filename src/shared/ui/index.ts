import { lazy } from 'react';

export const Button = lazy(() => import('antd/es/button/button'));
export const Input = lazy(() => import('antd/es/input/Input'));
export const Tag = lazy(() => import('antd/es/tag'));
export const Modal = lazy(() => import('antd/es/modal/Modal'));

export { DeleteButtonAsync as DeleteButton } from './button/deleteButton/DeleteButton.async';
export { EditButtonAsync as EditButton } from './button/editButton/EditButton.async';
