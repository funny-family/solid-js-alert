import type {
  AlertComponent,
  AlertRootElement,
  AlertAttrsAndProps,
} from './alert.types';
import './modal.styles.css';

export const Alert: AlertComponent = (attrsAndProps) => {
  return <div {...attrsAndProps} />;
};
