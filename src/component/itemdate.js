import './itemdate.css'
 function Itemdate(props){
    const date=props.date;
    const month=props.month;
    const year=props.year;
    return (
        <div className='itemdate'>
            {/* to get the value of variable use{} ,helps to dynamically
            update the data*/}
            <span>{date}</span>
            <span>{month}</span>
            <span>{year}</span>

            {/* <span>18</span>
            <span>sept</span>
            <span>2023</span> */}
            {/* if u use hard core values then u are always going to
            get the same ans inspite of how many times u use this function */}
        </div>

    );
 }
 export  default Itemdate;