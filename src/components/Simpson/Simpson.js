export default function Simpson(props) {
    console.log(props)
    let {simpson} = props;
    return (
        <div>
            <h3>{simpson.name} - {simpson.age}</h3>
            <p>{simpson.surname} - {simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}