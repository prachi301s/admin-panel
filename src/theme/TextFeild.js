export default function TextField(theme) {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "--TextField-brandBorderColor":
                        theme.palette.secondary.main,
                    "--TextField-brandBorderHoverColor":
                        theme.palette.secondary.main,
                    "--TextField-brandBorderFocusedColor":
                        theme.palette.secondary.main,
                    "& .MuiInputLabel-filled": {
                        color: theme.palette.grey[800],
                        marginLeft: 14,
                        marginRight: 14,
                        "&.Mui-focused:not(.Mui-error)": {
                            color: theme.palette.primary.dark,
                        },
                    },
                    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
                        marginRight: 8,
                    },
                    "& .MuiInputAdornment-root.MuiInputAdornment-positionStart":
                        {
                            marginLeft: 12,
                        },
                },
            },
        },

        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: {
                    // "&:before, &:after": {
                    //     borderBottom: "none",
                    // },
                    // "&:hover:not(.Mui-disabled, .Mui-error):before": {
                    //     borderBottom: "none",
                    // },
                    // "&.Mui-focused:after": {
                    //     borderBottom: "none",
                    // },
                    borderRadius: 30,
                    overflow: "hidden",
                    backgroundColor: theme.palette.grey[200],
                    border: `2px solid ${theme.palette.grey[200]}`,
                    transition: theme.transitions.create([
                        "border-color",
                        "background-color",
                        "box-shadow",
                    ]),

                    "&:hover:not(.Mui-disabled, .Mui-error)": {
                        backgroundColor: "transparent",
                        border: "2px solid var(--TextField-brandBorderHoverColor)  ",
                    },
                    "&.Mui-focused": {
                        backgroundColor: "transparent",
                        border: "2px solid var(--TextField-brandBorderFocusedColor) ",
                    },
                    "& .MuiFilledInput-input": {
                        paddingLeft: 25,
                        paddingRight: 25,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "transparent",
                        border: `2px solid ${theme.palette.grey[500]}`,
                    },
                },
                error: {
                    borderColor: theme.palette.error.main,
                    backgroundColor: theme.palette.grey[200],
                    "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: theme.palette.error.main,
                    },
                    "&.Mui-focused": {
                        borderColor: theme.palette.error.main,
                    },
                },
            },
        },
    };
}