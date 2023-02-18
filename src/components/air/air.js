
const Air = ({air}) => {
    const {flight_number,mission_name, launch_year, mission_patch_small,links} = air
    let xsp = (launch_year == 2020);

    if (!xsp) {
        return (
            <div>
                {air && <div>
                    <div>flight_number:{flight_number}</div>
                    <div>mission_name: {mission_name}</div>
                    <div>launch_year: {launch_year}</div>
                    <div>mission_patch_small: {mission_patch_small}</div>
                    <img src={links.mission_patch_small}/>

                </div>}
            </div>
        )};
};
export {Air};
