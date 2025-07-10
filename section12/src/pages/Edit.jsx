import {useParams } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    console.log(params);
    return(
        <div>
            Edit/{params.id};
        </div>
    );
};
export default Edit;