//JSX
//fragment

import './style.css'

const MyComponent = () => {
    // const hoidanit = An; //string
    // const hoidanit = 25; //number
    // const hoidanit = true; // boolean
    // const hoidanit = undefined;
    // const hoidanit = null;
    const hoidanit = [1, 2, 3];
    // const hoidanit = {
    //     name: "hoidanit",
    //     age: 25
    // };
    return (
        <>
            <div> {JSON.stringify(hoidanit)} & HoidanIT</div>
            <div>{console.log("An")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    );
}

export default MyComponent;