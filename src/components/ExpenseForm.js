import React from 'react';
import {MdSend} from 'react-icons/md'

export const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">расходы</label>
                    <input className="form-control" type="text" name="charge" id="charge" placeholder='бензин'
                    value={charge} onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">количество</label>
                    <input className="form-control" type="number" name="amount" id="amount" placeholder='1300 ₽'
                    value={amount} onChange={handleAmount}/>
                </div>
            </div>

            <button type='submit' className='btn'>
                {edit ? 'изменить' : 'добавить'}
                <MdSend className='btn-icon' />
            </button>

        </form>
    )
}
