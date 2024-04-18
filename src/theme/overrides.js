import { alpha } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export function overrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
          textTransform: 'capitalize',
        },
        // sizeLarge: {
        //     height: 30,
        // },
        // contained: {
        //   // outline: `${theme.palette.primary.main} solid 1px`,
        //   // border: "none",
        //   // width: "10%",

        //   borderRadius: '0.5rem',
        //   color: theme.palette.primary.textColor,
        //   backgroundColor: theme.palette.primary.main,
        //   '&:hover': {
        //     color: theme.palette.primary.textColor,
        //     backgroundColor: theme.palette.primary.light,
        //   },
        // },
        containedPrimary: {
          boxShadow: '0px 10px 50px 0px rgba(104, 67, 126, 0.20)',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
          },
          '&.Mui-disabled': {
            color: theme.palette.common.white,
          },
        },
        containedSecondary: {
          boxShadow: '0px 10px 50px 0px rgba(91, 175, 169, 0.20)',
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.main,
          },
          '&.Mui-disabled': {
            color: theme.palette.common.white,
          },
        },

        textPrimary: {
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.dark,
          },
        },
        textSecondary: {
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.secondary.dark,
          },
        },
        outlined: {
          // outline: `${theme.palette.primary.main} solid 1px`,
          borderColor: `${theme.palette.primary.main}`,

          padding: '4px 10px',
          // color: theme.palette.primary.textColor,
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            color: theme.palette.secondary.textColor,
            // backgroundColor: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.light,
          },
        },
        text: {
          '&:hover': {
            backgroundColor: theme.palette.secondary.textColor,
            // backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {

    //     containedInherit: {
    //       color: theme.palette.common.white,
    //       backgroundColor: theme.palette.grey[800],

    //       '&:hover': {
    //         color: theme.palette.common.white,
    //         backgroundColor: theme.palette.grey[800],
    //       },
    //     },
    //     sizeLarge: {
    //       minHeight: 48,

    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          padding: theme.spacing(1, 1, 1, 1),
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       [`& .${outlinedInputClasses.notchedOutline}`]: {
    //         borderColor: alpha(theme.palette.grey[500], 0.24),
    //       },
    //     },
    //   },
    // },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.dark,
          borderRadius: '0.4rem',
          padding: '0.3rem',
          margin: '0.1rem',
          backgroundColor: theme.palette.secondary.light,
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-cell': {
            '&:last-child': {
              borderRight: 'none',
            },
            // ":nth-last-child(2)": {
            //     borderRight: 0,
            // },
            // ":nth-last-of-type(2)": {
            //     borderRight: 0,
            // },
          },
          '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#EFEFEF',
          },
          '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus ': {
            outline: 'none',
          },
          '.MuiDataGrid-columnHeaderTitle': {
            fontWeight: 400,
          },
          '&.MuiDataGrid-columnGroupHeader':{
            headerAlign:"center",
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            width: '0.4em',
            height: '0.4em',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
            background: '#d9d9d9',
            borderRadius: '180px',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
            backgroundColor: '#fe870a',
            borderRadius: '180px',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
            background: '#fe870a',
          },
        },
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          // backgroundColor: 'lightblue',
          height: '2rem',
          '& .MuiTab-root': {
            minHeight: '1rem',
            color:"black"
          },
          '& .MuiTabs-indicator': {
            height: '0.3rem',
            borderRadius: '0 0 0.75rem 0.75rem',
            backgroundColor: theme.palette.primary.main, 
          },
        },
       
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
        
          '&.Mui-selected': {
            color: 'black', 
          },
         
        },
      },
    },
  };
}
