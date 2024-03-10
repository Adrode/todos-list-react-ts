import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        }

        searchParams.set(searchQueryParamName, target.value);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filter tasks"
                value={query || ""}
                onChange={onInputChange}
            ></Input>
        </Wrapper>
    )
};

export default Search;