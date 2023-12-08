import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function Loading()
{
  return (
    <div className='h-screen grid'>
      <Spinner className='' size='lg' />
    </div>
  )
}
