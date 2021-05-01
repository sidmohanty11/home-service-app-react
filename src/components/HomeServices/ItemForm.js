import React from 'react';
import Input from '../UI/Input';
import './ItemForm.css';

const ItemForm = (props) => {
    return (
        <form className="form">
            <Input label="Men needed" input={{type:'number',id:'amount_'+props.id,min:'1',max:'5',step:'1',defaultValue:'1'}} />
            <button>Add</button>
        </form>
    )
}

export default ItemForm;
