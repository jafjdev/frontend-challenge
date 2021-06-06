import axios from "../axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const directory = "/directory";
const defaultPage = process.env.REACT_APP_DEFAULT_PAGE;
const defaultElements = process.env.REACT_APP_DEFAULT_ELEMENTS;

export const getOffers = async page =>
    axios.get(baseUrl + directory, {
        params: {
            epp: defaultElements,
            p: page || defaultPage,
        },
    });
