import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import React, {useRef} from "react";

const Photos = () => {
    const handleRegister = () => {

    }

    return (
        <div className="col-md-12">
            <div className="">
                <Form onSubmit={handleRegister}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="photo">Username</label>
                                <Input
                                    type="file"
                                    className=""
                                    name="file"
                                    enctype="multipart/form-data"
                                />
                            </div>
                        </div>
                    <input type="submit" value="Submit" />

                </Form>
            </div>
        </div>
    )
}

export default Photos