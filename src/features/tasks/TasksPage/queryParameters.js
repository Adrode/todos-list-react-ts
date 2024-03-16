import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (queryParamName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(queryParamName);
};

export const useReplaceQueryParameter = (key, value) => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    searchParams.set(key, value);
    history.push(`${location.pathname}?${searchParams.toString()}`);
};