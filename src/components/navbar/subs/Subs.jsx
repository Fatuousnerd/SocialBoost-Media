import "../navbar.scss";
import "./subs.scss";
import { ForwardToInbox } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const Subs = () => {
  return (
    <div className="bar">
        <div className="search">
            <ForwardToInbox />
        </div>
        <form action="">
            <input type="text" placeholder="Subscribe to Our Newsletter" disabled/>
            <button type="submit" disabled>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Subs