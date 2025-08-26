import type { SvgIconProps } from "@mui/material/SvgIcon";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/PeopleAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EditIcon from "@mui/icons-material/EditDocument";
import SaveIcon from "@mui/icons-material/Save";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EmailIcon from "@mui/icons-material/Email";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Check from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Mapa de íconos disponibles (whitelist)
const icons = {
  Menu: MenuIcon,
  Close: CloseIcon,
  Add: AddIcon,
  Business: BusinessIcon,
  CalendarMonth: CalendarIcon,
  Home: HomeIcon,
  PeopleAlt: PeopleIcon,
  PendingActions: PendingActionsIcon,
  EditDocument: EditIcon,
  Save: SaveIcon,
  Notifications: NotificationsIcon,
  AccessAlarm: AccessAlarmIcon,
  LocalPhone: LocalPhoneIcon,
  ContentPaste: ContentPasteIcon,
  LocationOn: LocationOnIcon,
  QueryBuilder: QueryBuilderIcon,
  Email: EmailIcon,
  TrendingUp: TrendingUp,
  Check: Check,
  KeyboardArrowDown: KeyboardArrowDownIcon,
};

export type MuiIconName = keyof typeof icons;

export interface MuiIconProps extends SvgIconProps {
  name: MuiIconName;
  className?: string;
}

export const MuiIcon: React.FC<MuiIconProps> = ({
  name,
  className,
  ...props
}) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} {...props} />;
};

export const MuiIconRegistry = icons;
