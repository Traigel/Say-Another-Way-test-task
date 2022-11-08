import React, {ChangeEvent} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';

type SearchInputTextPropsType = {
    value: string
    onChange: (e: string) => void
}

export const SearchInputText = ({value, onChange}: SearchInputTextPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)

    const stylesInput = {
        height: 50,
        width: 300,
        borderRadius: 0,
        paddingRight: 0,
        fontFamily: 'Oswald',
        fontSize: 18
    }

    const stylesIcon = {
        color: 'white',
        backgroundColor: '#333',
        width: 55,
        height: 48,
        padding: '6px 3px',
        margin: '1px 1px 1px 10px'
    }

    return <OutlinedInput
        placeholder={'Search'}
        value={value}
        onChange={onChangeInputHandler}
        sx={stylesInput}
        endAdornment={<SearchIcon sx={stylesIcon}/>}
    />
}