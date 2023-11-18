let catch_form = document.getElementById('add');


catch_form.addEventListener('click', push2crudcrud);

window.onload = function()
{
    axios.get("https://crudcrud.com/api/e056a10ae2b14c12acc7bb872dfbc769/restro-bar")
    .then(value=>
        {
            for(let i=0;i<value.data.length;i++)
            {
                
            
                let temp1 = value.data[i].table_name;
                let temp2 = document.getElementById(temp1);
                let new_entry = document.createElement('li');
                new_entry.setAttribute('name',value.data[i].item_name);
                new_entry.textContent = value.data[i].item_name + " ";
                

                let delete_entry = document.createElement('button');
                delete_entry.setAttribute('id','delete');
                delete_entry.textContent = 'remove';

                new_entry.appendChild(delete_entry);
                temp2.appendChild(new_entry);

                delete_entry.addEventListener('click', remove4mCrudCrud);
                delete_entry.myParam = value.data[i]._id;
            }
        })
    .catch(err=>console.log(err));    
}

function push2crudcrud(e)
{
    e.preventDefault();
    let item_cost = document.getElementById('item_price').value;
    let item_name = document.getElementById('item_name').value;
    let table_name = document.getElementById('tables').value;

    //console.log(item_cost,item_name,table_name);
    let myObj={
        "item_cost":item_cost,
        "item_name":item_name,
        "table_name":table_name
    };

    axios.post("https://crudcrud.com/api/e056a10ae2b14c12acc7bb872dfbc769/restro-bar",myObj)
    .then(value=> 
        {
            

            let temp1 = value.data.table_name; 
            let temp2 = document.getElementById(temp1);
            let new_order = document.createElement('li');
            new_order.setAttribute('name',value.data.item_name);
            new_order.textContent = value.data.item_name + " ";
            
            let delete_entry = document.createElement('button');
            delete_entry.setAttribute('id','delete');
            delete_entry.textContent = 'remove';
            
            
            new_order.appendChild(delete_entry);
            temp2.appendChild(new_order);
           

            delete_entry.addEventListener('click', remove4mCrudCrud);
            delete_entry.myParam = value.data._id;

        })
    .catch(err=>console.log(err));
}

function remove4mCrudCrud(e)
{
    e.preventDefault();
    
    axios.delete(`https://crudcrud.com/api/e056a10ae2b14c12acc7bb872dfbc769/restro-bar/${e.target.myParam}`)
    .then(value=>{
        console.log(value);
        e.target.parentNode.remove();
    })
    .catch(err=>console.log(err));
    
}