import React, {ChangeEvent} from 'react'
import styles from './SearchInputText.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';

type SearchInputTextPropsType = {
    value: string
    onChange: (e: string) => void
}

export const SearchInputText = ({value, onChange}: SearchInputTextPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)

    return <OutlinedInput
        placeholder={'Search'}
        value={value}
        onChange={onChangeInputHandler}
        className={styles.input}
        endAdornment={<SearchIcon className={styles.icon}/>}
    />
}