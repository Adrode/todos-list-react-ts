import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName());
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        replaceQueryParameter({
            key: searchQueryParamName(),
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Search for specific task"
                value={query || ""}
                onChange={onInputChange}
            ></Input>
        </Wrapper>
    )
};

export default Search;