import { createTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors';

const borderRadius = 4;

export default createTheme({
  palette: {
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiInputBase: {
      input: { background: '#fff' },
      multiline: { background: '#fff' }
    },
    MuiSelect: {
      outlined: {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiDialog: {
      transitionDuration: 0,
    },
    MuiPopover: {
      PaperProps: { square: true },
    },
    MuiTooltip: {
      enterDelay: 1200,
      arrow: true,
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiIcon: {
      fontSize: 'small'
    },
    MuiButton: {
      disableElevation: true,
      variant: 'contained',
      disableRipple: true,
    },
    MuiTextField: {
      variant: 'outlined',
      margin: 'dense',
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiFormControl: {
      variant: 'outlined',
      margin: 'dense',
    },
  },
});