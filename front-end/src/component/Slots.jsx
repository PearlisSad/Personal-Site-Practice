import React from "react";

function Slots(){
        // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        roll_one: 0,
        roll_two: 0,
        roll_three: 0
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/roll").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    roll_one: data.one,
                    roll_two: data.two,
                    roll_three: data.three,
                });
            })
        );
    }, []);

    return (
        <>
        <h1>React and flask</h1>
        {/* Calling a data from setdata for showing */}
        <p>{data.roll_one}</p>
        <p>{data.roll_two}</p>
        <p>{data.roll_three}</p>
        </>
    );
}

export default Slots