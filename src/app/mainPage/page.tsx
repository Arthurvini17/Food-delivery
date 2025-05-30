"use client";

import React from "react";

type MainPageProps = {
  title?: string;
  user?: string;
  time?: string;
};

const MainPage: React.FC<MainPageProps> = ({
  title = "Olá",
  user = "usuario.",
  time = "Boa tarde",
}) => {
  return (
    <main>
      <div>
        <h1>
          {title} {user} {time}
        </h1>
      </div>
    </main>
  );
};

export default MainPage;
