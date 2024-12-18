import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="container mx-auto mt-5">{children}</div>;
};

export default Layout;
