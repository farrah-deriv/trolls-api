import request_types from "utils/playground_requests";
import style from "./SelectRequestInput.module.scss";

const SelectRequestInput: React.FC<{ handleChange: React.ChangeEventHandler<HTMLSelectElement> }> = ({ handleChange }) => {
    return (
        <fieldset className={style["api-request"]}>
            <select className={style["dark"]} onChange={handleChange}>
                <option selected>Select API Call - Version 3</option>
                <optgroup>
                    {request_types.map(el => <option value={el.name} key={el.name}>{el.title}</option>)}
                </optgroup>
            </select>
        </fieldset>
    );
};

export default SelectRequestInput;
