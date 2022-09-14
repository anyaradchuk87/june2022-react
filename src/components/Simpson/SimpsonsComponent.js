export default function SimpsonComponent (props) {

    let {itemName, pic, text} = props;


    let classNameItem = 'family';
    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
            <p>{text}</p>

        </div>
    )
}
