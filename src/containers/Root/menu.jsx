import {
    DashboardOutlined,
    UploadOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";

export default [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/rooms",
    icon: <VideoCameraOutlined />,
    label: "Rooms",
  },
  {
    key: "/upload",
    icon: <UploadOutlined />,
    label: "Upload",
  },
];
