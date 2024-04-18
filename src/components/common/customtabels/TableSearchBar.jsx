


import React from 'react';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import Iconify from '../../iconify';
import { Icon } from '@iconify/react';

export default function TableSearchBar({handleSearch}) {
  const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000000',
    width: '100%',
    border: '2px solid #EFEFEF',
    borderRadius: '10px',
    textAlign: 'center', 
    padding: theme.spacing(0, 2),
    boxSizing: 'border-box', 
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '60%',
    transform: 'translateY(-50%)',
    padding: theme.spacing(0, 2),
    color: '#EFEFEF', 
  }));

  return (
    <SearchContainer>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper>
        <Icon icon="iconoir:search" style={{ color: 'black',cursor:"pointer" }} onClick={handleSearch}/>
      </SearchIconWrapper>
    </SearchContainer>
  );
}
