export default function ValidationError(message){
    if(typeof(message) != "object")
        return <p style={{ color: 'red' }}>{message}</p>;
};

