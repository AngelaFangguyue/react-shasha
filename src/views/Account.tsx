import React, {useState} from 'react';
import {Layout} from '../Components/Layout';
import {Category} from './Account/Category';
import {NumberPad} from './Account/NumberPad';
import {Note} from './Account/Note';
import {Labels} from './Account/Labels';
import styled from 'styled-components';
import {useLabels} from '../store/useLabels';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  background: rgba(255,218,68);
  color: #000;

`;


const Account = ()=>{
  const defaultLabel = useLabels().labels[0];
  const toDefault = ()=>{
    setDefaultChoice({
      category: '-',
      label: defaultLabel,
      note: '',
      amount: '0'
    })
  };
  const [defaultChoice,setDefaultChoice] = useState({
    category: '-',
    label: defaultLabel,
    note: '',
    amount: '0'
  });
  
  return (
    <MyLayout name='记账'>
      <Category value={defaultChoice.category}
                onChange={(value)=> setDefaultChoice({...defaultChoice,category: value})} />
      <Labels value={defaultChoice.label}
              onChange={(value)=>setDefaultChoice({...defaultChoice,label: value})} />
      <Note value={defaultChoice.note}
            onChange={(value)=>setDefaultChoice({...defaultChoice,note: value})}/>
      <NumberPad value={defaultChoice} toDefault={()=>{toDefault()}}/>
    </MyLayout>
  )
};

export {Account}