import { CSSInterpolation } from '@emotion/serialize';
import { COLORS, FONT_FAMILY } from './constant';

type ButtonType = 'primary' | 'secondary' | 'disable'
type ButtonTheme = Record<ButtonType, CSSInterpolation>;

const { button: BUTTON_COLORS } = COLORS;

const Button: ButtonTheme = {
    disable: {
      fontFamily: FONT_FAMILY.common,
      color: BUTTON_COLORS.white,
      backgroundColor: BUTTON_COLORS.backgroundGrey,
      borderRadius: 52,
      padding: '0 8px',
      '&.large': {
        // minWidth: 115,
        // height: 42.5,
        fontSize: 17,
      },
      '&.medium': {
        // minWidth: 90,
        // height: 36,
        fontSize: 14,
      },
      '&.small': {
        // minWidth: 82,
        // height: 31,
        fontSize: 12,
      },
    },
    primary: {
      fontFamily: FONT_FAMILY.common,
      color: BUTTON_COLORS.white,
      backgroundColor: BUTTON_COLORS.primary,
      borderRadius: 52,
      padding: '0 12px',
      '&.large': {
        // minWidth: 115,
        // height: 42.5,
        fontSize: 17,
      },
      '&.medium': {
        // minWidth: 90,
        // height: 36,
        fontSize: 14,
      },
      '&.small': {
        // minWidth: 82,
        // height: 31,
        fontSize: 12,
      },
    },
    secondary: {
      fontFamily: FONT_FAMILY.common,
      color: BUTTON_COLORS.textGrey,
      backgroundColor: BUTTON_COLORS.white,
      borderRadius: 52,
      padding: '0 8px',
      borderColor: BUTTON_COLORS.borderGrey,
      borderWidth: 1,
      borderStyle: 'solid',
      '&.large': {
        minWidth: 115,
        // height: 42.5,
        fontSize: 17,
      },
      '&.medium': {
        minWidth: 90,
        // height: 36,
        fontSize: 14,
      },
      '&.small': {
        minWidth: 82,
        // height: 31,
        fontSize: 12,
      },
    },
  };
  
  export default Button;
  
