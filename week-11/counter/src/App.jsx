import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {counterAtom} from './store/atoms/counter.js'


function App()
{
  return<RecoilRoot><Counter/>
  </RecoilRoot> 
}

function Counter()
{
  

  return<> <CurrentCounter/>
  <Increase />
  <Decrease /> </>
}

function CurrentCounter()
{
  const count = useRecoilValue(counterAtom)
  return <p>{count}</p>
}

function Increase()
{
  const setCount = useSetRecoilState(counterAtom)

  return <button onClick={()=> setCount(prev=> prev+1)} >Increase</button>
}

function Decrease()
{

  const setCount = useSetRecoilState(counterAtom)

  return <button onClick={ ()=> setCount( prev=> prev-1)}>Decrease</button>

}

export default App;