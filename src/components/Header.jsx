import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/settingsActions";

export default function Header() {
  const user = useSelector((store) => store.settings.user);
  const dispatch = useDispatch();

  return (
    <header>
      Merhaba {user.email}{" "}
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </header>
  );
}
