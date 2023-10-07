import './item.css';
// importing css file 
function Item(props){
    return (<div>
        <p className='nirma'>{props.name}</p> {props.children}
    </div>);
    // koi component ke under content daal ne se visible nhi hota hai 
    // props.children use karna padhta hai
}
export default Item;
// returning the item function so that can be used in other file
// jo file use kar rahe hai usko export kar dete hai


// in react we can't pass siblings 
// we need a parent element to pass all the siblings