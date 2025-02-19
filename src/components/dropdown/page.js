// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@heroui/react";
// import { useSelector } from "react-redux";

// export default function DropDown({handleLogout}) {
//   
//   return (
//     <Dropdown>
//       <DropdownTrigger>
//       <Avatar size="md" src={userDetails.image} alt="profile" /> 
//        </DropdownTrigger>
//       <DropdownMenu aria-label="Static Actions">
//         <DropdownItem key="new">hi.</DropdownItem>
//         <DropdownItem key="copy">Copy link</DropdownItem>
//         <DropdownItem key="delete" className="text-danger" color="danger" onPress={() => handleLogout()}>
//           Logout
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@heroui/react";
import { useSelector } from "react-redux";

export default function DropDown({handleLogout}) {
    const {userDetails} = useSelector(state=>state.user)
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            className="transition-transform"
            description={`@${userDetails.fullName.replace(/\s+/g, '')}`}
            name={userDetails.fullName}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{`@${userDetails.fullName}`}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onPress={()=>handleLogout()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
