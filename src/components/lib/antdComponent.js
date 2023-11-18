"use client";
import {
  Tabs,
  ConfigProvider,
  Input,
  Button,
  Switch,
  DatePicker,
  TimePicker,
  Select,
  InputNumber,
  Calendar,
  Table,
  Progress,
} from "antd";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
// });
const primaryConfig = {
  //   fontFamily: poppins.style.fontFamily,
  colorPrimary: "#00359A",
};

export const CustomTab = ({ ...props }) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
      components: { Tabs: {} },
    }}
  >
    <Tabs {...props} />
  </ConfigProvider>
);

export const CustomInput = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Input {...props} />
  </ConfigProvider>
);

export const CustomInputNumber = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <InputNumber {...props} />
  </ConfigProvider>
);

export const TextArea = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Input.TextArea {...props} />
  </ConfigProvider>
);

export const CustomPasswordInput = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Input.Password {...props} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }) => (
  <ConfigProvider
    theme={{ token: { ...primaryConfig, colorPrimary: "#00AEFF" } }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const CustomSwitch = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Switch {...props} />
  </ConfigProvider>
);

export const CustomDatePicker = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <DatePicker {...props} />
  </ConfigProvider>
);

export const CustomTimePicker = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <TimePicker {...props} />
  </ConfigProvider>
);

export const CustomSelect = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Select {...props} />
  </ConfigProvider>
);

export const CustomCalendar = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Calendar {...props} />
  </ConfigProvider>
);

export const CustomTable = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Table {...props} />
  </ConfigProvider>
);

// export const ThemeTable = ({ ...props }) => (
//   <ConfigProvider
//     theme={{
//       token: { ...primaryConfig },
//       components: { Table: { headerBg: "#00359A" } },
//     }}
//   >
//     <Table {...props} />
//   </ConfigProvider>
// );

export const CustomProgress = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Progress
      trailColor="#00AEFF"
      strokeColor="#00359A"
      type="circle"
      strokeWidth={20}
      strokeLinecap="square"
      {...props}
    />
  </ConfigProvider>
);
