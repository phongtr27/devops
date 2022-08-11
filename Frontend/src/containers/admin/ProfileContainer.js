import { useLocation } from "react-router-dom";
import { Profile } from "../../components";
import { ADMIN, HOME } from "../../constants/routes";

const ProfileContainer = ({ user, setUser }) => {
	const { pathname } = useLocation();

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<Profile>
			<Profile.Name>
				<Profile.Icon className="fas fa-user" />
				<Profile.Icon className="fas fa-angle-down" />
			</Profile.Name>

			<Profile.Dropdown>
				{user.isAdmin ? (
					<Profile.Link
						to={pathname.includes("/admin") ? HOME : ADMIN}
					>
						<Profile.Icon
							className={
								pathname === ADMIN
									? "fas fa-home-alt"
									: "fas fa-user-shield"
							}
						/>
						<Profile.Text>
							{pathname === ADMIN ? "Homepage" : "Dashboard"}
						</Profile.Text>
					</Profile.Link>
				) : null}

				<Profile.Button onClick={handleLogout}>
					<Profile.Icon className="fas fa-sign-out" />
					<Profile.Text>Log out</Profile.Text>
				</Profile.Button>
			</Profile.Dropdown>
		</Profile>
	);
};

export default ProfileContainer;
