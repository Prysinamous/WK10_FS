import React, { useState } from "react";

function NameFunc(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAdd] = useState("");
    const [address2, setAdd2] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postal, setPostal] = useState("");

    const onChangename = (event) => {
        setName(event.target.value);
    };

    const onChangeemail = (event) => {
        setEmail(event.target.value);
    };

    const onChangeAdd = (event) => {
        setAdd(event.target.value);
    };

    const onChangeAdd2 = (event) => {
        setAdd2(event.target.value);
    };

    const onChangecity = (event) => {
        setCity(event.target.value);
    };

    const onChangeprovience = (event) => {
        setProvince(event.target.value);
    };

    const onChangePostal = (event) => {
        setPostal(event.target.value);
    };



    return (
        <>

            <div className="top">
            <div>
                <label htmlFor="emailval">Email</label>
                {/* set state on change of value */}
                <input type="email" id="email" placeholder="Enter email" value={email} onChange={onChangeemail} />
            </div>

            <div>
                <label htmlFor="nameVal">Name</label>
                <input type="text" id="name" placeholder="Enter email" value={name} onChange={onChangename}  />
            </div>

            </div>

            <label id="add">Address</label>
            <input type="text" id="add" placeholder="1234 Main St" value={address} onChange={onChangeAdd}  />

            <label id="add2">Address 2</label>
            <input type="text" id="add2" placeholder="Unit or Apartment Number"  value={address2} onChange={onChangeAdd2}/>


            <div className="bottom">
                <div>
                    <label htmlFor="cityval">City</label>
                    <input type="text" id="cityval" value={city} onChange={onChangecity} />
                </div>


                <div>
                    <label htmlFor="pr" id="province">
                        Province
                    </label>

                    <select id="pr" value={province} onChange={onChangeprovience}>
                        <option value="Alberta">Ontario</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value=" Manhitoba">Newfie</option>
                        <option value="New bornswick">New Brunswick</option>
                    </select>

                </div>


                <div>
                    <label htmlFor="poo">Postal Code</label>
                    <input type="text" id="poo" value={postal} onChange={onChangePostal}/>
                </div>

                <input type="checkbox" /> Agree to the terms and conditions?

                <input type="submit" value="Submit" id="btn" />

            </div>

            <div className="ooppa">
                <div>{`Full name: ${name}`}</div>
                <div>{`Email: ${email}`}</div>
                <div>{`Address: ${address}`}</div>
                <div>{`Adddress 2: ${address2}`}</div>
                <div>{`City: ${city}`}</div>
                <div>{`Province: ${province}`}</div>
                <div>{`Postal code: ${postal}`}</div>
            </div>



        </>
    );
}

export default NameFunc
