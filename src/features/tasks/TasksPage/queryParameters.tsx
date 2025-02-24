import { useNavigate, useLocation } from "react-router-dom";

export const useQueryParameter = (key: string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return ({ key, value }: { key: string, value?: string }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        }
        else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        navigate(`${location.pathname}?${newSearch}`);
    }
};