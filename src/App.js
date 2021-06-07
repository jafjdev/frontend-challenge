import DirectoryList from "./ui/components/DirectoryList/DirectoryList";
import { getOffers } from "./services/directory.api";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
    const fetchOffersList = async page => {
        setLoading(true);
        return getOffers(page).finally(() => setLoading(false));
    };

    const useStyles = makeStyles(theme => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    }));
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    return (
        <>
            <DirectoryList offerList={fetchOffersList} />
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="#a0aec0" size={80} />
            </Backdrop>
        </>
    );
}
