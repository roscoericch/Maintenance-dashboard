"use client";
import { Tabs, ConfigProvider, Input, Button } from "antd";
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
