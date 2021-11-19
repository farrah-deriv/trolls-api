import style from "./SelectRequestInput.module.scss";

const SelectRequestInput = () => {
    return (
        <fieldset className={style["api-request"]}>
            <select className={style["dark"]}>
                <option selected>
                    Select API Call - Version 3
                </option>
                <optgroup>
                    <option value="{{ method.name }}"></option>
                </optgroup>
            </select>
        </fieldset>
    )
}

export default SelectRequestInput;