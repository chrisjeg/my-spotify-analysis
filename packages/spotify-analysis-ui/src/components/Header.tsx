import React from "react";
import { H1, Button, Card, H2, H3 } from "@blueprintjs/core";
import { UserProfileDetails } from "../reducer/state";
import DataCard from "./DataCard";

interface HeaderProps {
  isLoggedIn: boolean;
  userProfile: UserProfileDetails;
}

export default ({ isLoggedIn, userProfile }: HeaderProps) => (
  <div>
    <H1>Your Breakdown</H1>
    {(!isLoggedIn || !userProfile) ? (
      <DataCard>
        <Button>Log into Spotify</Button>
      </DataCard>
    ) : (
      <DataCard>
        <H3>{userProfile.username}</H3>
        <H3>{userProfile.displayName}</H3>
      </DataCard>
    )}
  </div>
);
