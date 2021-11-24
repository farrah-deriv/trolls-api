import playground_requests from "utils/playground_requests";
import style from "./SelectRequestInput.module.scss";

const SelectRequestInput: React.FC<{ handleChange: React.ChangeEventHandler<HTMLSelectElement> }> = ({ handleChange }) => {
    const default_value: string = "Select API Call - Version 3";
    const playground_requests_copy = [...playground_requests];
    const sorted_playground_requests = playground_requests_copy.sort((a, b) => a.title.localeCompare(b.title))
    return (
        <fieldset className={style["api-request"]}>
            <select className={style["dark"]} onChange={handleChange} defaultValue={default_value}>
                <option disabled>{default_value}</option>
                <optgroup label="All calls">
                    {sorted_playground_requests.map(el => <option value={el.name} key={el.name}>{el.title}</option>)}
                </optgroup>
            </select>
        </fieldset>
    );
};

export default SelectRequestInput;
